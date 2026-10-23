import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Trophy, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Unit, WordItem } from '../types/math';
import { soundFx } from '../utils/audio';
import { DuoMascot } from './DuoMascot';

interface QuickPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  units: Unit[];
  activeUnitId: number;
  onEarnXp: (amount: number) => void;
}

interface PracticeQuestion {
  prompt: string;
  subPrompt: string;
  targetWord: WordItem;
  options: string[];
  correctAnswer: string;
  mode: 'en_to_vi' | 'vi_to_en';
}

export const QuickPracticeModal: React.FC<QuickPracticeModalProps> = ({
  isOpen,
  onClose,
  units,
  activeUnitId,
  onEarnXp,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);

  // Generate 5 random drill questions
  const drillQuestions: PracticeQuestion[] = useMemo(() => {
    const currentUnit = units.find((u) => u.id === activeUnitId) || units[0];
    const wordsPool = [...currentUnit.words].sort(() => 0.5 - Math.random()).slice(0, 5);

    return wordsPool.map((target, idx) => {
      const mode: 'en_to_vi' | 'vi_to_en' = idx % 2 === 0 ? 'en_to_vi' : 'vi_to_en';
      const otherWords = currentUnit.words.filter((w) => w.id !== target.id);
      const wrongList = otherWords.sort(() => 0.5 - Math.random()).slice(0, 3);

      if (mode === 'en_to_vi') {
        const options = [target.meaning, ...wrongList.map((w) => w.meaning)].sort(
          () => 0.5 - Math.random()
        );
        return {
          prompt: `Thuật ngữ "${target.term}" có nghĩa tiếng Việt là gì?`,
          subPrompt: `Ký hiệu: ${target.formula}`,
          targetWord: target,
          options,
          correctAnswer: target.meaning,
          mode,
        };
      } else {
        const options = [target.term, ...wrongList.map((w) => w.term)].sort(
          () => 0.5 - Math.random()
        );
        return {
          prompt: `Chọn thuật ngữ tiếng Anh của "${target.meaning}":`,
          subPrompt: `Ký hiệu: ${target.formula}`,
          targetWord: target,
          options,
          correctAnswer: target.term,
          mode,
        };
      }
    });
  }, [units, activeUnitId, isOpen]);

  if (!isOpen) return null;

  const currentQ = drillQuestions[currentIndex];

  const handleCheck = () => {
    if (isChecked) {
      // Next
      if (currentIndex + 1 < drillQuestions.length) {
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
        setIsChecked(false);
      } else {
        setIsDone(true);
        soundFx.playFanfare();
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch {}
      }
      return;
    }

    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    setIsChecked(true);

    if (isCorrect) {
      soundFx.playCorrect();
      setScore((s) => s + 1);
    } else {
      soundFx.playIncorrect();
    }
  };

  const handleFinish = () => {
    onEarnXp(score * 5 + 10);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-lg min-h-[460px] flex flex-col shadow-2xl border-4 border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-400" />
            <h3 className="font-extrabold text-slate-800 text-sm">
              Luyện tập nhanh (5 câu hỏi)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isDone ? (
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between text-xs text-slate-400 font-bold mb-3">
                <span>Câu {currentIndex + 1} / {drillQuestions.length}</span>
                <span className="text-emerald-600 font-mono">Điểm: {score}/{drillQuestions.length}</span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-slate-800">
                {currentQ.prompt}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {currentQ.subPrompt}
              </p>

              <div className="grid grid-cols-1 gap-2.5 mt-5">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedOption === opt;
                  let style = 'border-slate-200 bg-white hover:border-slate-300';
                  if (isSelected) style = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  if (isChecked && isSelected) {
                    style = opt === currentQ.correctAnswer
                      ? 'border-emerald-500 bg-emerald-100 text-emerald-950 font-bold'
                      : 'border-rose-500 bg-rose-100 text-rose-950 font-bold';
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => !isChecked && setSelectedOption(opt)}
                      disabled={isChecked}
                      className={`p-3.5 rounded-2xl border-2 text-left text-sm transition-all flex items-center justify-between ${style}`}
                    >
                      <span>{opt}</span>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <span className="text-[10px]">✓</span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              {isChecked && (
                <div
                  className={`p-3 rounded-xl border text-xs font-bold mb-3 flex items-center gap-2 ${
                    selectedOption === currentQ.correctAnswer
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                >
                  {selectedOption === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Chính xác! Làm rất tốt!</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Đáp án đúng: {currentQ.correctAnswer}</span>
                    </>
                  )}
                </div>
              )}

              <button
                onClick={handleCheck}
                disabled={!selectedOption}
                className="w-full py-3.5 rounded-2xl duo-button-green text-white font-extrabold text-sm uppercase tracking-wider disabled:opacity-40 disabled:pointer-events-none"
              >
                {isChecked ? 'Tiếp tục' : 'Kiểm tra'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 flex-1 flex flex-col items-center justify-between text-center">
            <div className="my-auto space-y-3">
              <DuoMascot mood="cheering" size={120} speechText={`Hoàn thành! Bạn đúng ${score}/${drillQuestions.length}`} />
              <h4 className="text-2xl font-black text-slate-800">
                Luyện tập thành công!
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Bạn đã nhận được điểm kinh nghiệm luyện tập nhanh
              </p>

              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-2xl font-extrabold text-sm font-mono mt-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span>+{score * 5 + 10} XP</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-2xl duo-button-green text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Nhận thưởng & Đóng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
