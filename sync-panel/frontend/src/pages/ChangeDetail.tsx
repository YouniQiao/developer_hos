import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { api, ApiError } from '../api/client'

type ChangeType = 'added' | 'deleted' | 'modified'
type ChangeStatus = 'pending' | 'approved' | 'rejected' | 'ignored' | 'done'

interface ChangeDetail {
  id: number
  title: string
  path: string
  section: string
  breadcrumb?: string[] | string
  change_type: ChangeType
  status: ChangeStatus
  object_id?: string
}

interface DiffData {
  old_content: string
  new_content: string
  diff_text: string
}

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

function ContentPreview({
  changeType,
  diff,
}: {
  changeType: ChangeType
  diff: DiffData | null
}) {
  const oldText = diff?.old_content ?? ''
  const newText = diff?.new_content ?? ''
  const diffText = diff?.diff_text ?? ''

  // No content at all
  if (!oldText && !newText && !diffText) {
    return (
      <div className="rounded-md border border-border bg-canvas-subtle px-4 py-10 text-center text-sm text-fg-muted">
        暂无可预览的内容
      </div>
    )
  }

  // Modified: side-by-side + unified diff from backend
  if (changeType === 'modified') {
    const diffLines = diffText ? diffText.split('\n') : []
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-danger/40">
            <div className="border-b border-danger/40 bg-danger/10 px-3 py-1.5 text-xs font-medium text-danger">
              旧内容（本地 Markdown）
            </div>
            <pre className="max-h-[420px] overflow-auto bg-canvas-inset p-3 text-xs leading-relaxed text-fg-muted">
              {oldText || '(空)'}
            </pre>
          </div>
          <div className="overflow-hidden rounded-md border border-success/40">
            <div className="border-b border-success/40 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              新内容（上游 Markdown）
            </div>
            <pre className="max-h-[420px] overflow-auto bg-canvas-inset p-3 text-xs leading-relaxed text-fg">
              {newText || '(空)'}
            </pre>
          </div>
        </div>

        {diffLines.length > 0 && (
          <div className="overflow-hidden rounded-md border border-border">
            <div className="border-b border-border bg-canvas-subtle px-3 py-1.5 text-xs font-medium text-fg-muted">
              差异（<span className="text-danger">- 删除</span> / <span className="text-success">+ 新增</span>）
            </div>
            <pre className="max-h-[520px] overflow-auto bg-canvas-inset text-xs leading-relaxed">
              {diffLines.map((l, idx) => {
                const cls = l.startsWith('+') && !l.startsWith('+++')
                  ? 'bg-success/10 text-success'
                  : l.startsWith('-') && !l.startsWith('---')
                    ? 'bg-danger/10 text-danger'
                    : l.startsWith('@@')
                      ? 'text-accent'
                      : 'text-fg-muted'
                return (
                  <div key={idx} className={cls}>
                    <span className="whitespace-pre-wrap">{l || ' '}</span>
                  </div>
                )
              })}
            </pre>
          </div>
        )}
      </div>
    )
  }

  // Added: show new content
  if (changeType === 'added') {
    return (
      <div className="overflow-hidden rounded-md border border-success/40">
        <div className="border-b border-success/40 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
          新文档内容
        </div>
        <pre className="max-h-[600px] overflow-auto bg-canvas-inset p-3 text-xs leading-relaxed text-fg">
          {newText || '(空)'}
        </pre>
      </div>
    )
  }

  // Deleted: show local file content to be removed
  return (
    <div className="overflow-hidden rounded-md border border-danger/40">
      <div className="border-b border-danger/40 bg-danger/10 px-3 py-1.5 text-xs font-medium text-danger">
        即将删除的本地文件内容
      </div>
      <pre className="max-h-[600px] overflow-auto bg-canvas-inset p-3 text-xs leading-relaxed text-fg-muted">
        {oldText || '(空)'}
      </pre>
    </div>
  )
}

