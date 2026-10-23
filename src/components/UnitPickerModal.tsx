import React from 'react';
import { X, CheckCircle2, Unlock, Lock, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { Unit, UserStats } from '../types/math';

interface UnitPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  units: Unit[];
  currentUnitId: number;
  onSelectUnit: (unitId: number) => void;
  stats: UserStats;
  onToggleFreeMode: () => void;
  onStartLesson: (unitId: number, lessonNum: number) => void;
}

export const UnitPickerModal: React.FC<UnitPickerModalProps> = ({
  isOpen,
  onClose,
  units,
  currentUnitId,
  onSelectUnit,
  stats,
  onToggleFreeMode,
  onStartLesson,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border-4 border-slate-200 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500 fill-yellow-400" />
              <span>Tùy chọn Unit Toán 9</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Bạn có thể chọn học bất kỳ Unit nào theo sở thích hoặc bài kiểm tra sắp tới
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Mode Banner */}
        <div className="px-5 py-3.5 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
              <Unlock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-900 block">
                Chế độ học tự do (Free Exploration Mode)
              </span>
              <span className="text-[11px] text-emerald-700">
                {stats.unlockedAllUnits
                  ? 'Đang bật: Tất cả 6 Unit đều được mở khóa sẵn để học tùy ý'
                  : 'Đang tắt: Yêu cầu hoàn thành tuần tự từng Unit'}
              </span>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={stats.unlockedAllUnits}
              onChange={onToggleFreeMode}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>

        {/* Units Grid */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {units.map((unit) => {
            const isSelected = unit.id === currentUnitId;
            // Check completed lessons count for this unit
            let completedCount = 0;
            for (let l = 1; l <= 5; l++) {
              if (stats.completedLessons[`${unit.id}-${l}`]) completedCount++;
            }
            const isLocked = !stats.unlockedAllUnits && unit.id > 1 && !stats.completedLessons[`${unit.id - 1}-5`];

            return (
              <div
                key={unit.id}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: unit.color }}
                  >
                    {isLocked ? (
                      <Lock className="w-5 h-5 text-white/80" />
                    ) : completedCount === 5 ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-lg">U{unit.id}</span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-800 text-sm truncate">
                        {unit.titleVi}
                      </h4>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Đang chọn
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-slate-500 truncate mt-0.5">
                      {unit.titleEn}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <BookOpen className="w-3 h-3 text-slate-400" />
                        {unit.words.length} thuật ngữ
                      </span>
                      <span>·</span>
                      <span className="font-semibold text-emerald-600">
                        {completedCount}/5 bài hoàn thành
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    onClick={() => {
                      onSelectUnit(unit.id);
                      onClose();
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Xem lộ trình
                  </button>

                  <button
                    onClick={() => {
                      onSelectUnit(unit.id);
                      onStartLesson(unit.id, 1);
                      onClose();
                    }}
                    disabled={isLocked}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-xs font-extrabold shadow-sm transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span>Học Unit {unit.id}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Tổng cộng 6 Chuyên đề Toán 9 · 240 Thuật ngữ chuẩn (40 từ/Unit)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
