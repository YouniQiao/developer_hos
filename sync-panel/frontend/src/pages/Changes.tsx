import { useEffect, useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, ApiError } from '../api/client'

type ChangeType = 'added' | 'deleted' | 'modified'
type ChangeStatus = 'pending' | 'approved' | 'rejected' | 'ignored' | 'done'

interface ChangeItem {
  id: number
  title: string
  path: string
  section: string
  breadcrumb?: string[] | string
  change_type: ChangeType
  status: ChangeStatus
  object_id?: string
}

interface ChangesResponse {
  items: ChangeItem[]
  total: number
  page: number
}

const PAGE_SIZE = 20

const typeOptions: { value: string; label: string }[] = [
  { value: '', label: '全部类型' },
  { value: 'added', label: '新增' },
  { value: 'deleted', label: '删除' },
  { value: 'modified', label: '变更' },
]

const statusOptions: { value: string; label: string }[] = [
  { value: '', label: '全部状态' },
  { value: 'pending', label: '待处理' },
  { value: 'approved', label: '已批准' },
  { value: 'rejected', label: '已拒绝' },
  { value: 'ignored', label: '已忽略' },
  { value: 'done', label: '已完成' },
]

const typeMeta: Record<ChangeType, { icon: string; label: string; cls: string }> = {
  added: { icon: '🆕', label: '新增', cls: 'text-success' },
  deleted: { icon: '❌', label: '删除', cls: 'text-danger' },
  modified: { icon: '✏️', label: '变更', cls: 'text-warning' },
}

const statusMeta: Record<ChangeStatus, { label: string; cls: string }> = {
  pending: { label: '待处理', cls: 'text-warning border-warning/60' },
  approved: { label: '已批准', cls: 'text-success border-success/60' },
  rejected: { label: '已拒绝', cls: 'text-danger border-danger/60' },
  ignored: { label: '已忽略', cls: 'text-fg-subtle border-border' },
  done: { label: '已完成', cls: 'text-fg-muted border-border' },
}

function renderBreadcrumb(b?: string[] | string): string {
  if (!b) return ''
  if (Array.isArray(b)) return b.join(' / ')
  return b
}

