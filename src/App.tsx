import { useState, useEffect } from 'react';
import { UNITS_DATA } from './data/unitsData';
import { UserStats } from './types/math';
import { soundFx } from './utils/audio';
import { Navbar } from './components/Navbar';
import { UnitPath } from './components/UnitPath';
import { LessonModal } from './components/LessonModal';
import { UnitPickerModal } from './components/UnitPickerModal';
import { VocabDictionary } from './components/VocabDictionary';
import { QuickPracticeModal } from './components/QuickPracticeModal';
import {
  Sparkles,
  Compass,
  BookOpen,
  Zap,
  CheckCircle,
  Flame,
  Award,
} from 'lucide-react';

export default function App() {
  // Load saved state from localStorage
  const [stats, setStats] = useState<UserStats>(() => {
    if (typeof window === 'undefined') {
      return {
        xp: 0,
        streak: 3,
        gems: 150,
        hearts: 5,
        completedLessons: { '1-1': true },
        unlockedAllUnits: true, // "có thể tùy chọn học unit nào cũng được"
        soundEnabled: true,
        speechRate: 1.0,
        lang: 'VI',
      };
    }
    const savedXp = parseInt(localStorage.getItem('mathlingo_xp') || '50');
    const savedStreak = parseInt(localStorage.getItem('mathlingo_streak') || '3');
    const savedGems = parseInt(localStorage.getItem('mathlingo_gems') || '150');
    const savedHearts = parseInt(localStorage.getItem('mathlingo_hearts') || '5');
    const savedCompleted = JSON.parse(
      localStorage.getItem('mathlingo_completed') || '{"1-1": true}'
    );
    const savedUnlockedAll = localStorage.getItem('mathlingo_unlocked_all') !== 'false'; // Default TRUE for free choice

    return {
      xp: savedXp,
      streak: savedStreak,
      gems: savedGems,
      hearts: savedHearts,
      completedLessons: savedCompleted,
      unlockedAllUnits: savedUnlockedAll,
      soundEnabled: true,
      speechRate: 1.0,
      lang: 'VI',
    };
  });

  const [activeUnitId, setActiveUnitId] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    return parseInt(localStorage.getItem('mathlingo_active_unit') || '1');
  });

  // Modal controls
  const [isUnitPickerOpen, setIsUnitPickerOpen] = useState<boolean>(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState<boolean>(false);
  const [isQuickPracticeOpen, setIsQuickPracticeOpen] = useState<boolean>(false);
  const [activeLessonTarget, setActiveLessonTarget] = useState<{
    unitId: number;
    lessonNum: number;
  } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mathlingo_xp', stats.xp.toString());
    localStorage.setItem('mathlingo_streak', stats.streak.toString());
    localStorage.setItem('mathlingo_gems', stats.gems.toString());
    localStorage.setItem('mathlingo_hearts', stats.hearts.toString());
    localStorage.setItem('mathlingo_completed', JSON.stringify(stats.completedLessons));
    localStorage.setItem('mathlingo_unlocked_all', stats.unlockedAllUnits ? 'true' : 'false');
    localStorage.setItem('mathlingo_active_unit', activeUnitId.toString());
  }, [stats, activeUnitId]);

  const currentUnit = UNITS_DATA.find((u) => u.id === activeUnitId) || UNITS_DATA[0];

  // Handlers
  const handleToggleSound = () => {
    const next = !stats.soundEnabled;
    soundFx.setEnabled(next);
    setStats((prev) => ({ ...prev, soundEnabled: next }));
  };

  const handleToggleFreeMode = () => {
    soundFx.playClick();
    setStats((prev) => ({ ...prev, unlockedAllUnits: !prev.unlockedAllUnits }));
  };

  const handleSelectUnit = (unitId: number) => {
    soundFx.playClick();
    setActiveUnitId(unitId);
  };

  const handleStartLesson = (unitId: number, lessonNum: number) => {
    soundFx.playClick();
    setActiveLessonTarget({ unitId, lessonNum });
  };

  const handleCompleteLesson = (unitId: number, lessonNum: number, earnedXp: number) => {
    setStats((prev) => {
      const key = `${unitId}-${lessonNum}`;
      const newCompleted = { ...prev.completedLessons, [key]: true };
      return {
        ...prev,
        xp: prev.xp + earnedXp,
        gems: prev.gems + 10,
        hearts: Math.min(5, prev.hearts + 1), // refill 1 heart on complete
        completedLessons: newCompleted,
      };
    });
  };

  const handleDeductHeart = () => {
    // Unlimited energy mode: learners enjoy unrestricted practice without heart deduction
  };

  const handleEarnXp = (amount: number) => {
    setStats((prev) => ({
      ...prev,
      xp: prev.xp + amount,
      gems: prev.gems + 5,
    }));
  };

  // Calculate total completed lessons
  const totalCompleted = Object.values(stats.completedLessons).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#f7f9fa] text-slate-800 flex flex-col font-sans">
      {/* Navbar */}
      <Navbar
        stats={stats}
        currentUnit={currentUnit}
        allUnits={UNITS_DATA}
        onOpenUnitPicker={() => setIsUnitPickerOpen(true)}
        onOpenDictionary={() => setIsDictionaryOpen(true)}
        onToggleSound={handleToggleSound}
        onStartQuickPractice={() => setIsQuickPracticeOpen(true)}
        onToggleFreeMode={handleToggleFreeMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Duolingo Sinuous Learning Path */}
        <section className="lg:col-span-8 w-full">
          {/* Free mode alert / notification banner */}
          <div className="mb-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-emerald-950 text-xs sm:text-sm flex items-center gap-2">
                  <span>Chào mừng bạn đến với KHAIMATH</span>
                  <span className="text-[10px] font-black text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                    ⚡ Năng lượng vô hạn
                  </span>
                </h3>
                <p className="text-[11px] text-emerald-700">
                  {stats.unlockedAllUnits
                    ? 'Bạn có thể tùy ý học bất kỳ Unit nào và làm bài thoải mái không giới hạn tim'
                    : 'Chế độ Tuần Tự: Hoàn thành từng Unit để mở khóa'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsUnitPickerOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shrink-0 transition-all shadow-2xs"
            >
              Chọn Unit
            </button>
          </div>

          {/* Stepping Stones Path for Active Unit */}
          <UnitPath
            unit={currentUnit}
            stats={stats}
            onStartLesson={handleStartLesson}
            onOpenUnitPicker={() => setIsUnitPickerOpen(true)}
            allUnits={UNITS_DATA}
            onSelectUnit={handleSelectUnit}
          />
        </section>

        {/* Right Side: Sidebar Widgets (Quests, Daily Goal, Vocabulary Snapshot) */}
        <aside className="lg:col-span-4 w-full space-y-5 sticky top-20">
          {/* Daily Goal Card */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Mục tiêu hàng ngày</span>
              </h3>
              <span className="text-xs font-bold text-emerald-600">
                {stats.xp >= 50 ? 'Đã đạt 50 XP!' : `${stats.xp}/50 XP`}
              </span>
            </div>

            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (stats.xp / 50) * 100)}%` }}
              />
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Hoàn thành các bài học thuật ngữ toán học để giữ vững chuỗi{' '}
              <b className="text-slate-700">{stats.streak} ngày liên tiếp</b>!
            </p>
          </div>

          {/* All Units Progress Card */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Tiến độ 6 Chuyên đề Toán 9</span>
              </h3>
              <span className="text-xs font-mono font-bold text-slate-500">
                {totalCompleted}/30 bài
              </span>
            </div>

            <div className="space-y-2.5">
              {UNITS_DATA.map((u) => {
                let unitCompleted = 0;
                for (let l = 1; l <= 5; l++) {
                  if (stats.completedLessons[`${u.id}-${l}`]) unitCompleted++;
                }
                const isCurrent = u.id === currentUnit.id;

                return (
                  <button
                    key={u.id}
                    onClick={() => handleSelectUnit(u.id)}
                    className={`w-full p-2.5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                      isCurrent
                        ? 'border-emerald-500 bg-emerald-50/60 shadow-2xs'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: u.color }}
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-black text-slate-800 block truncate">
                          U{u.id}: {u.titleVi.split(':')[1] || u.titleVi}
                        </span>
                        <span className="text-[10px] text-slate-400 block truncate font-medium">
                          {u.words.length} thuật ngữ tiếng Anh
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className="text-xs font-mono font-bold text-slate-600">
                        {unitCompleted}/5
                      </span>
                      {unitCompleted === 5 && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setIsUnitPickerOpen(true)}
              className="w-full py-2.5 rounded-xl border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/40 text-emerald-700 text-xs font-extrabold transition-all text-center"
            >
              Xem chi tiết & Mở khóa tất cả Unit
            </button>
          </div>

          {/* Quick Practice Drill Card */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 text-white shadow-sm space-y-3 relative overflow-hidden">
            <div className="relative z-10 space-y-1.5">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                <span>Luyện phản xạ</span>
              </div>
              <h4 className="font-black text-base">
                Luyện tập tốc độ 5 câu
              </h4>
              <p className="text-xs text-white/90">
                Rèn luyện khả năng nhận diện thuật ngữ Toán tiếng Anh tức thì
              </p>
            </div>

            <button
              onClick={() => setIsQuickPracticeOpen(true)}
              className="relative z-10 w-full py-2.5 rounded-xl bg-white text-indigo-900 font-black text-xs uppercase tracking-wider hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
              <span>Luyện tập ngay (+25 XP)</span>
            </button>
          </div>

          {/* Open Dictionary Card */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 p-4 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-slate-800 block">
                  Kho từ điển Toán 9
                </span>
                <span className="text-[11px] text-slate-500">
                  240 từ vựng có phát âm & công thức (40 từ/Unit)
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsDictionaryOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              Mở từ điển
            </button>
          </div>
        </aside>
      </main>

      {/* Floating Bottom Nav for Mobile view */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-slate-200 px-4 py-2.5 flex items-center justify-around z-30 shadow-lg">
        <button
          onClick={() => setIsUnitPickerOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-emerald-600"
        >
          <Compass className="w-5 h-5 text-emerald-600" />
          <span>Đổi Unit</span>
        </button>

        <button
          onClick={() => handleStartLesson(currentUnit.id, 1)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl duo-button-green text-white font-black text-xs uppercase tracking-wider shadow-md"
        >
          <Zap className="w-4 h-4 fill-white" />
          <span>Học Unit {currentUnit.id}</span>
        </button>

        <button
          onClick={() => setIsDictionaryOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-sky-600"
        >
          <BookOpen className="w-5 h-5 text-sky-600" />
          <span>Từ điển</span>
        </button>
      </div>

      {/* Lesson Interactive Modal */}
      {activeLessonTarget && (
        <LessonModal
          isOpen={true}
          onClose={() => setActiveLessonTarget(null)}
          unit={
            UNITS_DATA.find((u) => u.id === activeLessonTarget.unitId) || currentUnit
          }
          lessonNum={activeLessonTarget.lessonNum}
          onCompleteLesson={handleCompleteLesson}
          userHearts={stats.hearts}
          onDeductHeart={handleDeductHeart}
        />
      )}

      {/* Unit Picker Modal */}
      <UnitPickerModal
        isOpen={isUnitPickerOpen}
        onClose={() => setIsUnitPickerOpen(false)}
        units={UNITS_DATA}
        currentUnitId={activeUnitId}
        onSelectUnit={handleSelectUnit}
        stats={stats}
        onToggleFreeMode={handleToggleFreeMode}
        onStartLesson={handleStartLesson}
      />

      {/* Vocabulary Glossary Modal */}
      <VocabDictionary
        isOpen={isDictionaryOpen}
        onClose={() => setIsDictionaryOpen(false)}
        units={UNITS_DATA}
        activeUnitId={activeUnitId}
      />

      {/* Quick Practice Drill Modal */}
      <QuickPracticeModal
        isOpen={isQuickPracticeOpen}
        onClose={() => setIsQuickPracticeOpen(false)}
        units={UNITS_DATA}
        activeUnitId={activeUnitId}
        onEarnXp={handleEarnXp}
      />
    </div>
  );
}
