import React, { useEffect, useState, useSyncExternalStore } from 'react';
import Layout from '@theme/Layout';

function useIsDark(): boolean {
  const subscribe = (callback: () => void) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  };
  const getSnapshot = () => document.documentElement.getAttribute('data-theme') === 'dark';
  // SSR fallback
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

type DocInfo = {
  path: string;
  title: string;
  status: string;
  has_upstream_changes?: boolean;
  upstream_id?: string;
};

type ContentMap = {
  summary: {
    total_docs: number;
    by_status: Record<string, number>;
    with_upstream_changes: number;
    upstream_deleted_pending?: number;
  };
  generated_at?: string;
  docs: Record<string, DocInfo>;
};

type SectionStat = {
  name: string;
  total: number;
  changed: number;
  deleted: number;
};

function buildSectionStats(docs: Record<string, DocInfo>): SectionStat[] {
  const map: Record<string, { total: number; changed: number; deleted: number }> = {};

  for (const info of Object.values(docs)) {
    const parts = info.path.split('/');
    // docs/{section}/...  or docs/{section}
    const section = parts.length >= 2 ? parts[1] : '(root)';

    if (!map[section]) {
      map[section] = { total: 0, changed: 0, deleted: 0 };
    }
    map[section].total++;
    if (info.has_upstream_changes) map[section].changed++;
    if (info.status === 'upstream_deleted_pending') map[section].deleted++;
  }

  return Object.entries(map)
    .map(([name, stats]) => ({ name, ...stats }))
    .sort((a, b) => b.total - a.total);
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; color: string }> = {
    mirror: { label: '镜像', color: '#22c55e' },
    local: { label: '本地', color: '#a78bfa' },
    upstream_deleted_pending: { label: '待确认已删', color: '#f97316' },
    upstream_deleted: { label: '已删除', color: '#ef4444' },
    rewritten: { label: '改写', color: '#3b82f6' },
    split_root: { label: '拆分根', color: '#8b5cf6' },
    split_child: { label: '拆分子', color: '#6366f1' },
    merged: { label: '合并', color: '#06b6d4' },
  };
  const info = map[status] || { label: status, color: '#6b7280' };
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600,
        color: '#fff',
        backgroundColor: info.color,
        marginRight: 4,
      }}
    >
      {info.label}
    </span>
  );
}

