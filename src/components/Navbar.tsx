import React from 'react';
import { Flame, Zap, Heart, Volume2, VolumeX, Sparkles, SlidersHorizontal, BookOpen } from 'lucide-react';
import { UserStats, Unit } from '../types/math';

interface NavbarProps {
  stats: UserStats;
  currentUnit: Unit;
  allUnits: Unit[];
  onOpenUnitPicker: () => void;
  onOpenDictionary: () => void;
  onToggleSound: () => void;
  onStartQuickPractice: () => void;
  onToggleFreeMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  stats,
  currentUnit,
  onOpenUnitPicker,
  onOpenDictionary,
  onToggleSound,
  onStartQuickPractice,
  onToggleFreeMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center font-black text-xl shadow-xs tracking-tighter">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
              KHAI<span className="text-emerald-500">MATH</span>
            </span>
            <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
              Toán 9 Tiếng Anh
            </span>
          </div>
        </div>

        {/* Zone 2: Unit Quick Switcher & Tools */}
        <div className="hidden md:flex items-center gap-2">
          {/* Unit Switcher Button - Directly addresses "có thể tùy chọn học unit nào cũng được" */}
          <button
            onClick={onOpenUnitPicker}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 text-xs font-bold transition-all shadow-xs"
            title="Đổi hoặc chọn học bất kỳ Unit nào"
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: currentUnit.color }}
            />
            <span className="truncate max-w-[200px]">{currentUnit.titleVi}</span>
            <span className="text-[10px] text-emerald-600 font-extrabold bg-emerald-100 px-1.5 py-0.5 rounded-md">
              Đổi Unit
            </span>
          </button>

          {/* Dictionary / Glossary */}
          <button
            onClick={onOpenDictionary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors shadow-xs"
            title="Tra từ điển và luyện phát âm 240 thuật ngữ Toán 9"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-500" />
            <span>Từ điển (240 từ)</span>
          </button>

          {/* Free mode toggle button */}
          <button
            onClick={onToggleFreeMode}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 text-xs font-bold transition-all shadow-xs ${
              stats.unlockedAllUnits
                ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
            }`}
            title="Bật/Tắt chế độ mở khóa toàn bộ Unit"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
            <span>{stats.unlockedAllUnits ? 'Tự do: Mở tất cả' : 'Theo thứ tự'}</span>
          </button>

          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 rounded-xl border-2 border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors shadow-xs"
            title={stats.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {stats.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>

        {/* Zone 3: Gamification Metrics & Quick Practice CTA */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Streak */}
          <div
            className="flex items-center gap-1 text-xs font-black text-amber-500"
            title="Chuỗi ngày liên tiếp học toán"
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span className="font-mono tabular-nums">{stats.streak}</span>
          </div>

          {/* XP */}
          <div
            className="flex items-center gap-1 text-xs font-black text-yellow-500"
            title="Điểm kinh nghiệm (XP)"
          >
            <Zap className="w-4 h-4 fill-yellow-400 text-yellow-500" />
            <span className="font-mono tabular-nums">{stats.xp}</span>
          </div>

          {/* Hearts: Unlimited Energy */}
          <div
            className="flex items-center gap-1.5 text-xs font-black text-rose-500 bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-200 shadow-2xs"
            title="Năng lượng thoải mái (Trái tim vô hạn)"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
            <span className="font-black text-sm leading-none">∞</span>
            <span className="text-[10px] text-rose-600 font-extrabold hidden sm:inline">Vô hạn</span>
          </div>

          {/* Practice drill CTA */}
          <button
            onClick={onStartQuickPractice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold shadow-sm active:translate-y-0.5 transition-all"
            title="Luyện tập nhanh 5 câu hỏi ngẫu nhiên"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
            <span className="hidden sm:inline">Luyện tập</span>
          </button>
        </div>
      </div>
    </header>
  );
};
