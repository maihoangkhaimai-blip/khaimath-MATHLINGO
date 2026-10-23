import React, { useState } from 'react';
import {
  Check,
  Star,
  BookOpen,
  Trophy,
  Zap,
  Lock,
  Compass,
  Sparkles,
  ChevronRight,
  Maximize2,
} from 'lucide-react';
import { Unit, UserStats } from '../types/math';
import { DuoMascot } from './DuoMascot';
import { InteractiveMathWidget } from './InteractiveMathWidget';

interface UnitPathProps {
  unit: Unit;
  stats: UserStats;
  onStartLesson: (unitId: number, lessonNum: number) => void;
  onOpenUnitPicker: () => void;
  allUnits: Unit[];
  onSelectUnit: (unitId: number) => void;
}

export const UnitPath: React.FC<UnitPathProps> = ({
  unit,
  stats,
  onStartLesson,
  onOpenUnitPicker,
  allUnits,
  onSelectUnit,
}) => {
  const [showMathLab, setShowMathLab] = useState<boolean>(true);

  // 5 lessons per unit
  const lessonsMeta = [
    { num: 1, title: 'Thuật ngữ & Khái niệm cốt lõi', icon: Star, desc: 'Từ vựng 1 - 4' },
    { num: 2, title: 'Định nghĩa & Công thức toán', icon: BookOpen, desc: 'Từ vựng 5 - 8' },
    { num: 3, title: 'Mối quan hệ & Phương pháp giải', icon: Zap, desc: 'Từ vựng 9 - 12' },
    { num: 4, title: 'Định lý & Bài toán áp dụng', icon: Sparkles, desc: 'Từ vựng 13 - 16' },
    { num: 5, title: 'Bài kiểm tra Checkpoint Unit', icon: Trophy, desc: 'Thuần thục 20 thuật ngữ' },
  ];

  // Sinuous horizontal offset offsets for the Duolingo winding path
  const nodeOffsets = [
    'translate-x-0',
    'translate-x-8',
    'translate-x-12',
    'translate-x-4',
    'translate-x-0',
  ];

  return (
    <div className="max-w-xl mx-auto space-y-6 pb-20">
      {/* Unit Selector Strip (Direct Unit Selection: "có thể tùy chọn học unit nào cũng được") */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-2 shadow-xs">
        <div className="flex items-center justify-between px-2 py-1 mb-1 text-xs text-slate-500 font-bold">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chọn nhanh Unit muốn học:</span>
          </span>
          <button
            onClick={onOpenUnitPicker}
            className="text-emerald-600 hover:text-emerald-700 font-extrabold flex items-center gap-0.5"
          >
            <span>Tất cả 6 Unit</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-6 gap-1.5">
          {allUnits.map((u) => {
            const isActive = u.id === unit.id;
            let completedCount = 0;
            for (let l = 1; l <= 5; l++) {
              if (stats.completedLessons[`${u.id}-${l}`]) completedCount++;
            }
            return (
              <button
                key={u.id}
                onClick={() => onSelectUnit(u.id)}
                className={`py-2 px-1 rounded-xl text-center transition-all flex flex-col items-center justify-center border-2 ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-black shadow-xs scale-105'
                    : 'border-transparent bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold'
                }`}
                title={`${u.titleVi} - Nhấn để học`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full mb-1"
                  style={{ backgroundColor: u.color }}
                />
                <span className="text-xs">U{u.id}</span>
                <span className="text-[9px] font-mono text-slate-400">
                  {completedCount}/5
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Unit Header Card */}
      <div
        className="rounded-3xl p-6 text-white shadow-md relative overflow-hidden transition-all"
        style={{
          background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.accentColor} 100%)`,
        }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <span>Chuyên đề {unit.id}/6</span>
              <span>·</span>
              <span>20 Thuật ngữ Toán</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
              {unit.titleVi}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-white/90">
              {unit.descVi}
            </p>
          </div>

          <button
            onClick={() => onStartLesson(unit.id, 1)}
            className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-black text-xs uppercase tracking-wider hover:bg-slate-100 active:scale-95 shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>Vào học ngay</span>
          </button>
        </div>

        {/* Decorative background math symbols */}
        <div className="absolute right-4 -bottom-6 text-white/15 text-8xl font-black font-mono select-none pointer-events-none">
          {unit.id === 1 ? 'x²' : unit.id === 2 ? 'mx' : unit.id === 3 ? '√A' : unit.id === 4 ? 'Δ' : unit.id === 5 ? 'sin' : 'π'}
        </div>
      </div>

      {/* Sinuous Learning Path Nodes */}
      <div className="relative flex flex-col items-center py-6 select-none">
        {/* Floating Mascot speech bubble near top */}
        <div className="absolute -left-2 top-4 hidden sm:block">
          <DuoMascot
            mood="happy"
            size={110}
            speechText={`Học Unit ${unit.id} nào! Bạn có thể chọn học bất kỳ bài nào.`}
          />
        </div>

        {/* Path connector line behind nodes */}
        <div className="absolute top-8 bottom-8 w-3 bg-slate-200 rounded-full" />

        {/* Stepping Stones */}
        <div className="relative z-10 space-y-7 flex flex-col items-center w-full">
          {lessonsMeta.map((lesson) => {
            const key = `${unit.id}-${lesson.num}`;
            const isCompleted = stats.completedLessons[key] === true;
            const isUnlocked = stats.unlockedAllUnits || isCompleted || lesson.num === 1 || stats.completedLessons[`${unit.id}-${lesson.num - 1}`];
            const isCurrent = isUnlocked && !isCompleted;
            const Icon = lesson.icon;
            const offsetCls = nodeOffsets[lesson.num - 1];

            return (
              <div
                key={lesson.num}
                className={`flex flex-col items-center transition-transform ${offsetCls}`}
              >
                {/* Stepping stone button */}
                <div className="relative group">
                  {/* Outer active pulse ring */}
                  {isCurrent && (
                    <div
                      className="absolute -inset-2.5 rounded-full animate-ping opacity-25"
                      style={{ backgroundColor: unit.color }}
                    />
                  )}

                  <button
                    onClick={() => onStartLesson(unit.id, lesson.num)}
                    className={`w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all duo-node-3d active:scale-95 relative ${
                      isCompleted
                        ? 'bg-yellow-400 text-yellow-950 border-4 border-yellow-300'
                        : isUnlocked
                        ? 'text-white border-4 border-white/40'
                        : 'bg-slate-200 text-slate-400 border-4 border-slate-300 cursor-not-allowed'
                    }`}
                    style={{
                      backgroundColor: isCompleted ? '#ffc800' : isUnlocked ? unit.color : undefined,
                    }}
                    title={`${lesson.title} - Nhấn để học`}
                  >
                    {isCompleted ? (
                      <Check className="w-8 h-8 stroke-[3.5]" />
                    ) : isUnlocked ? (
                      <Icon className="w-8 h-8 fill-white/20" />
                    ) : (
                      <Lock className="w-7 h-7 text-slate-400" />
                    )}

                    {/* Lesson index badge */}
                    <span className="absolute -bottom-1 bg-white text-slate-800 text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-slate-200 shadow-2xs">
                      Bài {lesson.num}
                    </span>
                  </button>
                </div>

                {/* Lesson title tooltip */}
                <div className="mt-2 text-center max-w-[170px]">
                  <span className="text-xs font-bold text-slate-700 block truncate">
                    {lesson.title}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">
                    {lesson.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Math Lab Drawer / Widget */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm">
                Phòng Thí Nghiệm Toán Học (Interactive Math Lab)
              </h4>
              <p className="text-[11px] text-slate-500">
                Thực hành trực quan các công thức và thuật ngữ của {unit.titleVi}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowMathLab(!showMathLab)}
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-2xs"
          >
            {showMathLab ? 'Thu gọn' : 'Mở rộng'}
          </button>
        </div>

        {showMathLab && <InteractiveMathWidget unitId={unit.id} />}
      </div>
    </div>
  );
};
