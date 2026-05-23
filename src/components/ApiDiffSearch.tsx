import React, { useState, useEffect, useMemo, useCallback } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// ---- Types ----

interface ApiChange {
  version: string;
  kit: string;
  operation: string;
  dts_file: string;
  old_class: string;
  old_api: string;
  old_detail: string;
  new_class: string;
  new_api: string;
  new_detail: string;
  detail_url: string;
}

interface FilterState {
  version: string;
  search: string;
  kit: string;
  operation: string;
}

// ---- Constants ----

const VERSIONS = [
  { slug: '611', label: '6.1.1(24)' },
  { slug: '610', label: '6.1.0(23)' },
  { slug: '602', label: '6.0.2(22)' },
  { slug: '601', label: '6.0.1(21)' },
  { slug: '600', label: '6.0.0(20)' },
];

const PAGE_SIZE = 100;

// ---- Main Component (BrowserOnly wrapper) ----

export default function ApiDiffSearchWrapper(): JSX.Element {
  return (
    <BrowserOnly>
      {() => <ApiDiffSearch />}
    </BrowserOnly>
  );
}

// ---- Inner Component ----

function ApiDiffSearch(): JSX.Element {
  const [allData, setAllData] = useState<ApiChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedVersion, setLoadedVersion] = useState<string>('');
  const [page, setPage] = useState(0);

  const [filters, setFilters] = useState<FilterState>({
    version: '611',
    search: '',
    kit: '',
    operation: '',
  });

  // ---- Load data for the selected version ----

  useEffect(() => {
    const slug = filters.version;
    if (slug === loadedVersion) return;

    setLoading(true);
    setError(null);
    setPage(0);

    fetch(`/data/api-diff-${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: ApiChange[]) => {
        setAllData(data);
        setLoadedVersion(slug);
        setLoading(false);
      })
      .catch((err) => {
        setError(`加载失败: ${err.message}`);
        setLoading(false);
      });
  }, [filters.version]);

  // ---- Derived: unique kits & operations for filter dropdowns ----

  const { kits, operations } = useMemo(() => {
    const kitSet = new Set<string>();
    const opSet = new Set<string>();
    for (const item of allData) {
      kitSet.add(item.kit);
      opSet.add(item.operation);
    }
    return {
      kits: Array.from(kitSet).sort(),
      operations: Array.from(opSet).sort(),
    };
  }, [allData]);

  // ---- Filter & search ----

  const filtered = useMemo(() => {
    let result = allData;

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (item) =>
          item.kit.toLowerCase().includes(q) ||
          item.operation.toLowerCase().includes(q) ||
          item.dts_file.toLowerCase().includes(q) ||
          item.old_class.toLowerCase().includes(q) ||
          item.old_api.toLowerCase().includes(q) ||
          item.new_class.toLowerCase().includes(q) ||
          item.new_api.toLowerCase().includes(q) ||
          item.old_detail.toLowerCase().includes(q) ||
          item.new_detail.toLowerCase().includes(q)
      );
    }

    if (filters.kit) {
      result = result.filter((item) => item.kit === filters.kit);
    }

    if (filters.operation) {
      result = result.filter((item) => item.operation === filters.operation);
    }

    return result;
  }, [allData, filters]);

  // ---- Pagination ----

  const displayed = useMemo(() => {
    return filtered.slice(0, (page + 1) * PAGE_SIZE);
  }, [filtered, page]);

  const hasMore = displayed.length < filtered.length;

  // Reset page when filters change
  useEffect(() => {
    setPage(0);
  }, [filters.search, filters.kit, filters.operation, filters.version]);

  // ---- Handlers ----

  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  // ---- Operation badge color ----

  const opBadge = (op: string) => {
    if (op.includes('新增')) return { bg: '#1a4d2e', color: '#7ee787' };
    if (op.includes('删除') || op.includes('废弃')) return { bg: '#4d1a2a', color: '#f7788b' };
    if (op.includes('变更')) return { bg: '#4d3a0a', color: '#e6b422' };
    return { bg: '#1a3a5c', color: '#79c0ff' };
  };

  // ---- Render ----

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 0' }}>
      <style>{`
        .api-diff-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        .api-diff-table th {
          text-align: left;
          padding: 8px 12px;
          border-bottom: 2px solid var(--ifm-color-emphasis-200);
          background: var(--ifm-color-emphasis-100);
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .api-diff-table td {
          padding: 6px 12px;
          border-bottom: 1px solid var(--ifm-color-emphasis-200);
          vertical-align: top;
        }
        .api-diff-table tr:hover td {
          background: var(--ifm-color-emphasis-100);
        }
        .api-diff-filters {
          background: var(--ifm-color-emphasis-100);
        }
        [data-theme='dark'] .api-diff-filters {
          background: var(--ifm-color-emphasis-200);
        }
      `}</style>

      {/* ---- Filters ---- */}
      <div
        className="api-diff-filters"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 20,
          padding: 16,
          borderRadius: 8,
        }}>
        <select
          value={filters.version}
          onChange={(e) => handleFilterChange('version', e.target.value)}
          style={selectStyle}
        >
          {VERSIONS.map((v) => (
            <option key={v.slug} value={v.slug}>
              {v.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="搜索 API、类名、d.ts 路径..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          style={{ ...selectStyle, flex: 1, minWidth: 0 }}
        />

        <select
          value={filters.kit}
          onChange={(e) => handleFilterChange('kit', e.target.value)}
          style={selectStyle}
        >
          <option value="">全部 Kit</option>
          {kits.map((k) => (
            <option key={k} value={k}>{k}</option>
          ))}
        </select>

        <select
          value={filters.operation}
          onChange={(e) => handleFilterChange('operation', e.target.value)}
          style={selectStyle}
        >
          <option value="">全部操作类型</option>
          {operations.map((op) => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>
      </div>

      {/* ---- Stats ---- */}
      <div style={{ marginBottom: 12, fontSize: 14, color: 'var(--ifm-color-secondary-darkest)' }}>
        {loading ? (
          '加载中...'
        ) : (
          <>
            共 <strong>{filtered.length}</strong> 条
            {filtered.length > 0 && displayed.length < filtered.length && (
              <>（当前显示 {displayed.length} 条）</>
            )}
            {allData.length > 0 && (
              <span style={{ marginLeft: 8, color: 'var(--ifm-color-secondary)' }}>
                / 本版本共 {allData.length} 条
              </span>
            )}
          </>
        )}
      </div>

      {/* ---- Error ---- */}
      {error && (
        <div style={{
          padding: 16,
          background: 'var(--ifm-color-danger-contrast-background)',
          color: 'var(--ifm-color-danger-contrast-foreground)',
          borderRadius: 8,
          marginBottom: 16,
          border: '1px solid var(--ifm-color-danger-dark)',
        }}>
          {error}
        </div>
      )}

      {/* ---- Table ---- */}
      <div style={{ overflowX: 'auto' }}>
        <table className="api-diff-table">
          <thead>
            <tr>
              <th>操作</th>
              <th>Kit</th>
              <th>d.ts 文件</th>
              <th>类名</th>
              <th>API / 声明</th>
              <th>变更详情</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((item, idx) => {
              const badge = opBadge(item.operation);
              // Choose the side that has data
              const isNew = item.operation.includes('新增');
              const source = isNew ? item : item;
              const displayClass = source.new_class || source.old_class;
              const displayApi = source.new_api || source.old_api;
              const displayDetail = isNew
                ? source.new_detail
                : `旧: ${source.old_detail || '—'} → 新: ${source.new_detail || '—'}`;

              return (
                <tr key={idx}>
                  <td>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: 12,
                        fontSize: 12,
                        fontWeight: 500,
                        background: badge.bg,
                        color: badge.color,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.operation}
                    </span>
                  </td>
                  <td>{item.kit}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{item.dts_file}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 13 }}>{displayClass}</td>
                  <td style={{ fontFamily: 'monospace', fontSize: 12, maxWidth: 400, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {displayApi}
                  </td>
                  <td style={{ fontSize: 12, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {displayDetail}
                  </td>
                </tr>
              );
            })}
            {displayed.length === 0 && !loading && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: 40, color: 'var(--ifm-color-secondary-darkest)' }}>
                  无匹配结果
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ---- Load More ---- */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <button
            onClick={() => setPage((p) => p + 1)}
            style={{
              padding: '8px 24px',
              border: '1px solid var(--ifm-color-primary)',
              borderRadius: 8,
              background: 'transparent',
              color: 'var(--ifm-color-primary)',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            加载更多（{Math.min(PAGE_SIZE, filtered.length - displayed.length)} 条）
          </button>
        </div>
      )}
    </div>
  );
}

// ---- Styles ----

const selectStyle: React.CSSProperties = {
  padding: '6px 12px',
  border: '1px solid var(--ifm-color-secondary-light)',
  borderRadius: 6,
  background: 'var(--ifm-background-color)',
  color: 'var(--ifm-font-color-base)',
  fontSize: 14,
};