export default function ChangeDetail() {
  const { id } = useParams<{ id: string }>()
  const [detail, setDetail] = useState<ChangeDetail | null>(null)
  const [diff, setDiff] = useState<DiffData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState<'approve' | 'reject' | 'ignore' | null>(null)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const [d, df] = await Promise.all([
          api.get<ChangeDetail>(`/api/changes/${id}`),
          api.get<DiffData>(`/api/changes/${id}/diff`).catch(() => null),
        ])
        if (cancelled) return
        setDetail(d)
        setDiff(df)
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : '加载详情失败')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [id])

  async function reloadDetail() {
    if (!id) return
    try {
      const d = await api.get<ChangeDetail>(`/api/changes/${id}`)
      setDetail(d)
    } catch {
      // ignore refetch errors
    }
  }

  async function handleAction(action: 'approve' | 'reject' | 'ignore') {
    if (!id) return
    setActionLoading(action)
    setError(null)
    try {
      await api.post(`/api/changes/${id}/${action}`)
      await reloadDetail()
    } catch (err) {
      const labels: Record<string, string> = { approve: '批准', reject: '拒绝', ignore: '忽略' }
      setError(err instanceof ApiError ? err.message : `${labels[action]}失败`)
    } finally {
      setActionLoading(null)
    }
  }

  const tm = detail ? typeMeta[detail.change_type] : null
  const sm = detail ? statusMeta[detail.status] : null
  const isPending = detail?.status === 'pending'

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center gap-3">
        <Link to="/changes" className="text-sm text-fg-muted hover:text-accent">
          ← 返回列表
        </Link>
      </div>

      {loading && <p className="mt-6 text-sm text-fg-muted">加载中…</p>}

      {error && (
        <div className="mt-6 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {!loading && !error && detail && tm && sm && (
        <div className="mt-4 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xl ${tm.cls}`}>{tm.icon}</span>
              <h1 className="text-xl font-semibold">{detail.title || '(无标题)'}</h1>
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}
              >
                {sm.label}
              </span>
            </div>
          </div>

          {/* Basic info */}
          <div className="rounded-lg border border-border bg-canvas-subtle p-5">
            <h2 className="text-sm font-medium text-fg">基本信息</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-fg-subtle">路径</dt>
                <dd className="mt-0.5 break-all font-mono text-xs text-fg">{detail.path || '-'}</dd>
              </div>
              <div>
                <dt className="text-fg-subtle">板块</dt>
                <dd className="mt-0.5 text-fg">{detail.section || '-'}</dd>
              </div>
              <div>
                <dt className="text-fg-subtle">面包屑</dt>
                <dd className="mt-0.5 text-fg">{renderBreadcrumb(detail.breadcrumb) || '-'}</dd>
              </div>
              <div>
                <dt className="text-fg-subtle">Object ID</dt>
                <dd className="mt-0.5 break-all font-mono text-xs text-fg">
                  {detail.object_id || '-'}
                </dd>
              </div>
              <div>
                <dt className="text-fg-subtle">类型</dt>
                <dd className={`mt-0.5 ${tm.cls}`}>
                  {tm.icon} {tm.label}
                </dd>
              </div>
              <div>
                <dt className="text-fg-subtle">状态</dt>
                <dd className="mt-0.5">
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${sm.cls}`}>
                    {sm.label}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Content preview */}
          <div>
            <h2 className="mb-3 text-sm font-medium text-fg">内容预览</h2>
            <ContentPreview changeType={detail.change_type} diff={diff} />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 border-t border-border pt-4">
            <button
              type="button"
              disabled={!isPending || actionLoading !== null}
              onClick={() => handleAction('approve')}
              className="rounded-md bg-success px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-success/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {actionLoading === 'approve' ? '处理中…' : '批准'}
            </button>
            <button
              type="button"
              disabled={!isPending || actionLoading !== null}
              onClick={() => handleAction('reject')}
              className="rounded-md bg-danger px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-danger/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {actionLoading === 'reject' ? '处理中…' : '拒绝'}
            </button>
            <button
              type="button"
              disabled={!isPending || actionLoading !== null}
              onClick={() => handleAction('ignore')}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-fg-subtle transition-colors hover:bg-canvas-subtle hover:text-fg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {actionLoading === 'ignore' ? '处理中…' : '忽略'}
            </button>
            <Link
              to="/changes"
              className="rounded-md border border-border px-4 py-2 text-sm text-fg transition-colors hover:bg-canvas-subtle"
            >
              返回列表
            </Link>
            {!isPending && (
              <span className="text-xs text-fg-subtle">该变更已处理，无法再次操作</span>
            )}
          </div>
        </div>
      )}

      {!loading && !error && !detail && (
        <p className="mt-6 text-sm text-fg-muted">未找到该变更</p>
      )}
    </div>
  )
}