export default function Dashboard(): JSX.Element {
  const isDark = useIsDark();

  const [data, setData] = useState<ContentMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterSection, setFilterSection] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [sortKey, setSortKey] = useState<'path' | 'title' | 'status'>('path');

  useEffect(() => {
    fetch('/content-map.json')
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout title="内容同步仪表盘" description="文档同步状态">
        <main style={{ padding: 40, textAlign: 'center' }}>
          <p>加载中...</p>
        </main>
      </Layout>
    );
  }

  if (error || !data) {
    return (
      <Layout title="内容同步仪表盘" description="文档同步状态">
        <main style={{ padding: 40, textAlign: 'center', color: '#ef4444' }}>
          <p>加载失败: {error || '未知错误'}</p>
        </main>
      </Layout>
    );
  }

  const { summary, docs, generated_at } = data;
  const sections = buildSectionStats(docs);
  const maxTotal = Math.max(...sections.map((s) => s.total), 1);

  // 过滤文档列表
  let docList = Object.entries(docs);
  if (filterSection) {
    docList = docList.filter(([, info]) => info.path.startsWith(`docs/${filterSection}/`));
  }
  if (filterStatus) {
    docList = docList.filter(([, info]) => info.status === filterStatus);
  }
  if (searchTitle) {
    const q = searchTitle.toLowerCase();
    docList = docList.filter(([, info]) => info.title.toLowerCase().includes(q));
  }

  // 排序
  docList.sort((a, b) => {
    const va = a[1][sortKey] || '';
    const vb = b[1][sortKey] || '';
    return va.localeCompare(vb);
  });

  const hasChanges = summary.with_upstream_changes > 0;

  return (
    <Layout title="内容同步仪表盘" description="文档内容同步状态总览">
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <h1>内容同步仪表盘</h1>
        {generated_at && (
          <p style={{ color: isDark ? '#9ca3af' : '#6b7280', fontSize: 14 }}>
            数据更新时间: {generated_at}
          </p>
        )}

        {/* 总览卡片 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginTop: 24 }}>
          <StatCard label="总文档" value={summary.total_docs} color="#6366f1" isDark={isDark} />
          <StatCard label="镜像" value={summary.by_status.mirror || 0} color="#22c55e" isDark={isDark} />
          <StatCard label={hasChanges ? '🔄 有变更' : '有变更'} value={summary.with_upstream_changes} color={hasChanges ? '#f59e0b' : '#6b7280'} highlight={hasChanges} isDark={isDark} />
          <StatCard label="待确认已删" value={summary.upstream_deleted_pending || 0} color="#f97316" isDark={isDark} />
          <StatCard label="本地" value={summary.by_status.local || 0} color="#a78bfa" isDark={isDark} />
        </div>

        {/* 板块热力图 */}
        <h2 style={{ marginTop: 48 }}>🗂️ 板块分布</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {sections.map((s) => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 140, fontSize: 14, fontWeight: 600, textAlign: 'right', flexShrink: 0 }}>
                {s.name}
              </span>
              <div style={{ flex: 1, height: 24, backgroundColor: isDark ? '#374151' : '#f3f4f6', borderRadius: 4, overflow: 'hidden', display: 'flex' }}>
                <div
                  style={{
                    width: `${(s.total / maxTotal) * 100}%`,
                    minWidth: s.total > 0 ? 20 : 0,
                    height: '100%',
                    backgroundColor: '#6366f1',
                    borderRadius: 4,
                    transition: 'width 0.3s',
                  }}
                />
              </div>
              <span style={{ fontSize: 13, color: isDark ? '#9ca3af' : '#6b7280', minWidth: 40 }}>
                {s.total}
              </span>
              {s.changed > 0 && (
                <span style={{ fontSize: 12, color: '#f59e0b', minWidth: 60 }}>
                  🔄{s.changed}变更
                </span>
              )}
              {s.deleted > 0 && (
                <span style={{ fontSize: 12, color: '#f97316', minWidth: 60 }}>
                  ⚠️{s.deleted}待确认
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 文档列表 */}
        <h2 style={{ marginTop: 48 }}>📋 文档列表</h2>

        {/* 筛选栏 */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <select
            value={filterSection}
            onChange={(e) => setFilterSection(e.target.value)}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid', borderColor: isDark ? '#4b5563' : '#d1d5db', background: isDark ? '#374151' : '#fff', color: isDark ? '#e5e7eb' : 'inherit' }}
          >
            <option value="">全部板块</option>
            {sections.map((s) => (
              <option key={s.name} value={s.name}>{s.name} ({s.total})</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid', borderColor: isDark ? '#4b5563' : '#d1d5db', background: isDark ? '#374151' : '#fff', color: isDark ? '#e5e7eb' : 'inherit' }}
          >
            <option value="">全部状态</option>
            <option value="mirror">镜像</option>
            <option value="upstream_deleted_pending">待确认已删</option>
            <option value="local">本地</option>
          </select>
          <input
            type="text"
            placeholder="搜索标题..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid', borderColor: isDark ? '#4b5563' : '#d1d5db', background: isDark ? '#374151' : '#fff', color: isDark ? '#e5e7eb' : 'inherit', flex: 1, minWidth: 160 }}
          />
          <span style={{ fontSize: 13, color: isDark ? '#9ca3af' : '#6b7280' }}>共 {docList.length} 篇</span>
        </div>

        {/* 表格 */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${isDark ? '#4b5563' : '#e5e7eb'}` }}>
                <Th label="路径" sortKey="path" current={sortKey} onSort={setSortKey} />
                <Th label="标题" sortKey="title" current={sortKey} onSort={setSortKey} />
                <Th label="状态" sortKey="status" current={sortKey} onSort={setSortKey} />
                <th style={{ padding: '8px 12px', textAlign: 'left' }}>标识</th>
              </tr>
            </thead>
            <tbody>
              {docList.slice(0, 500).map(([uid, info]) => (
                <tr key={uid} style={{ borderBottom: `1px solid ${isDark ? '#374151' : '#f3f4f6'}` }}>
                  <td style={{ padding: '6px 12px', color: isDark ? '#9ca3af' : '#6b7280', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {info.path}
                  </td>
                  <td style={{ padding: '6px 12px' }}>{info.title}</td>
                  <td style={{ padding: '6px 12px' }}>
                    <StatusBadge status={info.status} />
                    {info.has_upstream_changes && (
                      <span style={{ fontSize: 12, color: '#f59e0b', marginLeft: 4 }}>🔄</span>
                    )}
                  </td>
                  <td style={{ padding: '6px 12px', color: isDark ? '#6b7280' : '#9ca3af', fontSize: 12, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {uid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {docList.length > 500 && (
            <p style={{ color: isDark ? '#9ca3af' : '#6b7280', fontSize: 13, marginTop: 8, textAlign: 'center' }}>
              仅显示前 500 条，请使用筛选缩小范围
            </p>
          )}
        </div>
      </main>
    </Layout>
  );
}

function StatCard({
  label,
  value,
  color,
  highlight,
  isDark,
}: {
  label: string;
  value: number;
  color: string;
  highlight?: boolean;
  isDark: boolean;
}) {
  return (
    <div
      style={{
        background: isDark ? '#1f2937' : '#fff',
        borderRadius: 8,
        padding: 16,
        border: `1px solid ${highlight ? color : isDark ? '#374151' : '#e5e7eb'}`,
        boxShadow: highlight ? `0 0 0 2px ${color}40` : isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.05)',
      }}
    >
      <div style={{ fontSize: 13, color: isDark ? '#9ca3af' : '#6b7280' }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value.toLocaleString()}</div>
    </div>
  );
}

function Th({
  label,
  sortKey,
  current,
  onSort,
}: {
  label: string;
  sortKey: 'path' | 'title' | 'status';
  current: string;
  onSort: (k: 'path' | 'title' | 'status') => void;
}) {
  return (
    <th
      onClick={() => onSort(sortKey)}
      style={{
        padding: '8px 12px',
        textAlign: 'left',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {label} {current === sortKey ? '▾' : '▸'}
    </th>
  );
}
