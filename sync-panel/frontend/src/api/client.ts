const TOKEN_KEY = 'sync-panel-token'

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token)
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

interface RequestOptions {
  method?: string
  body?: unknown
  headers?: Record<string, string>
}

async function request<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const token = getToken()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(url, {
    method: options.method ?? 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  if (res.status === 401) {
    clearToken()
    window.location.href = '/login'
    throw new ApiError(401, '未授权，请重新登录')
  }

  if (!res.ok) {
    let message = `请求失败 (${res.status})`
    try {
      const data = await res.json()
      if (data?.message) message = data.message
      else if (data?.error) message = data.error
    } catch {
      // response has no JSON body
    }
    throw new ApiError(res.status, message)
  }

  // 204 No Content
  if (res.status === 204) {
    return undefined as T
  }

  return (await res.json()) as T
}

export const api = {
  get: <T>(url: string, headers?: Record<string, string>) =>
    request<T>(url, { method: 'GET', headers }),
  post: <T>(url: string, body?: unknown, headers?: Record<string, string>) =>
    request<T>(url, { method: 'POST', body, headers }),
  put: <T>(url: string, body?: unknown, headers?: Record<string, string>) =>
    request<T>(url, { method: 'PUT', body, headers }),
  patch: <T>(url: string, body?: unknown, headers?: Record<string, string>) =>
    request<T>(url, { method: 'PATCH', body, headers }),
  delete: <T>(url: string, headers?: Record<string, string>) =>
    request<T>(url, { method: 'DELETE', headers }),
}
