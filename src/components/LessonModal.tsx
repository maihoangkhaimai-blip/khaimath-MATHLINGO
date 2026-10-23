import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Volume2,
  Heart,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  RotateCw,
  Trophy,
} from 'lucide-react';
import { Unit, QuizQuestion, WordItem } from '../types/math';
import { soundFx, speakTerm } from '../utils/audio';
import { DuoMascot } from './DuoMascot';

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  unit: Unit;
  lessonNum: number;
  onCompleteLesson: (unitId: number, lessonNum: number, earnedXp: number) => void;
  userHearts: number;
  onDeductHeart: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  unit,
  lessonNum,
  onCompleteLesson,
  userHearts,
  onDeductHeart,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[] | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isLessonFinished, setIsLessonFinished] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);

  // Match pairs specific state
  const [selectedMatchLeft, setSelectedMatchLeft] = useState<string | null>(null);
  const [selectedMatchRight, setSelectedMatchRight] = useState<string | null>(null);
  const [matchedPairIds, setMatchedPairIds] = useState<string[]>([]);

  // Word bank specific state
  const [bankTokens, setBankTokens] = useState<string[]>([]);
  const [assembledTokens, setAssembledTokens] = useState<string[]>([]);

  // Build the questions for this lesson
  const questions: QuizQuestion[] = useMemo(() => {
    // 5 words for this lesson
    const startIdx = (lessonNum - 1) * 4;
    const lessonWords = unit.words.slice(startIdx, startIdx + 4);

    const list: QuizQuestion[] = [];

    // 1. Flashcards for each word
    lessonWords.forEach((word) => {
      list.push({
        id: `fc-${word.id}`,
        type: 'flashcard',
        prompt: 'Khám phá từ vựng mới & Lật thẻ',
        subPrompt: 'Nhấn vào biểu tượng loa để nghe phát âm chuẩn và chạm thẻ để xem công thức.',
        targetWord: word,
        correctAnswer: word.term,
      });
    });

    // 2. Multiple Choice (English to Vietnamese)
    if (lessonWords.length > 0) {
      const target = lessonWords[0];
      const otherWords = unit.words.filter((w) => w.id !== target.id);
      const wrongOpts = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3).map((w) => w.meaning);
      const allOpts = [target.meaning, ...wrongOpts].sort(() => 0.5 - Math.random());

      list.push({
        id: `mc1-${target.id}`,
        type: 'multiple_choice',
        prompt: `Nghĩa tiếng Việt của thuật ngữ "${target.term}" là gì?`,
        subPrompt: `Ký hiệu / công thức toán học: ${target.formula}`,
        targetWord: target,
        options: allOpts,
        correctAnswer: target.meaning,
        explanation: `${target.term} (${target.phonetic}) = ${target.meaning}. Công thức: ${target.formula}`,
      });
    }

    // 3. Reverse Choice (Vietnamese to English)
    if (lessonWords.length > 1) {
      const target = lessonWords[1];
      const otherWords = unit.words.filter((w) => w.id !== target.id);
      const wrongOpts = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3).map((w) => w.term);
      const allOpts = [target.term, ...wrongOpts].sort(() => 0.5 - Math.random());

      list.push({
        id: `rev-${target.id}`,
        type: 'reverse_choice',
        prompt: `Chọn thuật ngữ tiếng Anh chuẩn cho: "${target.meaning}"`,
        subPrompt: target.formula,
        targetWord: target,
        options: allOpts,
        correctAnswer: target.term,
        explanation: `${target.meaning} trong tiếng Anh là "${target.term}" (${target.phonetic}).`,
      });
    }

    // 4. Cloze Sentence
    if (lessonWords.length > 2) {
      const target = lessonWords[2];
      const options = [
        target.term,
        ...unit.words.filter((w) => w.id !== target.id).slice(0, 3).map((w) => w.term),
      ].sort(() => 0.5 - Math.random());

      list.push({
        id: `cloze-${target.id}`,
        type: 'cloze',
        prompt: 'Điền thuật ngữ toán học chính xác vào chỗ trống:',
        subPrompt: target.exampleEn ? target.exampleEn.replace(new RegExp(target.term, 'i'), '[ ... ]') : `The formula ${target.formula} represents the [ ... ].`,
        targetWord: target,
        options,
        correctAnswer: target.term,
        explanation: target.exampleVi || `${target.term}: ${target.meaning}`,
      });
    }

    // 5. Match Pairs (Nối cặp từ)
    if (lessonWords.length >= 3) {
      const pairSubset = lessonWords.slice(0, 3);
      list.push({
        id: `match-${lessonNum}`,
        type: 'match_pairs',
        prompt: 'Nối các cặp thuật ngữ tiếng Anh và nghĩa tiếng Việt tương ứng:',
        correctAnswer: 'matched_all',
        pairs: pairSubset.map((w) => ({
          id: w.id,
          left: w.term,
          right: w.meaning,
        })),
        explanation: 'Bạn đã ghi nhớ chính xác các cặp thuật ngữ toán học!',
      });
    }

    // 6. Word Bank / Sắp xếp câu
    if (lessonWords.length > 3) {
      const target = lessonWords[3];
      const sentence = target.exampleEn || `Solve for the variable ${target.term}`;
      const tokens = sentence.split(' ');
      list.push({
        id: `wb-${target.id}`,
        type: 'word_bank',
        prompt: `Sắp xếp các từ tiếng Anh diễn đạt câu toán học sau:`,
        subPrompt: target.exampleVi || `Ý nghĩa: ${target.meaning}`,
        targetWord: target,
        tokens: [...tokens].sort(() => 0.5 - Math.random()),
        correctAnswer: sentence,
        explanation: sentence,
      });
    }

    return list;
  }, [unit, lessonNum]);

  // Reset state when opening or changing questions
  useEffect(() => {
    if (isOpen) {
      setCurrentStepIndex(0);
      setSelectedAnswer(null);
      setIsFlipped(false);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      setIsLessonFinished(false);
      setCorrectCount(0);
      setMatchedPairIds([]);
      setSelectedMatchLeft(null);
      setSelectedMatchRight(null);
    }
  }, [isOpen, lessonNum, unit.id]);

  const currentQuestion = questions[currentStepIndex];

  // Auto initialize word bank tokens when entering word bank step
  useEffect(() => {
    if (currentQuestion?.type === 'word_bank' && currentQuestion.tokens) {
      setBankTokens(currentQuestion.tokens);
      setAssembledTokens([]);
    }
    // Auto pronounce word on flashcard
    if (currentQuestion?.type === 'flashcard' && currentQuestion.targetWord) {
      speakTerm(currentQuestion.targetWord.term);
    }
  }, [currentStepIndex, currentQuestion]);

  if (!isOpen || !currentQuestion) return null;

  const progressPercent = Math.round(((currentStepIndex) / questions.length) * 100);

  // Handle Match Pair selection
  const handleLeftClick = (item: { id: string; left: string }) => {
    soundFx.playClick();
    setSelectedMatchLeft(item.id);
    if (selectedMatchRight) {
      checkMatch(item.id, selectedMatchRight);
    }
  };

  const handleRightClick = (item: { id: string; right: string }) => {
    soundFx.playClick();
    setSelectedMatchRight(item.id);
    if (selectedMatchLeft) {
      checkMatch(selectedMatchLeft, item.id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      soundFx.playCorrect();
      setMatchedPairIds((prev) => [...prev, leftId]);
      setSelectedMatchLeft(null);
      setSelectedMatchRight(null);

      // Check if all matched
      if (currentQuestion.pairs && matchedPairIds.length + 1 >= currentQuestion.pairs.length) {
        setSelectedAnswer('matched_all');
        setIsAnswerChecked(true);
        setIsCorrect(true);
        setCorrectCount((c) => c + 1);
      }
    } else {
      soundFx.playIncorrect();
      setSelectedMatchLeft(null);
      setSelectedMatchRight(null);
    }
  };

  // Handle Word Bank token movement
  const handlePickToken = (token: string, idx: number) => {
    soundFx.playClick();
    const newBank = [...bankTokens];
    newBank.splice(idx, 1);
    setBankTokens(newBank);

    const newAssembled = [...assembledTokens, token];
    setAssembledTokens(newAssembled);
    setSelectedAnswer(newAssembled.join(' '));
  };

  const handleReturnToken = (token: string, idx: number) => {
    soundFx.playClick();
    const newAssembled = [...assembledTokens];
    newAssembled.splice(idx, 1);
    setAssembledTokens(newAssembled);

    setBankTokens((prev) => [...prev, token]);
    setSelectedAnswer(newAssembled.join(' '));
  };

  // Submit / Check answer
  const handleCheckAnswer = () => {
    if (currentQuestion.type === 'flashcard') {
      soundFx.playClick();
      handleNextStep();
      return;
    }

    if (isAnswerChecked) {
      handleNextStep();
      return;
    }

    // Check correctness
    let correct = false;
    if (currentQuestion.type === 'word_bank') {
      const userSentence = assembledTokens.join(' ').trim().toLowerCase();
      const expected = (currentQuestion.correctAnswer as string).trim().toLowerCase();
      correct = userSentence === expected;
    } else if (currentQuestion.type === 'match_pairs') {
      correct = selectedAnswer === 'matched_all';
    } else {
      correct = selectedAnswer === currentQuestion.correctAnswer;
    }

    setIsAnswerChecked(true);
    setIsCorrect(correct);

    if (correct) {
      soundFx.playCorrect();
      setCorrectCount((c) => c + 1);
    } else {
      soundFx.playIncorrect();
      onDeductHeart();
    }
  };

  // Move to next step or complete lesson
  const handleNextStep = () => {
    setIsAnswerChecked(false);
    setSelectedAnswer(null);
    setIsFlipped(false);
    setSelectedMatchLeft(null);
    setSelectedMatchRight(null);

    if (currentStepIndex + 1 < questions.length) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Finished lesson!
      setIsLessonFinished(true);
      soundFx.playFanfare();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleFinishAndSave = () => {
    const earnedXp = lessonNum === 5 ? 50 : 25;
    onCompleteLesson(unit.id, lessonNum, earnedXp);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-2xl min-h-[580px] max-h-[92vh] flex flex-col shadow-2xl border-4 border-slate-200 overflow-hidden relative">
        {/* Top Progress & Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-white shrink-0">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors shrink-0"
            title="Thoát bài học"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Progress bar */}
          <div className="flex-1 bg-slate-100 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Hearts counter */}
          <div className="flex items-center gap-1 font-mono font-bold text-rose-500 text-sm shrink-0">
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            <span>{userHearts}</span>
          </div>
        </div>

        {/* Content Body */}
        {!isLessonFinished ? (
          <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-between">
            {/* Question prompt */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {unit.titleVi} · Bài {lessonNum}
                </span>
                <span className="text-xs text-slate-400 font-semibold font-mono">
                  Câu {currentStepIndex + 1}/{questions.length}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-slate-800 leading-snug">
                {currentQuestion.prompt}
              </h2>
              {currentQuestion.subPrompt && (
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  {currentQuestion.subPrompt}
                </p>
              )}
            </div>

            {/* Interactive Question Zone */}
            <div className="my-auto py-4">
              {/* Type 1: Flashcard */}
              {currentQuestion.type === 'flashcard' && currentQuestion.targetWord && (
                <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-3">
                  {/* Front/Back toggle segmented pill */}
                  <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        setIsFlipped(false);
                      }}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        !isFlipped
                          ? 'bg-white text-emerald-800 shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      1. Thuật ngữ tiếng Anh
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        setIsFlipped(true);
                      }}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isFlipped
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      2. Nghĩa tiếng Việt & Công thức
                    </button>
                  </div>

                  {/* Card Container */}
                  <div
                    onClick={() => {
                      soundFx.playClick();
                      setIsFlipped(!isFlipped);
                    }}
                    className={`w-full min-h-[290px] cursor-pointer rounded-3xl p-6 transition-all duration-200 border-4 shadow-md flex flex-col justify-between select-none ${
                      isFlipped
                        ? 'border-emerald-400 bg-emerald-50/90 hover:bg-emerald-50'
                        : 'border-slate-200 bg-white hover:border-emerald-300'
                    }`}
                  >
                    {!isFlipped ? (
                      /* FRONT: English Term, Phonetics, Audio */
                      <>
                        <div className="w-full flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
                            Thuật ngữ tiếng Anh
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakTerm(currentQuestion.targetWord!.term);
                            }}
                            className="p-2.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 rounded-2xl transition-transform active:scale-95"
                            title="Nghe phát âm chuẩn"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="text-center py-4 space-y-2">
                          <h3 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
                            {currentQuestion.targetWord.term}
                          </h3>
                          <p className="text-base font-mono text-emerald-700 font-bold">
                            {currentQuestion.targetWord.phonetic}
                          </p>
                          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-semibold">
                            <span>Ký hiệu:</span>
                            <span className="font-mono font-bold text-slate-700">
                              {currentQuestion.targetWord.formula}
                            </span>
                          </div>
                        </div>

                        <div className="text-xs text-emerald-700 font-extrabold flex items-center justify-center gap-1.5 py-1 bg-emerald-100/60 rounded-xl">
                          <RotateCw className="w-4 h-4 text-emerald-600" />
                          <span>Chạm vào thẻ để lật xem nghĩa tiếng Việt & công thức</span>
                        </div>
                      </>
                    ) : (
                      /* BACK: Vietnamese Meaning, Formula, Examples, Tips */
                      <>
                        <div className="w-full flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-200/80 px-2.5 py-1 rounded-lg">
                            Nghĩa tiếng Việt & Công thức
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakTerm(currentQuestion.targetWord!.term);
                            }}
                            className="p-2 bg-emerald-200/60 hover:bg-emerald-200 text-emerald-800 rounded-xl transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-bold"
                            title="Nghe lại phát âm"
                          >
                            <Volume2 className="w-4 h-4" />
                            <span>Nghe lại</span>
                          </button>
                        </div>

                        <div className="text-center py-2 space-y-3">
                          <div className="text-2xl sm:text-3xl font-black text-emerald-950">
                            {currentQuestion.targetWord.meaning}
                          </div>

                          <div className="font-mono text-sm font-extrabold bg-white px-4 py-2 rounded-2xl border-2 border-emerald-300 text-emerald-900 inline-block shadow-2xs">
                            {currentQuestion.targetWord.formula}
                          </div>

                          {currentQuestion.targetWord.exampleEn && (
                            <div className="text-left bg-white/80 p-3 rounded-2xl border border-emerald-200 text-xs space-y-1">
                              <p className="font-bold text-slate-800">
                                💬 "{currentQuestion.targetWord.exampleEn}"
                              </p>
                              {currentQuestion.targetWord.exampleVi && (
                                <p className="text-slate-600 font-medium">
                                  → {currentQuestion.targetWord.exampleVi}
                                </p>
                              )}
                            </div>
                          )}

                          {currentQuestion.targetWord.hint && (
                            <p className="text-xs text-emerald-800 font-medium">
                              💡 {currentQuestion.targetWord.hint}
                            </p>
                          )}
                        </div>

                        <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1.5 py-1 bg-white/70 rounded-xl">
                          <RotateCw className="w-4 h-4 text-slate-500" />
                          <span>Chạm để lật lại mặt tiếng Anh</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Type 2 & 3: Multiple Choice & Reverse Choice */}
              {(currentQuestion.type === 'multiple_choice' ||
                currentQuestion.type === 'reverse_choice' ||
                currentQuestion.type === 'cloze') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
                  {currentQuestion.options?.map((option, idx) => {
                    const isSelected = selectedAnswer === option;
                    let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';

                    if (isSelected) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-extrabold shadow-sm';
                    }
                    if (isAnswerChecked && isSelected) {
                      btnStyle = isCorrect
                        ? 'border-emerald-500 bg-emerald-100 text-emerald-900'
                        : 'border-rose-500 bg-rose-100 text-rose-900';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (!isAnswerChecked) {
                            soundFx.playClick();
                            setSelectedAnswer(option);
                          }
                        }}
                        disabled={isAnswerChecked}
                        className={`p-4 rounded-2xl border-2 text-left text-sm font-bold transition-all flex items-center justify-between active:scale-[0.98] ${btnStyle}`}
                      >
                        <span>{option}</span>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-slate-300 bg-transparent'
                          }`}
                        >
                          {isSelected && <span className="text-xs font-black">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Type 4: Match Pairs */}
              {currentQuestion.type === 'match_pairs' && currentQuestion.pairs && (
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  {/* Left Column (English) */}
                  <div className="space-y-2">
                    {currentQuestion.pairs.map((item) => {
                      const isMatched = matchedPairIds.includes(item.id);
                      const isSelected = selectedMatchLeft === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => !isMatched && handleLeftClick(item)}
                          disabled={isMatched}
                          className={`w-full p-3.5 rounded-2xl border-2 text-sm font-bold text-center transition-all ${
                            isMatched
                              ? 'border-emerald-300 bg-emerald-100 text-emerald-800 opacity-60 pointer-events-none'
                              : isSelected
                              ? 'border-sky-500 bg-sky-50 text-sky-800 shadow-sm'
                              : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                          }`}
                        >
                          {item.left}
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column (Vietnamese) */}
                  <div className="space-y-2">
                    {currentQuestion.pairs
                      .slice()
                      .reverse()
                      .map((item) => {
                        const isMatched = matchedPairIds.includes(item.id);
                        const isSelected = selectedMatchRight === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => !isMatched && handleRightClick(item)}
                            disabled={isMatched}
                            className={`w-full p-3.5 rounded-2xl border-2 text-xs font-bold text-center transition-all ${
                              isMatched
                                ? 'border-emerald-300 bg-emerald-100 text-emerald-800 opacity-60 pointer-events-none'
                                : isSelected
                                ? 'border-sky-500 bg-sky-50 text-sky-800 shadow-sm'
                                : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                            }`}
                          >
                            {item.right}
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Type 5: Word Bank */}
              {currentQuestion.type === 'word_bank' && (
                <div className="space-y-5 max-w-lg mx-auto">
                  {/* Assembly Line */}
                  <div className="min-h-16 p-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-wrap gap-2 items-center">
                    {assembledTokens.length === 0 ? (
                      <span className="text-xs text-slate-400 font-semibold select-none">
                        Nhấn vào các từ bên dưới theo thứ tự đúng...
                      </span>
                    ) : (
                      assembledTokens.map((token, idx) => (
                        <button
                          key={idx}
                          onClick={() => !isAnswerChecked && handleReturnToken(token, idx)}
                          disabled={isAnswerChecked}
                          className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-emerald-500 text-emerald-900 font-bold text-xs shadow-2xs hover:bg-rose-50 hover:border-rose-400 hover:text-rose-800 transition-colors"
                        >
                          {token}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Word Bank pool */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {bankTokens.map((token, idx) => (
                      <button
                        key={idx}
                        onClick={() => !isAnswerChecked && handlePickToken(token, idx)}
                        disabled={isAnswerChecked}
                        className="px-4 py-2 rounded-xl bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-800 font-bold text-xs shadow-2xs active:scale-95 transition-all"
                      >
                        {token}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Feedback / Check Action Sheet */}
            <div className="pt-4 shrink-0">
              {isAnswerChecked && (
                <div
                  className={`p-4 rounded-2xl border-2 mb-4 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 ${
                    isCorrect
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs space-y-1">
                    <span className="font-extrabold text-sm block">
                      {isCorrect ? 'Chính xác! Tuyệt vời!' : 'Chưa đúng rồi!'}
                    </span>
                    <p className="font-medium text-slate-700">
                      {currentQuestion.explanation ||
                        (isCorrect
                          ? 'Bạn đã nhớ định nghĩa rất tốt!'
                          : `Đáp án chuẩn là: ${currentQuestion.correctAnswer}`)}
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={handleCheckAnswer}
                disabled={
                  currentQuestion.type !== 'flashcard' &&
                  !selectedAnswer &&
                  currentQuestion.type !== 'match_pairs'
                }
                className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-white transition-all shadow-md active:translate-y-1 ${
                  isAnswerChecked
                    ? isCorrect
                      ? 'duo-button-green'
                      : 'bg-rose-500 hover:bg-rose-600'
                    : currentQuestion.type === 'flashcard'
                    ? 'duo-button-green'
                    : selectedAnswer
                    ? 'duo-button-green'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                {currentQuestion.type === 'flashcard'
                  ? 'Đã hiểu · Tiếp tục'
                  : isAnswerChecked
                  ? 'Tiếp tục'
                  : 'Kiểm tra'}
              </button>
            </div>
          </div>
        ) : (
          /* Lesson Complete Celebration View */
          <div className="flex-1 p-8 flex flex-col items-center justify-between text-center">
            <div className="my-auto space-y-4">
              <DuoMascot mood="cheering" size={140} speechText="Xuất sắc! +25 XP!" />

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800">
                  Hoàn thành xuất sắc bài học!
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Bạn đã nắm vững các thuật ngữ của {unit.titleVi} · Bài {lessonNum}
                </p>
              </div>

              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto pt-2">
                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-2xl">
                  <div className="flex items-center justify-center gap-1.5 text-yellow-600 font-bold text-xs mb-1">
                    <Sparkles className="w-4 h-4 fill-yellow-400" />
                    <span>XP Nhận được</span>
                  </div>
                  <span className="text-2xl font-black text-yellow-900 font-mono">
                    +{lessonNum === 5 ? 50 : 25} XP
                  </span>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-600 font-bold text-xs mb-1">
                    <Trophy className="w-4 h-4 text-emerald-600" />
                    <span>Độ chính xác</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-900 font-mono">
                    {Math.round((correctCount / Math.max(1, questions.length - 4)) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleFinishAndSave}
              className="w-full py-4 rounded-2xl duo-button-green text-white font-black text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <span>Tiếp tục học tập</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
