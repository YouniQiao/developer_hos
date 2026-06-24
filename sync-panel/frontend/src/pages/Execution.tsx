import { useEffect, useState } from 'react'
import { api, ApiError } from '../api/client'

interface ExecTask {
  change_id: number
  title: string
  current_step: number
  total_steps: number
  message: string
  status: string
}

interface ExecStatusResponse {
  items: ExecTask[]
}

interface ExecHistoryItem {
  id: number
  change_id: number
  title: string
  status: string
  executed_at?: string
  started_at?: string
  finished_at?: string
  message?: string
}

interface ExecHistoryResponse {
  items: ExecHistoryItem[]
  total: number
}

const statusMeta: Record<string, { label: string; cls: string }> = {
  running: { label: '执行中', cls: 'text-accent border-accent/60' },
  pending: { label: '等待中', cls: 'text-warning border-warning/60' },
  done: { label: '已完成', cls: 'text-success border-success/60' },
  failed: { label: '已失败', cls: 'text-danger border-danger/60' },
}

function formatTime(s?: string): string {
  if (!s) return '-'
  const d = new Date(s)
  if (Number.isNaN(d.getTime())) return s
  return d.toLocaleString('zh-CN', { hour12: false })
}

function pickTime(item: ExecHistoryItem): string {
  return item.finished_at || item.started_at || item.executed_at || ''
}

export default function Execution() {
  const [tasks, setTasks] = useState<ExecTask[]>([])
  const [history, setHistory] = useState<ExecHistoryItem[]>([])
  const [historyTotal, setHistoryTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [historyLoading, setHistoryLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [historyError, setHistoryError] = useState<string | null>(null)
  const [execAllLoading, setExecAllLoading] = useState(false)
  const [rollbackLoading, setRollbackLoading] = useState<number | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  // poll current execution status every 3s
  useEffect(() => {
    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | null = null

    async function poll() {
      try {
        const res = await api.get<ExecStatusResponse>('/api/execution/status')
        if (!cancelled) {
          setTasks(res.items ?? [])
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : '获取执行状态失败')
        }
      } finally {
        if (cancelled) return
        setLoading(false)
        timer = setTimeout(poll, 3000)
      }
    }
    poll()
    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [])

  // load execution history
  useEffect(() => {
    let cancelled = false
    async function loadHistory() {
      setHistoryLoading(true)
      setHistoryError(null)
      try {
        const res = await api.get<ExecHistoryResponse>('/api/execution/history')
        if (cancelled) return
        setHistory(res.items ?? [])
        setHistoryTotal(res.total ?? 0)
      } catch (err) {
        if (cancelled) return
        setHistoryError(err instanceof ApiError ? err.message : '加载执行历史失败')
      } finally {
        if (!cancelled) setHistoryLoading(false)
      }
    }
    loadHistory()
    return () => {
      cancelled = true
    }
  }, [refreshKey])

  async function handleExecuteAll() {
    setExecAllLoading(true)
    setError(null)
    try {
      await api.post('/api/changes/execute-all')
      // status poll will pick up new tasks automatically
    } catch (err) {
      setError(err instanceof ApiError ? err.message : '执行失败')
    } finally {
      setExecAllLoading(false)
    }
  }

  async function handleRollback(changeId: number) {
    setRollbackLoading(changeId)
    setHistoryError(null)
    try {
      await api.post(`/api/changes/${changeId}/rollback`)
      setRefreshKey((k) => k + 1)
    } catch (err) {
      setHistoryError(err instanceof ApiError ? err.message : '回滚失败')
    } finally {
      setRollbackLoading(null)
    }
  }

  const reload = () => setRefreshKey((k) => k + 1)

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">执行进度</h1>
        <button
          type="button"
          disabled={execAllLoading}
          onClick={handleExecuteAll}
          className="rounded-md bg-success px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-success/90 disabled:opacity-60"
        >
          {execAllLoading ? '提交中…' : '执行所有已批准'}
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {/* Current executions */}
      <section className="mt-6">
        <h2 className="text-sm font-medium text-fg">当前执行</h2>
        {loading && <p className="mt-3 text-sm text-fg-muted">加载中…</p>}
        {!loading && tasks.length === 0 && (
          <div className="mt-3 rounded-md border border-border bg-canvas-subtle px-4 py-8 text-center text-sm text-fg-muted">
            当前没有正在执行的任务
          </div>
        )}
        <div className="mt-3 space-y-3">
          {tasks.map((t) => {
            const pct =
              t.total_steps > 0
                ? Math.min(100, Math.round((t.current_step / t.total_steps) * 100))
                : 0
            const sm = statusMeta[t.status] ?? {
              label: t.status,
              cls: 'text-fg-muted border-border',
            }
            return (
              <div
                key={t.change_id}
                className="rounded-lg border border-border bg-canvas-subtle p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-medium text-fg">
                    {t.title || '(无标题)'}
                  </span>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}
                  >
                    {sm.label}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-success transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs text-fg-muted">
                    {t.current_step}/{t.total_steps} ({pct}%)
                  </span>
                </div>
                {t.message && (
                  <div className="mt-2 break-all text-xs text-fg-subtle">{t.message}</div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* History */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-fg">执行历史</h2>
          <button
            type="button"
            onClick={reload}
            className="text-xs text-fg-muted transition-colors hover:text-fg"
          >
            刷新
          </button>
        </div>

        {historyError && (
          <div className="mt-3 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
            {historyError}
          </div>
        )}

        {historyLoading && <p className="mt-3 text-sm text-fg-muted">加载中…</p>}

        {!historyLoading && !historyError && history.length === 0 && (
          <div className="mt-3 rounded-md border border-border bg-canvas-subtle px-4 py-8 text-center text-sm text-fg-muted">
            暂无执行历史
          </div>
        )}

        {!historyLoading && history.length > 0 && (
          <div className="mt-3 overflow-hidden rounded-md border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-canvas-subtle text-left text-fg-muted">
                  <th className="px-3 py-2">标题</th>
                  <th className="w-24 px-3 py-2">状态</th>
                  <th className="w-44 px-3 py-2">执行时间</th>
                  <th className="w-24 px-3 py-2 text-right">操作</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => {
                  const isDone = item.status === 'done'
                  const isFailed = item.status === 'failed'
                  const sm = isDone
                    ? { label: '已完成', cls: 'text-success border-success/60' }
                    : isFailed
                      ? { label: '已失败', cls: 'text-danger border-danger/60' }
                      : statusMeta[item.status] ?? {
                          label: item.status,
                          cls: 'text-fg-muted border-border',
                        }
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-border-muted last:border-0 hover:bg-canvas-subtle"
                    >
                      <td className="px-3 py-2 text-fg">{item.title || '(无标题)'}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}
                        >
                          {sm.label}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-fg-muted">
                        {formatTime(pickTime(item))}
                      </td>
                      <td className="px-3 py-2 text-right">
                        {isDone ? (
                          <button
                            type="button"
                            disabled={rollbackLoading === item.change_id}
                            onClick={() => handleRollback(item.change_id)}
                            className="rounded-md border border-danger/60 px-2.5 py-1 text-xs font-medium text-danger transition-colors hover:bg-danger/10 disabled:opacity-60"
                          >
                            {rollbackLoading === item.change_id ? '回滚中…' : '回滚'}
                          </button>
                        ) : (
                          <span className="text-xs text-fg-subtle">-</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {!historyLoading && historyTotal > 0 && (
          <div className="mt-2 text-xs text-fg-subtle">共 {historyTotal} 条</div>
        )}
      </section>
    </div>
  )
}
