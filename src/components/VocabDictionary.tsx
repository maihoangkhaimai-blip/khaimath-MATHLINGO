import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  Volume2,
  BookOpen,
  Filter,
} from 'lucide-react';
import { Unit, WordItem } from '../types/math';
import { speakTerm } from '../utils/audio';

interface VocabDictionaryProps {
  isOpen: boolean;
  onClose: () => void;
  units: Unit[];
  activeUnitId: number;
}

export const VocabDictionary: React.FC<VocabDictionaryProps> = ({
  isOpen,
  onClose,
  units,
  activeUnitId,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<number>(activeUnitId || 0);

  // Filter words
  const filteredWords = useMemo(() => {
    let pool: { word: WordItem; unit: Unit }[] = [];
    units.forEach((u) => {
      if (selectedUnitFilter === 0 || u.id === selectedUnitFilter) {
        u.words.forEach((w) => pool.push({ word: w, unit: u }));
      }
    });

    if (!searchQuery.trim()) return pool;

    const query = searchQuery.toLowerCase().trim();
    return pool.filter(
      (item) =>
        item.word.term.toLowerCase().includes(query) ||
        item.word.meaning.toLowerCase().includes(query) ||
        item.word.formula.toLowerCase().includes(query)
    );
  }, [units, selectedUnitFilter, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl border-4 border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">
                Sổ tay Từ điển Thuật ngữ Toán 9
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Tra cứu, nghe phát âm chuẩn và xem công thức của 240 thuật ngữ (40 từ/Unit)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-white flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thuật ngữ tiếng Anh hoặc tiếng Việt (vd: Hypotenuse, Biệt thức, Căn thức)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-emerald-500 text-xs font-semibold placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => setSelectedUnitFilter(0)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedUnitFilter === 0
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả (240)
            </button>
            {units.map((u) => (
              <button
                key={u.id}
                onClick={() => setSelectedUnitFilter(u.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedUnitFilter === u.id
                    ? 'bg-emerald-500 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Unit {u.id}
              </button>
            ))}
          </div>
        </div>

        {/* Word Cards Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredWords.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-400 text-xs font-semibold">
              Không tìm thấy thuật ngữ phù hợp với từ khóa "{searchQuery}"
            </div>
          ) : (
            filteredWords.map(({ word, unit }) => (
              <div
                key={word.id}
                className="p-4 rounded-2xl border-2 border-slate-200 hover:border-emerald-400 bg-white shadow-2xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span
                        className="text-[10px] font-extrabold px-2 py-0.5 rounded-md text-white inline-block mb-1"
                        style={{ backgroundColor: unit.color }}
                      >
                        Unit {unit.id}
                      </span>
                      <h4 className="text-base font-black text-slate-800 tracking-tight flex items-center gap-1.5">
                        <span>{word.term}</span>
                        <button
                          onClick={() => speakTerm(word.term)}
                          className="p-1 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                          title="Nghe phát âm chuẩn"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </h4>
                      <p className="text-xs font-mono text-emerald-700 font-semibold">
                        {word.phonetic}
                      </p>
                    </div>

                    <div className="font-mono text-[11px] font-bold bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 text-slate-600 text-right max-w-[130px] truncate">
                      {word.formula}
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <span className="text-sm font-bold text-slate-800 block">
                      {word.meaning}
                    </span>
                    {word.exampleEn && (
                      <div className="mt-1.5 text-xs text-slate-500 bg-slate-50 p-2 rounded-xl">
                        <p className="font-medium text-slate-700 italic">
                          "{word.exampleEn}"
                        </p>
                        {word.exampleVi && (
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            → {word.exampleVi}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {word.hint && (
                  <div className="mt-2 text-[11px] text-amber-700 bg-amber-50 px-2 py-1 rounded-lg flex items-center gap-1 font-medium">
                    <span>💡 {word.hint}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Đang hiển thị {filteredWords.length} thuật ngữ</span>
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
