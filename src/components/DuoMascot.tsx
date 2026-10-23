import React from 'react';

interface DuoMascotProps {
  mood?: 'happy' | 'cheering' | 'thinking' | 'encouraging' | 'sad';
  size?: number;
  className?: string;
  speechText?: string;
}

export const DuoMascot: React.FC<DuoMascotProps> = ({
  mood = 'happy',
  size = 120,
  className = '',
  speechText
}) => {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`}>
      {speechText && (
        <div className="mb-2 relative bg-white border-2 border-slate-200 rounded-2xl px-3.5 py-2 text-xs font-bold text-slate-800 shadow-sm max-w-[200px] text-center animate-bounce">
          {speechText}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-200"></div>
          <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white"></div>
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 select-none"
      >
        {/* Shadow */}
        <ellipse cx="80" cy="148" rx="46" ry="9" fill="#000000" fillOpacity="0.12" />

        {/* Feet */}
        <ellipse cx="64" cy="142" rx="12" ry="7" fill="#E58A00" />
        <ellipse cx="96" cy="142" rx="12" ry="7" fill="#E58A00" />
        <ellipse cx="64" cy="141" rx="10" ry="5.5" fill="#FFC800" />
        <ellipse cx="96" cy="141" rx="10" ry="5.5" fill="#FFC800" />

        {/* Body (Green Owl) */}
        <path
          d="M34 92C34 56 52 30 80 30C108 30 126 56 126 92C126 122 108 142 80 142C52 142 34 122 34 92Z"
          fill="#58CC02"
        />

        {/* Belly patch */}
        <ellipse cx="80" cy="108" rx="28" ry="24" fill="#8CE816" />

        {/* Math pattern on belly (plus, minus, division dots) */}
        <g opacity="0.4" stroke="#46A302" strokeWidth="2.5" strokeLinecap="round">
          <line x1="74" y1="102" x2="86" y2="102" />
          <line x1="80" y1="96" x2="80" y2="108" />
          <line x1="75" y1="116" x2="85" y2="116" />
        </g>

        {/* Wings */}
        {mood === 'cheering' ? (
          <>
            {/* Raised wings */}
            <path d="M38 78C22 55 14 36 28 32C40 28 48 55 42 78Z" fill="#46A302" />
            <path d="M122 78C138 55 146 36 132 32C120 28 112 55 118 78Z" fill="#46A302" />
          </>
        ) : mood === 'thinking' ? (
          <>
            <path d="M36 84C22 92 18 114 26 122C34 130 46 112 42 94Z" fill="#46A302" />
            {/* Hand touching chin */}
            <path d="M124 94C114 96 100 90 94 80C90 74 100 68 108 72C118 76 128 84 124 94Z" fill="#46A302" />
          </>
        ) : (
          <>
            <path d="M36 84C24 92 20 114 28 122C36 130 46 114 42 94Z" fill="#46A302" />
            <path d="M124 84C136 92 140 114 132 122C124 130 114 114 118 94Z" fill="#46A302" />
          </>
        )}

        {/* Eyes & Glasses */}
        {/* Glasses Frame */}
        <circle cx="62" cy="68" r="21" fill="none" stroke="#2563EB" strokeWidth="4" />
        <circle cx="98" cy="68" r="21" fill="none" stroke="#2563EB" strokeWidth="4" />
        <line x1="82" y1="68" x2="78" y2="68" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
        <line x1="41" y1="66" x2="34" y2="64" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="119" y1="66" x2="126" y2="64" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />

        {/* Eye whites */}
        <circle cx="62" cy="68" r="18" fill="#FFFFFF" />
        <circle cx="98" cy="68" r="18" fill="#FFFFFF" />

        {/* Pupils */}
        {mood === 'sad' ? (
          <>
            <ellipse cx="62" cy="72" rx="7" ry="8" fill="#1E293B" />
            <ellipse cx="98" cy="72" rx="7" ry="8" fill="#1E293B" />
            <circle cx="65" cy="70" r="2.5" fill="#FFFFFF" />
            <circle cx="101" cy="70" r="2.5" fill="#FFFFFF" />
          </>
        ) : mood === 'thinking' ? (
          <>
            {/* Looking up */}
            <circle cx="65" cy="63" r="8" fill="#1E293B" />
            <circle cx="101" cy="63" r="8" fill="#1E293B" />
            <circle cx="67" cy="61" r="2.5" fill="#FFFFFF" />
            <circle cx="103" cy="61" r="2.5" fill="#FFFFFF" />
          </>
        ) : mood === 'cheering' ? (
          <>
            {/* Happy curved eyes ^^ */}
            <path d="M54 70C58 64 66 64 70 70" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
            <path d="M90 70C94 64 102 64 106 70" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="63" cy="68" r="8" fill="#1E293B" />
            <circle cx="97" cy="68" r="8" fill="#1E293B" />
            <circle cx="65" cy="65" r="2.5" fill="#FFFFFF" />
            <circle cx="99" cy="65" r="2.5" fill="#FFFFFF" />
          </>
        )}

        {/* Beak */}
        <polygon points="74,75 86,75 80,88" fill="#FFC800" stroke="#E58A00" strokeWidth="2" strokeLinejoin="round" />

        {/* Math Graduation Cap or Little Sparkle */}
        <path d="M80 14L50 24L80 34L110 24L80 14Z" fill="#1E293B" />
        <rect x="70" y="27" width="20" height="9" rx="3" fill="#0F172A" />
        <line x1="80" y1="24" x2="108" y2="30" stroke="#FFC800" strokeWidth="2" />
        <circle cx="108" cy="33" r="3" fill="#FFC800" />
      </svg>
    </div>
  );
};
