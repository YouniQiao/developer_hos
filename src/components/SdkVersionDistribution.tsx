import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// ---- Data (from https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/sdk-version-percentage) ----

interface VersionData {
  version: string;
  percentage: number;
  display: string;
  isDominant: boolean;
}

const DATA: VersionData[] = [
  { version: '6.1.0(24) Beta', percentage: 0.08, display: '0.08%', isDominant: false },
  { version: '6.1.0(23)', percentage: 84.94, display: '84.94%', isDominant: true },
  { version: '6.0.2(22)', percentage: 12.61, display: '12.61%', isDominant: false },
  { version: '6.0.1(21)', percentage: 0.95, display: '0.95%', isDominant: false },
  { version: '6.0.0(20)', percentage: 0.27, display: '0.27%', isDominant: false },
  { version: '5.1.1(19)', percentage: 0.28, display: '0.28%', isDominant: false },
  { version: '5.1.0(18)', percentage: 0.13, display: '0.13%', isDominant: false },
  { version: '5.0.5(17)', percentage: 0.54, display: '0.54%', isDominant: false },
  { version: '5.0.4(16)', percentage: 0.01, display: '0.01%', isDominant: false },
  { version: '5.0.3(15)', percentage: -1, display: '<0.01%', isDominant: false },
  { version: '5.0.2(14)', percentage: -1, display: '<0.01%', isDominant: false },
  { version: '5.0.1(13)', percentage: 0, display: '0%', isDominant: false },
  { version: '5.0.0(12)', percentage: 0, display: '0%', isDominant: false },
];

const UPDATE_TIME = '2026-05-19 17:15';
const DATA_DATE = '2026年5月17日';
const SOURCE_URL = 'https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/sdk-version-percentage';

// ---- Color palette ----

const COLORS = [
  '#3b82f6',
  '#8b5cf6',
  '#06b6d4',
  '#f59e0b',
  '#ef4444',
  '#10b981',
  '#ec4899',
  '#6366f1',
  '#14b8a6',
  '#f97316',
  '#84cc16',
  '#a855f7',
  '#64748b',
];

// ---- SVG Pie Chart ----

interface SliceData {
  item: VersionData;
  color: string;
  startAngle: number;
  endAngle: number;
  midAngle: number;
  largeArc: number;
}

function PieChart() {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r = 120;

  const totalPct = DATA.reduce((sum, d) => sum + Math.max(d.percentage, 0), 0);
  let cumulative = 0;
  const slices: SliceData[] = DATA.map((item, i) => {
    const pct = Math.max(item.percentage, 0);
    const sliceAngle = (pct / totalPct) * 360;
    const startAngle = cumulative;
    const endAngle = cumulative + sliceAngle;
    const midAngle = startAngle + sliceAngle / 2;
    const largeArc = sliceAngle > 180 ? 1 : 0;
    cumulative = endAngle;
    return { item, color: COLORS[i % COLORS.length], startAngle, endAngle, midAngle, largeArc };
  });

  function polarToCartesian(angle: number, radius: number): [number, number] {
    const rad = ((angle - 90) * Math.PI) / 180;
    return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
  }

  function describeArc(slice: SliceData): string {
    const [x1, y1] = polarToCartesian(slice.startAngle, r);
    const [x2, y2] = polarToCartesian(slice.endAngle, r);
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${slice.largeArc} 1 ${x2} ${y2} Z`;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* Pie */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-shrink-0">
        {slices.map((slice, i) => {
          if (Math.max(slice.item.percentage, 0) <= 0) return null;
          return (
            <g key={i}>
              <path
                d={describeArc(slice)}
                fill={slice.color}
                stroke="rgb(25, 25, 25)"
                strokeWidth={2}
              />
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={r * 0.55} fill="rgb(25, 25, 25)" />
        <text x={cx} y={cy - 8} textAnchor="middle" style={{ fill: '#3b82f6', fontSize: '22px', fontWeight: 700 }}>
          84.94%
        </text>
        <text x={cx} y={cy + 16} textAnchor="middle" style={{ fill: '#999', fontSize: '12px' }}>
          6.1.0(23)
        </text>
      </svg>

      {/* Legend */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs min-w-[240px]">
        {slices.map((slice, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ backgroundColor: slice.color }}
            />
            <span className="font-mono text-text-400 flex-1 truncate">
              {slice.item.version}
            </span>
            <span className={`font-semibold ${slice.item.isDominant ? 'text-primary' : 'text-text-400'}`}>
              {slice.item.display}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Main Component ----

function SdkVersionDistributionInner() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Description */}
      <p className="text-text-400 text-sm mb-3">
        截止{DATA_DATE}，HarmonyOS 设备各 API 版本使用量占比如下。
        开发者可根据占比来为应用合理定义需要兼容的 API 版本。
      </p>
      <p className="text-xs text-text-400 mb-8">
        数据更新时间：{UPDATE_TIME}，约每15天更新一次。
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-primary hover:underline"
        >
          数据来源 →
        </a>
      </p>

      {/* Pie Chart Section */}
      <div className="mb-6 bg-secondary-900 rounded-xl p-6">
        <h2 className="text-base font-semibold mb-5">各版本设备量占比</h2>
        <PieChart />
      </div>

      <p className="text-xs text-text-400 italic">
        说明：占比数据反映的是存量活跃设备的 API 版本分布情况。
      </p>
    </div>
  );
}

// ---- Wrapper ----

export default function SdkVersionDistribution(): JSX.Element {
  return (
    <BrowserOnly>
      {() => <SdkVersionDistributionInner />}
    </BrowserOnly>
  );
}