export default function Changes() {
  const [searchParams, setSearchParams] = useSearchParams()

  const type = searchParams.get('type') || ''
  const section = searchParams.get('section') || ''
  const status = searchParams.get('status') || ''
  const search = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1', 10) || 1

  const [searchInput, setSearchInput] = useState(search)
  const [items, setItems] = useState<ChangeItem[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [actionLoading, setActionLoading] = useState<number | null>(null)
  const [batchLoading, setBatchLoading] = useState<'approve' | 'reject' | 'ignore' | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const [sectionOptions, setSectionOptions] = useState<{ value: string; label: string }[]>([{ value: '', label: '全部板块' }])

  // 加载板块选项
  useEffect(() => {
    let cancelled = false
    async function loadSections() {
      try {
        const res = await api.get<{ value: string; count: number }[]>('/api/changes/sections')
        if (cancelled) return
        const opts = [{ value: '', label: '全部板块' }, ...res.map((s) => ({ value: s.value, label: `${s.value} (${s.count})` }))]
        setSectionOptions(opts)
      } catch {
        // 静默失败，保留默认选项
      }
    }
    loadSections()
    return () => { cancelled = true }
  }, [refreshKey])

  // keep input synced when URL search changes externally
  useEffect(() => {
    setSearchInput(search)
  }, [search])

  // clear selection when filters/page change
  useEffect(() => {
    setSelected(new Set())
  }, [type, section, status, search, page, refreshKey])

  // debounce search input → URL
  useEffect(() => {
    const t = setTimeout(() => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          if (searchInput) next.set('search', searchInput)
          else next.delete('search')
          if (searchInput !== search) next.delete('page')
          return next
        },
        { replace: true },
      )
    }, 400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  // fetch list
  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams()
        if (type) params.set('type', type)
        if (section) params.set('section', section)
        if (status) params.set('status', status)
        if (search) params.set('search', search)
        params.set('page', String(page))
        params.set('page_size', String(PAGE_SIZE))
        const res = await api.get<ChangesResponse>(`/api/changes?${params.toString()}`)
        if (cancelled) return
        setItems(res.items ?? [])
        setTotal(res.total ?? 0)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : '加载变更列表失败')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [type, section, status, search, page, refreshKey])

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))

  const reload = () => setRefreshKey((k) => k + 1)

  function setFilter(key: string, value: string) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        if (key !== 'page') next.delete('page')
        return next
      },
      { replace: false },
    )
  }

  function toggleSelect(id: number) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const allChecked = items.length > 0 && items.every((i) => selected.has(i.id))
  const someChecked = items.some((i) => selected.has(i.id))

  function toggleAll() {
    setSelected((prev) => {
      if (items.length > 0 && items.every((i) => prev.has(i.id))) return new Set()
      return new Set(items.map((i) => i.id))
    })
  }

  async function handleAction(id: number, action: 'approve' | 'reject' | 'ignore') {
    setActionLoading(id)
    setError(null)
    try {
      await api.post(`/api/changes/${id}/${action}`)
      reload()
    } catch (err) {
      const labels: Record<string, string> = { approve: '批准', reject: '拒绝', ignore: '忽略' }
      setError(err instanceof ApiError ? err.message : `${labels[action]}失败`)
    } finally {
      setActionLoading(null)
    }
  }

  async function handleBatch(action: 'approve' | 'reject' | 'ignore') {
    const ids = Array.from(selected)
    if (ids.length === 0) return
    setBatchLoading(action)
    setError(null)
    try {
      await api.post(`/api/changes/batch/${action}`, { ids })
      setSelected(new Set())
      reload()
    } catch (err) {
      const labels: Record<string, string> = { approve: '批准', reject: '拒绝', ignore: '忽略' }
      setError(
        err instanceof ApiError
          ? err.message
          : `批量${labels[action]}失败`,
      )
    } finally {
      setBatchLoading(null)
    }
  }

  const selectedCount = selected.size
  const selectCls =
    'rounded-md border border-border bg-canvas-inset px-2 py-1 text-sm text-fg outline-none focus:border-accent'

  const emptyHint = useMemo(() => {
    if (loading) return null
    if (error) return null
    if (items.length === 0) return '没有符合条件的变更记录'
    return null
  }, [loading, error, items.length])

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">变更列表</h1>
        <span className="text-sm text-fg-muted">共 {total} 条</span>
      </div>

      {/* Filter bar */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <select
          value={type}
          onChange={(e) => setFilter('type', e.target.value)}
          className={selectCls}
        >
          {typeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          value={section}
          onChange={(e) => setFilter('section', e.target.value)}
          className={selectCls}
        >
          {sectionOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setFilter('status', e.target.value)}
          className={selectCls}
        >
          {statusOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="搜索标题 / 路径"
          className={`${selectCls} w-56`}
        />

        {(type || section || status || search) && (
          <button
            type="button"
            onClick={() => setSearchParams({}, { replace: false })}
            className="text-sm text-fg-muted hover:text-fg"
          >
            清除筛选
          </button>
        )}
      </div>

      {error && (
        <div className="mt-4 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {/* Batch action bar */}
      {selectedCount > 0 && (
        <div className="mt-4 flex items-center gap-3 rounded-md border border-border bg-canvas-subtle px-4 py-2 text-sm">
          <span className="text-fg">已选中 {selectedCount} 项</span>
          <button
            type="button"
            disabled={batchLoading !== null}
            onClick={() => handleBatch('approve')}
            className="rounded-md bg-success px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-success/90 disabled:opacity-60"
          >
            {batchLoading === 'approve' ? '处理中…' : '批量批准'}
          </button>
          <button
            type="button"
            disabled={batchLoading !== null}
            onClick={() => handleBatch('reject')}
            className="rounded-md bg-danger px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-danger/90 disabled:opacity-60"
          >
            {batchLoading === 'reject' ? '处理中…' : '批量拒绝'}
          </button>
          <button
            type="button"
            disabled={batchLoading !== null}
            onClick={() => handleBatch('ignore')}
            className="rounded-md border border-border px-3 py-1 text-xs font-medium text-fg-subtle transition-colors hover:bg-canvas-subtle hover:text-fg disabled:opacity-60"
          >
            {batchLoading === 'ignore' ? '处理中…' : '批量忽略'}
          </button>
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            className="ml-auto text-fg-muted hover:text-fg"
          >
            取消选择
          </button>
        </div>
      )}

      {/* Table */}
      <div className="mt-4 overflow-hidden rounded-md border border-border">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-canvas-subtle text-left text-fg-muted">
              <th className="w-10 px-3 py-2">
                <input
                  type="checkbox"
                  checked={allChecked}
                  ref={(el) => {
                    if (el) el.indeterminate = !allChecked && someChecked
                  }}
                  onChange={toggleAll}
                  className="accent-accent"
                />
              </th>
              <th className="w-16 px-3 py-2">类型</th>
              <th className="px-3 py-2">标题</th>
              <th className="px-3 py-2">板块</th>
              <th className="px-3 py-2">面包屑</th>
              <th className="px-3 py-2">状态</th>
              <th className="px-3 py-2 text-right">操作</th>
            </tr>
          </thead>
          <tbody>
            {loading &&
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={`s-${i}`} className="border-b border-border-muted">
                  <td className="px-3 py-3" colSpan={7}>
                    <div className="h-4 animate-pulse rounded bg-canvas-subtle" />
                  </td>
                </tr>
              ))}

            {!loading &&
              items.map((item) => {
                const tm = typeMeta[item.change_type] ?? { icon: '•', label: item.change_type, cls: '' }
                const sm = statusMeta[item.status] ?? { label: item.status, cls: 'text-fg-muted border-border' }
                const isPending = item.status === 'pending'
                return (
                  <tr
                    key={item.id}
                    className="border-b border-border-muted last:border-0 hover:bg-canvas-subtle"
                  >
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={selected.has(item.id)}
                        onChange={() => toggleSelect(item.id)}
                        className="accent-accent"
                      />
                    </td>
                    <td className="px-3 py-2">
                      <span title={tm.label} className={`text-base ${tm.cls}`}>
                        {tm.icon}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <Link
                        to={`/changes/${item.id}`}
                        className="text-fg hover:text-accent hover:underline"
                      >
                        {item.title || '(无标题)'}
                      </Link>
                      <div className="truncate text-xs text-fg-subtle" title={item.path}>
                        {item.path}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-fg-muted">{item.section || '-'}</td>
                    <td className="max-w-xs truncate px-3 py-2 text-fg-muted" title={renderBreadcrumb(item.breadcrumb)}>
                      {renderBreadcrumb(item.breadcrumb) || '-'}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}
                      >
                        {sm.label}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center justify-end gap-2">
                        {isPending ? (
                          <>
                            <button
                              type="button"
                              disabled={actionLoading === item.id}
                              onClick={() => handleAction(item.id, 'approve')}
                              className="rounded-md bg-success/90 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-success disabled:opacity-60"
                            >
                              批准
                            </button>
                            <button
                              type="button"
                              disabled={actionLoading === item.id}
                              onClick={() => handleAction(item.id, 'reject')}
                              className="rounded-md bg-danger/90 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-danger disabled:opacity-60"
                            >
                              拒绝
                            </button>
                            <button
                              type="button"
                              disabled={actionLoading === item.id}
                              onClick={() => handleAction(item.id, 'ignore')}
                              className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-fg-subtle transition-colors hover:bg-canvas-subtle hover:text-fg disabled:opacity-60"
                            >
                              忽略
                            </button>
                          </>
                        ) : (
                          <Link
                            to={`/changes/${item.id}`}
                            className="text-xs text-fg-muted hover:text-accent"
                          >
                            查看
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>

        {emptyHint && (
          <div className="bg-canvas-subtle px-4 py-10 text-center text-sm text-fg-muted">
            {emptyHint}
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && total > 0 && (
        <div className="mt-4 flex items-center justify-between text-sm text-fg-muted">
          <span>
            第 {page} / {totalPages} 页 · 共 {total} 条
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setFilter('page', String(page - 1))}
              className="rounded-md border border-border px-3 py-1 text-fg hover:bg-canvas-subtle disabled:cursor-not-allowed disabled:opacity-40"
            >
              上一页
            </button>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setFilter('page', String(page + 1))}
              className="rounded-md border border-border px-3 py-1 text-fg hover:bg-canvas-subtle disabled:cursor-not-allowed disabled:opacity-40"
            >
              下一页
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
