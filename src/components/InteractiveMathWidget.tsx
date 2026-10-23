import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speakTerm } from '../utils/audio';

interface InteractiveMathWidgetProps {
  unitId: number;
}

export const InteractiveMathWidget: React.FC<InteractiveMathWidgetProps> = ({ unitId }) => {
  // Unit 1 state: Evaluate P(x) = a*x^2 + b*x + c
  const [u1X, setU1X] = useState<number>(3);
  const [u1A, setU1A] = useState<number>(2);
  const [u1B, setU1B] = useState<number>(-4);
  const [u1C, setU1C] = useState<number>(5);

  // Unit 2 state: y = mx + b
  const [u2M, setU2M] = useState<number>(2);
  const [u2B, setU2B] = useState<number>(-1);

  // Unit 3 state: Radicals & interval
  const [u3Rad, setU3Rad] = useState<number>(48);

  // Unit 4 state: Quadratic Parabola y = ax^2 + bx + c
  const [u4A, setU4A] = useState<number>(1);
  const [u4B, setU4B] = useState<number>(-4);
  const [u4C, setU4C] = useState<number>(3);

  // Unit 5 state: Right Triangle angle alpha
  const [u5Angle, setU5Angle] = useState<number>(35);
  const [u5Hyp, setU5Hyp] = useState<number>(10);

  // Unit 6 state: Circle central angle
  const [u6CentralAngle, setU6CentralAngle] = useState<number>(80);

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-sm space-y-4">
      {unitId === 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Mô phỏng Đa thức & Tính giá trị (Evaluate Polynomial)</span>
              <button
                onClick={() => speakTerm('Evaluate')}
                className="text-slate-400 hover:text-emerald-600 transition-colors"
                title="Nghe phát âm"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">P(x) = {u1A}x² + ({u1B})x + {u1C}</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
            <div className="text-xs text-slate-500 mb-1">Thao tác: Thay biến số x = {u1X} vào biểu thức</div>
            <div className="font-mono text-lg font-bold text-slate-800">
              P({u1X}) = {u1A} · ({u1X})² + ({u1B}) · ({u1X}) + {u1C} ={' '}
              <span className="text-emerald-600 font-extrabold">
                {u1A * u1X * u1X + u1B * u1X + u1C}
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-500 flex justify-center gap-4">
              <span>Hệ số cao nhất: <b>{u1A}</b></span>
              <span>Bậc (Degree): <b>2</b></span>
              <span>Hằng số (Constant): <b>{u1C}</b></span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Biến số (Variable) x: {u1X}</span>
              <span className="text-emerald-600">Thay đổi x</span>
            </div>
            <input
              type="range"
              min="-5"
              max="6"
              value={u1X}
              onChange={(e) => setU1X(Number(e.target.value))}
              className="w-full accent-emerald-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}

      {unitId === 2 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Hệ số góc & Đồ thị đường thẳng (Slope & Y-intercept)</span>
              <button
                onClick={() => speakTerm('Slope')}
                className="text-slate-400 hover:text-sky-600 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">y = {u2M}x + ({u2B})</span>
          </div>

          {/* SVG Cartesian coordinate plane */}
          <div className="relative bg-slate-900 rounded-xl p-3 flex justify-center items-center h-48 overflow-hidden">
            <svg width="220" height="170" viewBox="-50 -40 100 80" className="overflow-visible">
              {/* Axes */}
              <line x1="-45" y1="0" x2="45" y2="0" stroke="#475569" strokeWidth="1" />
              <line x1="0" y1="-35" x2="0" y2="35" stroke="#475569" strokeWidth="1" />
              {/* Axis labels */}
              <text x="42" y="-3" fill="#94a3b8" fontSize="6">x</text>
              <text x="3" y="-30" fill="#94a3b8" fontSize="6">y</text>
              <circle cx="0" cy="0" r="1.5" fill="#e2e8f0" />
              <text x="-7" y="6" fill="#94a3b8" fontSize="5">O(0,0)</text>

              {/* Line y = mx + b (invert y for SVG coordinates) */}
              {(() => {
                const x1 = -30;
                const y1 = -(u2M * x1 + u2B * 4);
                const x2 = 30;
                const y2 = -(u2M * x2 + u2B * 4);
                return (
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                );
              })()}

              {/* Y-intercept dot */}
              <circle cx="0" cy={-(u2B * 4)} r="3" fill="#f43f5e" />
            </svg>

            <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[11px] text-slate-300 bg-slate-800/80 backdrop-blur px-2.5 py-1 rounded-lg">
              <span>Hệ số góc (Slope m): <b className="text-sky-400">{u2M}</b></span>
              <span>Tung độ gốc (Y-intercept b): <b className="text-rose-400">{u2B}</b></span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Slope (m): {u2M}</span>
              </div>
              <input
                type="range"
                min="-3"
                max="3"
                step="0.5"
                value={u2M}
                onChange={(e) => setU2M(Number(e.target.value))}
                className="w-full accent-sky-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>Y-intercept (b): {u2B}</span>
              </div>
              <input
                type="range"
                min="-5"
                max="5"
                value={u2B}
                onChange={(e) => setU2B(Number(e.target.value))}
                className="w-full accent-rose-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {unitId === 3 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Biến đổi căn thức (Extract Root & Simplify)</span>
              <button
                onClick={() => speakTerm('Radicand')}
                className="text-slate-400 hover:text-amber-600 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">Biểu thức dưới căn A = {u3Rad}</span>
          </div>

          {/* Root extractor calculation */}
          {(() => {
            let maxSq = 1;
            for (let i = 2; i * i <= u3Rad; i++) {
              if (u3Rad % (i * i) === 0) {
                maxSq = i * i;
              }
            }
            const outNum = Math.sqrt(maxSq);
            const inNum = u3Rad / maxSq;

            return (
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center space-y-2">
                <div className="text-xs text-amber-800">
                  Biểu diễn tách nhân tử chính phương: {u3Rad} = {maxSq} · {inNum} = ({outNum})² · {inNum}
                </div>
                <div className="text-2xl font-mono font-black text-amber-950">
                  √{u3Rad} ={' '}
                  <span className="text-amber-600">
                    {outNum > 1 ? `${outNum}√${inNum}` : `√${u3Rad}`}
                  </span>
                  <span className="text-sm font-normal text-slate-500 ml-2">
                    ≈ {Math.sqrt(u3Rad).toFixed(3)}
                  </span>
                </div>
              </div>
            );
          })()}

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Radicand (Số dưới dấu căn A): {u3Rad}</span>
            </div>
            <input
              type="range"
              min="2"
              max="128"
              value={u3Rad}
              onChange={(e) => setU3Rad(Number(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}

      {unitId === 4 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Biệt thức Delta & Đỉnh Parabol (Vertex & Viète)</span>
              <button
                onClick={() => speakTerm('Discriminant')}
                className="text-slate-400 hover:text-purple-600 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">y = {u4A}x² + ({u4B})x + {u4C}</span>
          </div>

          {/* Delta & Viète stats */}
          {(() => {
            const delta = u4B * u4B - 4 * u4A * u4C;
            const vertexX = -u4B / (2 * u4A);
            const vertexY = -delta / (4 * u4A);
            const sum = -u4B / u4A;
            const prod = u4C / u4A;

            return (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-200">
                    <span className="text-purple-700 block text-[11px] font-semibold">Biệt thức (Discriminant Δ):</span>
                    <span className="text-base font-bold font-mono text-purple-900">
                      Δ = {delta}
                    </span>
                    <span className="block text-[11px] text-purple-700 mt-0.5">
                      {delta > 0 ? 'Hai nghiệm phân biệt' : delta === 0 ? 'Nghiệm kép' : 'Vô nghiệm thực'}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[11px] font-semibold">Tọa độ Đỉnh (Vertex I):</span>
                    <span className="text-sm font-bold font-mono text-slate-800">
                      I({vertexX.toFixed(2)}, {vertexY.toFixed(2)})
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      Bề lõm: {u4A > 0 ? 'Concave up (quay lên)' : 'Concave down (quay xuống)'}
                    </span>
                  </div>
                </div>

                <div className="bg-purple-950 text-purple-100 p-2.5 rounded-xl text-xs flex justify-around font-mono">
                  <span>Hệ thức Viète:</span>
                  <span>Tổng S = x₁+x₂ = <b>{sum.toFixed(2)}</b></span>
                  <span>Tích P = x₁x₂ = <b>{prod.toFixed(2)}</b></span>
                </div>
              </div>
            );
          })()}

          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="text-[11px] font-semibold text-slate-600 block mb-1">Hệ số a: {u4A}</span>
              <input
                type="range"
                min="-2"
                max="2"
                step="0.5"
                value={u4A === 0 ? 1 : u4A}
                onChange={(e) => setU4A(Number(e.target.value) || 1)}
                className="w-full accent-purple-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-600 block mb-1">Hệ số b: {u4B}</span>
              <input
                type="range"
                min="-6"
                max="6"
                value={u4B}
                onChange={(e) => setU4B(Number(e.target.value))}
                className="w-full accent-purple-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-600 block mb-1">Hệ số c: {u4C}</span>
              <input
                type="range"
                min="-6"
                max="6"
                value={u4C}
                onChange={(e) => setU4C(Number(e.target.value))}
                className="w-full accent-purple-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {unitId === 5 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Tỉ số lượng giác Tam giác vuông (Trigonometric Ratios)</span>
              <button
                onClick={() => speakTerm('Hypotenuse')}
                className="text-slate-400 hover:text-rose-600 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">Góc nhọn α = {u5Angle}°</span>
          </div>

          {/* Right triangle visualizer */}
          {(() => {
            const rad = (u5Angle * Math.PI) / 180;
            const opp = u5Hyp * Math.sin(rad);
            const adj = u5Hyp * Math.cos(rad);
            const sinVal = Math.sin(rad);
            const cosVal = Math.cos(rad);
            const tanVal = Math.tan(rad);

            return (
              <div className="space-y-3">
                <div className="relative bg-slate-900 rounded-xl p-4 flex justify-center items-center h-44">
                  <svg width="220" height="140" viewBox="0 0 200 130">
                    {/* Triangle coordinates: C(20, 110), B(170, 110), A(170, 110 - oppScale) */}
                    {(() => {
                      const scale = 140 / (adj || 1);
                      const baseW = Math.min(140, adj * scale);
                      const heightH = Math.min(95, opp * scale);
                      const cx = 25;
                      const cy = 115;
                      const bx = cx + baseW;
                      const by = cy;
                      const ax = bx;
                      const ay = cy - heightH;

                      return (
                        <>
                          {/* Triangle fill & stroke */}
                          <polygon
                            points={`${cx},${cy} ${bx},${by} ${ax},${ay}`}
                            fill="#f43f5e"
                            fillOpacity="0.15"
                            stroke="#f43f5e"
                            strokeWidth="2.5"
                          />
                          {/* Right angle marker at B */}
                          <rect
                            x={bx - 12}
                            y={by - 12}
                            width="12"
                            height="12"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="1.5"
                          />
                          {/* Angle arc at C */}
                          <path
                            d={`M ${cx + 18} ${cy} A 18 18 0 0 0 ${cx + 15} ${cy - 10}`}
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="2"
                          />
                          <text x={cx + 22} y={cy - 4} fill="#fbbf24" fontSize="10" fontWeight="bold">
                            α
                          </text>

                          {/* Labels */}
                          <text x={cx + baseW / 2 - 10} y={cy + 12} fill="#94a3b8" fontSize="9">
                            Adjacent (kề): {adj.toFixed(1)}
                          </text>
                          <text x={bx + 5} y={cy - heightH / 2} fill="#94a3b8" fontSize="9">
                            Opposite (đối): {opp.toFixed(1)}
                          </text>
                          <text x={cx + baseW / 2 - 25} y={ay + heightH / 2 - 5} fill="#38bdf8" fontSize="9" fontWeight="bold">
                            Hypotenuse (huyền): {u5Hyp}
                          </text>
                        </>
                      );
                    })()}
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-rose-50 p-2 rounded-lg border border-rose-200">
                    <span className="text-rose-600 block text-[10px] font-bold">sin α (đối/huyền)</span>
                    <span className="font-mono font-bold text-rose-950">{sinVal.toFixed(3)}</span>
                  </div>
                  <div className="bg-sky-50 p-2 rounded-lg border border-sky-200">
                    <span className="text-sky-600 block text-[10px] font-bold">cos α (kề/huyền)</span>
                    <span className="font-mono font-bold text-sky-950">{cosVal.toFixed(3)}</span>
                  </div>
                  <div className="bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <span className="text-amber-600 block text-[10px] font-bold">tan α (đối/kề)</span>
                    <span className="font-mono font-bold text-amber-950">{tanVal.toFixed(3)}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Số đo góc nhọn α: {u5Angle}°</span>
            </div>
            <input
              type="range"
              min="15"
              max="75"
              value={u5Angle}
              onChange={(e) => setU5Angle(Number(e.target.value))}
              className="w-full accent-rose-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}

      {unitId === 6 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <span>Định lý Góc nội tiếp & Góc ở tâm (Inscribed vs Central Angle)</span>
              <button
                onClick={() => speakTerm('Inscribed angle')}
                className="text-slate-400 hover:text-cyan-600 transition-colors"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </h4>
            <span className="text-xs text-slate-500 font-mono">Cung ⌢AB = {u6CentralAngle}°</span>
          </div>

          <div className="relative bg-slate-900 rounded-xl p-4 flex justify-center items-center h-48">
            <svg width="200" height="180" viewBox="0 0 200 180">
              {/* Circle center at (100, 90), Radius R = 60 */}
              <circle cx="100" cy="90" r="60" fill="none" stroke="#334155" strokeWidth="2" />
              <circle cx="100" cy="90" r="3" fill="#38bdf8" />
              <text x="96" y="103" fill="#94a3b8" fontSize="9">O</text>

              {/* Point A and B on circle based on central angle */}
              {(() => {
                const half = (u6CentralAngle / 2) * (Math.PI / 180);
                const ax = 100 - 60 * Math.sin(half);
                const ay = 90 + 60 * Math.cos(half);
                const bx = 100 + 60 * Math.sin(half);
                const by = 90 + 60 * Math.cos(half);
                const cx = 100;
                const cy = 30; // Inscribed vertex at top

                return (
                  <>
                    {/* Intercepted Arc AB highlighted */}
                    <path
                      d={`M ${ax} ${ay} A 60 60 0 0 0 ${bx} ${by}`}
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />

                    {/* Central angle rays OA, OB */}
                    <line x1="100" y1="90" x2={ax} y2={ay} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="100" y1="90" x2={bx} y2={by} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Inscribed angle lines CA, CB */}
                    <line x1={cx} y1={cy} x2={ax} y2={ay} stroke="#f59e0b" strokeWidth="2" />
                    <line x1={cx} y1={cy} x2={bx} y2={by} stroke="#f59e0b" strokeWidth="2" />

                    {/* Vertex C */}
                    <circle cx={cx} cy={cy} r="4" fill="#f59e0b" />
                    <text x={cx - 4} y={cy - 7} fill="#f59e0b" fontSize="9" fontWeight="bold">C</text>

                    {/* Points A and B */}
                    <circle cx={ax} cy={ay} r="3" fill="#06b6d4" />
                    <circle cx={bx} cy={by} r="3" fill="#06b6d4" />
                    <text x={ax - 10} y={ay + 10} fill="#06b6d4" fontSize="9">A</text>
                    <text x={bx + 4} y={by + 10} fill="#06b6d4" fontSize="9">B</text>
                  </>
                );
              })()}
            </svg>

            <div className="absolute top-2 left-3 right-3 flex justify-between text-[11px] text-slate-300 bg-slate-800/80 backdrop-blur px-2 py-1 rounded-lg">
              <span className="text-sky-300">Góc ở tâm ∠AOB = <b>{u6CentralAngle}°</b></span>
              <span className="text-amber-300">Góc nội tiếp ∠ACB = <b>{u6CentralAngle / 2}°</b></span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Kéo thay đổi góc ở tâm ∠AOB: {u6CentralAngle}°</span>
              <span className="text-cyan-600 font-bold">∠ACB = {u6CentralAngle / 2}°</span>
            </div>
            <input
              type="range"
              min="30"
              max="150"
              step="2"
              value={u6CentralAngle}
              onChange={(e) => setU6CentralAngle(Number(e.target.value))}
              className="w-full accent-cyan-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};
