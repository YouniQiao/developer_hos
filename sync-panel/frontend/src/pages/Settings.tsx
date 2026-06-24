import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { api, ApiError } from '../api/client'

type RuleType = 'path_prefix' | 'object_id' | 'title_contains'

interface IgnoreRule {
  id: number
  rule_type: RuleType
  rule_value: string
  reason: string
  created_at?: string
}

interface IgnoreRulesResponse {
  items: IgnoreRule[]
}

const ruleTypeMeta: Record<RuleType, { label: string; hint: string }> = {
  path_prefix: { label: '路径前缀', hint: '匹配以该前缀开头的文档路径' },
  object_id: { label: 'Object ID', hint: '精确匹配指定 Object ID' },
  title_contains: { label: '标题包含', hint: '标题包含该关键词的文档' },
}

const ruleTypeOptions: { value: RuleType; label: string }[] = [
  { value: 'path_prefix', label: '路径前缀 (path_prefix)' },
  { value: 'object_id', label: 'Object ID (object_id)' },
  { value: 'title_contains', label: '标题包含 (title_contains)' },
]

function formatTime(s?: string): string {
  if (!s) return '-'
  const d = new Date(s)
  if (Number.isNaN(d.getTime())) return s
  return d.toLocaleString('zh-CN', { hour12: false })
}

export default function Settings() {
  const [rules, setRules] = useState<IgnoreRule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [formType, setFormType] = useState<RuleType>('path_prefix')
  const [formValue, setFormValue] = useState('')
  const [formReason, setFormReason] = useState('')
  const [addLoading, setAddLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await api.get<IgnoreRulesResponse>('/api/ignore-rules')
        if (cancelled) return
        setRules(res.items ?? [])
      } catch (err) {
        if (cancelled) return
        setError(err instanceof ApiError ? err.message : '加载忽略规则失败')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  async function reload() {
    setLoading(true)
    setError(null)
    try {
      const res = await api.get<IgnoreRulesResponse>('/api/ignore-rules')
      setRules(res.items ?? [])
    } catch (err) {
      setError(err instanceof ApiError ? err.message : '加载忽略规则失败')
    } finally {
      setLoading(false)
    }
  }

  async function handleAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formValue.trim()) {
      setError('请填写规则值')
      return
    }
    setAddLoading(true)
    setError(null)
    try {
      await api.post('/api/ignore-rules', {
        rule_type: formType,
        rule_value: formValue.trim(),
        reason: formReason.trim(),
      })
      setFormValue('')
      setFormReason('')
      await reload()
    } catch (err) {
      setError(err instanceof ApiError ? err.message : '添加规则失败')
    } finally {
      setAddLoading(false)
    }
  }

  async function handleDelete(id: number) {
    setDeleteLoading(id)
    setError(null)
    try {
      await api.delete(`/api/ignore-rules/${id}`)
      await reload()
    } catch (err) {
      setError(err instanceof ApiError ? err.message : '删除规则失败')
    } finally {
      setDeleteLoading(null)
    }
  }

  const inputCls =
    'rounded-md border border-border bg-canvas-inset px-3 py-2 text-sm text-fg outline-none focus:border-accent'

  return (
    <div className="flex-1 overflow-auto p-6">
      <h1 className="text-xl font-semibold">设置</h1>

      {error && (
        <div className="mt-4 rounded-md border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger">
          {error}
        </div>
      )}

      {/* Ignore rules */}
      <section className="mt-6">
        <h2 className="text-sm font-medium text-fg">忽略规则</h2>
        <p className="mt-1 text-xs text-fg-muted">
          匹配到忽略规则的文档变更在同步时会被自动跳过，不进入审批列表。
        </p>

        {/* Add form */}
        <form
          onSubmit={handleAdd}
          className="mt-4 flex flex-wrap items-end gap-3 rounded-md border border-border bg-canvas-subtle p-4"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs text-fg-subtle">类型</label>
            <select
              value={formType}
              onChange={(e) => setFormType(e.target.value as RuleType)}
              className={inputCls}
            >
              {ruleTypeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs text-fg-subtle">值</label>
            <input
              type="text"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder={ruleTypeMeta[formType].hint}
              className={`${inputCls} min-w-[200px]`}
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label className="text-xs text-fg-subtle">原因（可选）</label>
            <input
              type="text"
              value={formReason}
              onChange={(e) => setFormReason(e.target.value)}
              placeholder="说明为什么忽略该文档"
              className={`${inputCls} min-w-[200px]`}
            />
          </div>
          <button
            type="submit"
            disabled={addLoading}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {addLoading ? '添加中…' : '添加规则'}
          </button>
        </form>

        {/* Rules table */}
        {loading && <p className="mt-4 text-sm text-fg-muted">加载中…</p>}

        {!loading && rules.length === 0 && (
          <div className="mt-4 rounded-md border border-border bg-canvas-subtle px-4 py-8 text-center text-sm text-fg-muted">
            暂无忽略规则
          </div>
        )}

        {!loading && rules.length > 0 && (
          <div className="mt-4 overflow-hidden rounded-md border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-canvas-subtle text-left text-fg-muted">
                  <th className="w-40 px-3 py-2">类型</th>
                  <th className="px-3 py-2">值</th>
                  <th className="px-3 py-2">原因</th>
                  <th className="w-40 px-3 py-2">创建时间</th>
                  <th className="w-20 px-3 py-2 text-right">操作</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((r) => {
                  const tm =
                    ruleTypeMeta[r.rule_type] ?? { label: r.rule_type, hint: '' }
                  return (
                    <tr
                      key={r.id}
                      className="border-b border-border-muted last:border-0 hover:bg-canvas-subtle"
                    >
                      <td className="px-3 py-2 text-fg">{tm.label}</td>
                      <td className="break-all px-3 py-2 font-mono text-xs text-fg">
                        {r.rule_value}
                      </td>
                      <td className="px-3 py-2 text-fg-muted">{r.reason || '-'}</td>
                      <td className="px-3 py-2 text-fg-muted">{formatTime(r.created_at)}</td>
                      <td className="px-3 py-2 text-right">
                        <button
                          type="button"
                          disabled={deleteLoading === r.id}
                          onClick={() => handleDelete(r.id)}
                          className="rounded-md border border-danger/60 px-2.5 py-1 text-xs font-medium text-danger transition-colors hover:bg-danger/10 disabled:opacity-60"
                        >
                          {deleteLoading === r.id ? '删除中…' : '删除'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Account / security info */}
      <section className="mt-8">
        <h2 className="text-sm font-medium text-fg">账户与安全</h2>
        <div className="mt-3 rounded-md border border-border bg-canvas-subtle p-4 text-sm text-fg-muted">
          <p>登录密码通过服务端环境变量配置，前端不提供修改入口。</p>
          <p className="mt-2 text-xs text-fg-subtle">
            如需修改密码，请联系管理员更新环境变量后重启服务。
          </p>
        </div>
      </section>
    </div>
  )
}
