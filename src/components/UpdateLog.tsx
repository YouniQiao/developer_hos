import React, { useState, type ReactNode } from 'react';

interface UpdateItem {
  date: string;
  description: ReactNode;
}

const updateRecords: UpdateItem[] = [
  {
    date: '2026-05-26',
    description: '增加更多资源菜单下内容，跨平台框架内容后续持续补充。',
  },
  {
    date: '2026-05-26',
    description: '刷新开发与测试-版本说明。',
  },
  {
    date: '2026-05-23',
    description: (
      <>
        增加{' '}
        <a href="/docs/dev/release-notes/api-diff-search" className="text-primary hover:underline">API 变更查询</a>
        {'、'}
        <a href="/docs/dev/release-notes/sdk-version-distribution" className="text-primary hover:underline">设备版本分布</a>
        {'、'}
        <a href="/docs/dev/release-notes/device-support-search" className="text-primary hover:underline">设备支持查询</a>
        {' 三个交互工具。'}
      </>
    ),
  },
];

const updatePlans: UpdateItem[] = [
  { date: '2026-06-30', description: '设计与规划 → 设计指南 → 架构 → 质量 → 安全 → 体验建议' },
  { date: '后续', description: '当月更新下个月的计划。' },
];

function UpdateItemRow({ item, index }: { item: UpdateItem; index: number }) {
  return (
    <div className={`flex gap-8 py-5 px-5 ${index % 2 === 0 ? 'bg-secondary-800/40' : ''} rounded-lg`}>
      <span className="text-sm text-text-500 font-mono whitespace-nowrap pt-0.5 min-w-[140px]">{item.date}</span>
      <span className="text-base leading-relaxed">{item.description}</span>
    </div>
  );
}

export default function UpdateLog(): JSX.Element {
  const [tab, setTab] = useState<'records' | 'plans'>('records');

  return (
    <div className="max-w-4xl mx-auto py-4">
      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-secondary-800 rounded-lg p-1 w-fit">
        <button
          onClick={() => setTab('records')}
          className={`px-5 py-2.5 rounded-md text-base font-medium transition-colors ${
            tab === 'records' ? 'bg-primary text-white' : 'text-text-400 hover:text-white'
          }`}
        >
          更新记录
        </button>
        <button
          onClick={() => setTab('plans')}
          className={`px-5 py-2.5 rounded-md text-base font-medium transition-colors ${
            tab === 'plans' ? 'bg-primary text-white' : 'text-text-400 hover:text-white'
          }`}
        >
          更新计划
        </button>
      </div>

      {/* Content */}
      <div className="bg-secondary-900 rounded-xl p-6">
        {tab === 'records' ? (
          <div className="space-y-1.5">
            <p className="text-sm text-text-400 mb-5">近期站点更新记录，按时间倒序排列。</p>
            {updateRecords.map((item, i) => (
              <UpdateItemRow key={i} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-1.5">
            <p className="text-sm text-text-400 mb-5">后续计划中的更新，具体时间以实际推进为准。</p>
            {updatePlans.map((item, i) => (
              <UpdateItemRow key={i} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
