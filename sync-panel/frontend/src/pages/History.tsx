import { Fragment, useEffect, useState } from 'react'
import { api, ApiError } from '../api/client'

interface Batch {
  id: number
  started_at: string
  finished_at?: string
  total_changes?: number
  added_count: number
  deleted_count: number
  modified_count: number
  status: string
}

interface SyncHistoryResponse {
  batches: Batch[]
}

interface ChangeItem {
  id: number
  title: string
  change_type: 'added' | 'deleted' | 'modified' | string
  status: string
  section?: string
}

interface ChangesResponse {
  items: ChangeItem[]
  total: number
}

const batchStatusMeta: Record<string, { label: string; cls: string }> = {
  running: { label: '执行中', cls: 'text-accent border-accent/60' },
  completed: { label: '已完成', cls: 'text-success border-success/60' },
  failed: { label: '已失败', cls: 'text-danger border-danger/60' },
}

const typeMeta: Record<string, { icon: string; label: string; cls: string }> = {
  added: { icon: '🆕', label: '新增', cls: 'text-success' },
  deleted: { icon: '❌', label: '删除', cls: 'text-danger' },
  modified: { icon: '✏️', label: '变更', cls: 'text-warning' },
}

function formatTime(s?: string): string {
  if (!s) return '-'
  const d = new Date(s)
  if (Number.isNaN(d.getTime())) return s
  return d.toLocaleString('zh-CN', { hour12: false })
}

export default function History() {
  const [batches, setBatches] = useState<Batch[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [triggerLoading, setTriggerLoading] = useState(false)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [changes, setChanges] = useState<Record<number, ChangeItem[]>>({})
  const [changesLoading, setChangesLoading] = useState<number | null>(null)
  const [changesError, setChangesError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await api.get<SyncHistoryResponse>('/api/sync/history')
        if (cancelled) return
        setBatches(res.batches ?? [])
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : '加载同步历史失败')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  async function handleTrigger() {
    setTriggerLoading(true)
    setError(null)
    try {
      await api.post('/api/sync/trigger')
      // reload batches
      setLoading(true)
      const res = await api.get<SyncHistoryResponse>('/api/sync/history')
      setBatches(res.batches ?? [])
    } catch (err) {
      setError(err instanceof ApiError ? err.message : '触发同步失败')
    } finally {
      setTriggerLoading(false)
      setLoading(false)
    }
  }

  async function toggleBatch(id: number) {
    if (expandedId === id) {
      setExpandedId(null)
      return
    }
    setExpandedId(id)
    setChangesError(null)
    if (changes[id]) return // already loaded
    setChangesLoading(id)
    try {
      const res = await api.get<ChangesResponse>(`/api/changes?batch_id=${id}`)
      setChanges((prev) => ({ ...prev, [id]: res.items ?? [] }))
    } catch (err) {
      setChangesError(err instanceof ApiError ? err.message : '加载批次变更失败')
    } finally {
      setChangesLoading(null)
    }
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">同步历史</h1>
        <button
          type="button"
          disabled={triggerLoading}
          onClick={handleTrigger}
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {triggerLoading ? '触发中…' : '手动触发同步'}
        </button>
      </div>

      {error && (
        <div className="mt-4 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {loading && <p className="mt-6 text-sm text-fg-muted">加载中…</p>}

      {!loading && !error && batches.length === 0 && (
        <div className="mt-6 rounded-md border border-border bg-canvas-subtle px-4 py-10 text-center text-sm text-fg-muted">
          暂无同步批次
        </div>
      )}

      {!loading && batches.length > 0 && (
        <div className="mt-4 overflow-hidden rounded-md border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-canvas-subtle text-left text-fg-muted">
                <th className="w-8 px-3 py-2"></th>
                <th className="px-3 py-2">时间</th>
                <th className="px-3 py-2 text-success">新增</th>
                <th className="px-3 py-2 text-danger">删除</th>
                <th className="px-3 py-2 text-warning">变更</th>
                <th className="px-3 py-2">状态</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => {
                const sm =
                  batchStatusMeta[b.status] ?? {
                    label: b.status,
                    cls: 'text-fg-muted border-border',
                  }
                const isOpen = expandedId === b.id
                const batchChanges = changes[b.id]
                return (
                  <Fragment key={b.id}>
                    <tr
                      onClick={() => toggleBatch(b.id)}
                      className="cursor-pointer border-b border-border-muted last:border-0 hover:bg-canvas-subtle"
                    >
                      <td className="px-3 py-2 text-fg-subtle">{isOpen ? '▾' : '▸'}</td>
                      <td className="px-3 py-2 text-fg-muted">
                        <div>{formatTime(b.started_at)}</div>
                        {b.finished_at && (
                          <div className="text-xs text-fg-subtle">
                            → {formatTime(b.finished_at)}
                          </div>
                        )}
                      </td>
                      <td className="px-3 py-2 text-success">{b.added_count ?? 0}</td>
                      <td className="px-3 py-2 text-danger">{b.deleted_count ?? 0}</td>
                      <td className="px-3 py-2 text-warning">{b.modified_count ?? 0}</td>
                      <td className="px-3 py-2">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}
                        >
                          {sm.label}
                        </span>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="border-b border-border-muted bg-canvas-inset">
                        <td colSpan={6} className="px-3 py-3">
                          {changesLoading === b.id && (
                            <p className="text-sm text-fg-muted">加载变更中…</p>
                          )}
                          {changesError && changesLoading !== b.id && (
                            <p className="text-sm text-danger">{changesError}</p>
                          )}
                          {!changesLoading &&
                            batchChanges &&
                            batchChanges.length === 0 && (
                              <p className="text-sm text-fg-subtle">该批次没有变更记录</p>
                            )}
                          {!changesLoading && batchChanges && batchChanges.length > 0 && (
                            <ul className="space-y-1.5">
                              {batchChanges.map((c) => {
                                const tm =
                                  typeMeta[c.change_type] ?? {
                                    icon: '•',
                                    label: c.change_type,
                                    cls: '',
                                  }
                                return (
                                  <li key={c.id} className="flex items-center gap-2 text-sm">
                                    <span className={tm.cls}>{tm.icon}</span>
                                    <span className="text-fg">{c.title || '(无标题)'}</span>
                                    {c.section && (
                                      <span className="text-xs text-fg-subtle">· {c.section}</span>
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
