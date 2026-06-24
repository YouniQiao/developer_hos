import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, setToken, ApiError } from '../api/client'

export default function Login() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const data = await api.post<{ token: string }>('/api/auth/login', {
        password,
      })
      setToken(data.token)
      navigate('/')
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
      } else {
        setError('登录失败，请检查网络或后端服务')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-canvas">
      <div className="w-80 rounded-lg border border-border bg-canvas-subtle p-8">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold text-fg">文档同步审批工作台</h1>
          <p className="mt-1 text-sm text-fg-muted">请输入访问密码登录</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="密码"
            autoFocus
            required
            disabled={loading}
            className="rounded-md border border-border bg-canvas-inset px-3 py-2 text-sm text-fg outline-none placeholder:text-fg-subtle focus:border-accent"
          />

          {error && (
            <p className="text-sm text-danger" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {loading ? '登录中…' : '登录'}
          </button>
        </form>
      </div>
    </div>
  )
}
