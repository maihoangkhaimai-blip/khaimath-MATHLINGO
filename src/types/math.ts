export interface WordItem {
  id: string;
  term: string;
  phonetic: string;
  meaning: string;
  formula: string;
  exampleEn?: string;
  exampleVi?: string;
  hint?: string;
}

export interface Unit {
  id: number;
  slug: string;
  color: string;
  bgColor: string;
  accentColor: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  topic: string;
  words: WordItem[];
}

export type QuestionType =
  | 'flashcard'
  | 'multiple_choice'
  | 'reverse_choice'
  | 'cloze'
  | 'word_bank'
  | 'match_pairs'
  | 'listening';

export interface MatchPairItem {
  id: string;
  left: string; // English
  right: string; // Vietnamese
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  subPrompt?: string;
  targetWord?: WordItem;
  options?: string[];
  correctAnswer: string | string[];
  pairs?: MatchPairItem[];
  tokens?: string[];
  formula?: string;
  explanation?: string;
}

export interface UserStats {
  xp: number;
  streak: number;
  gems: number;
  hearts: number;
  completedLessons: Record<string, boolean>; // e.g. "1-1", "1-2"
  unlockedAllUnits: boolean; // "có thể tùy chọn học unit nào cũng được"
  soundEnabled: boolean;
  speechRate: number; // 1.0 or 0.8
  lang: 'VI' | 'EN';
}
