import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, ApiError } from '../api/client'

interface BatchInfo {
  id: string
  started_at: string
  finished_at?: string | null
  added_count: number
  deleted_count: number
  modified_count: number
  skipped_count?: number
  total_changes: number
  status: string
}

interface DashboardData {
  pending: {
    added: number
    deleted: number
    modified: number
  }
  total_pending: number
  processed: {
    approved: number
    rejected: number
    ignored: number
    done: number
    failed: number
  }
  recent_batches: BatchInfo[]
}

interface CardConfig {
  label: string
  value: number
  icon: string
  border: string
  text: string
  hover: string
  type: string
}

function formatTime(s: string): string {
  const d = new Date(s)
  if (Number.isNaN(d.getTime())) return s
  return d.toLocaleString('zh-CN', { hour12: false })
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const d = await api.get<DashboardData>('/api/dashboard')
        if (!cancelled) setData(d)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : '加载仪表盘数据失败')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const cards: CardConfig[] = [
    {
      label: '待处理新增',
      value: data?.pending.added ?? 0,
      icon: '🆕',
      border: 'border-success',
      text: 'text-success',
      hover: 'hover:border-success',
      type: 'added',
    },
    {
      label: '待处理删除',
      value: data?.pending.deleted ?? 0,
      icon: '❌',
      border: 'border-danger',
      text: 'text-danger',
      hover: 'hover:border-danger',
      type: 'deleted',
    },
    {
      label: '待处理变更',
      value: data?.pending.modified ?? 0,
      icon: '✏️',
      border: 'border-warning',
      text: 'text-warning',
      hover: 'hover:border-warning',
      type: 'modified',
    },
  ]

  function goTo(type: string) {
    navigate(`/changes?type=${type}&status=pending`)
  }

  const processedItems = data
    ? [
        { label: '已批准', value: data.processed.approved, cls: 'text-success' },
        { label: '已拒绝', value: data.processed.rejected, cls: 'text-danger' },
        { label: '已忽略', value: data.processed.ignored, cls: 'text-fg-subtle' },
        { label: '已执行', value: data.processed.done, cls: 'text-fg-muted' },
      ]
    : []

  return (
    <div className="flex-1 overflow-auto p-6">
      <h1 className="text-xl font-semibold">仪表盘</h1>

      {loading && <p className="mt-6 text-sm text-fg-muted">加载中…</p>}

      {error && (
        <div className="mt-6 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {!loading && !error && data && (
        <div className="mt-6 space-y-8">
          {/* Pending cards */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium text-fg">待处理变更</h2>
              <span className="text-xs text-fg-subtle">
                共 {data.total_pending} 条待处理（去重后唯一计数）
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cards.map((c) => (
                <button
                  key={c.type}
                  type="button"
                  onClick={() => goTo(c.type)}
                  className={`group rounded-lg border ${c.border} bg-canvas-subtle p-5 text-left transition-colors ${c.hover} hover:bg-canvas-inset`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-semibold ${c.text}`}>{c.value}</span>
                    <span className="text-2xl opacity-80">{c.icon}</span>
                  </div>
                  <div className="mt-2 text-sm text-fg-muted">{c.label}</div>
                  <div className="mt-3 text-xs text-fg-subtle group-hover:text-fg-muted">
                    点击查看 →
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Processed summary */}
          <div className="rounded-lg border border-border bg-canvas-subtle p-5">
            <h2 className="text-sm font-medium text-fg">已处理统计</h2>
            <div className="mt-4 flex flex-wrap gap-6">
              {processedItems.map((p) => (
                <div key={p.label} className="flex items-center gap-2">
                  <span className={`text-lg font-semibold ${p.cls}`}>{p.value}</span>
                  <span className="text-sm text-fg-muted">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sync history */}
          <div className="rounded-lg border border-border bg-canvas-subtle p-5">
            <h2 className="text-sm font-medium text-fg">同步批次历史</h2>
            <p className="mt-1 text-xs text-fg-subtle">
              每次同步全量扫描上游文档，去重后仅记录新增变更。同一条变更不会在多次同步中重复出现。
            </p>
            {data.recent_batches.length > 0 ? (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-fg-muted">
                      <th className="px-3 py-2">同步时间</th>
                      <th className="px-3 py-2 text-right">新增</th>
                      <th className="px-3 py-2 text-right">删除</th>
                      <th className="px-3 py-2 text-right">变更</th>
                      <th className="px-3 py-2 text-right">跳过(去重)</th>
                      <th className="px-3 py-2 text-right">合计</th>
                      <th className="px-3 py-2">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recent_batches.map((b) => (
                      <tr
                        key={b.id}
                        className="border-b border-border-muted last:border-0 hover:bg-canvas-inset"
                      >
                        <td className="px-3 py-2 text-fg-muted">{formatTime(b.started_at)}</td>
                        <td className="px-3 py-2 text-right text-success">{b.added_count ?? 0}</td>
                        <td className="px-3 py-2 text-right text-danger">{b.deleted_count ?? 0}</td>
                        <td className="px-3 py-2 text-right text-warning">{b.modified_count ?? 0}</td>
                        <td className="px-3 py-2 text-right text-fg-subtle">{b.skipped_count ?? 0}</td>
                        <td className="px-3 py-2 text-right font-medium text-fg">
                          {b.total_changes ?? 0}
                        </td>
                        <td className="px-3 py-2">
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${
                              b.status === 'completed'
                                ? 'border-success/40 text-success'
                                : b.status === 'failed'
                                  ? 'border-danger/40 text-danger'
                                  : 'border-warning/40 text-warning'
                            }`}
                          >
                            {b.status === 'completed' ? '完成' : b.status === 'failed' ? '失败' : '运行中'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-4 text-sm text-fg-subtle">暂无同步记录</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
