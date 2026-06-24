import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: '仪表盘', icon: '▦', end: true },
  { to: '/changes', label: '变更列表', icon: '⎇', end: false },
  { to: '/execution', label: '执行进度', icon: '▶', end: false },
  { to: '/history', label: '同步历史', icon: '⟳', end: false },
  { to: '/settings', label: '设置', icon: '⚙', end: false },
]

export default function Layout() {
  return (
    <div className="flex h-screen bg-canvas text-fg">
      {/* Sidebar */}
      <aside className="flex w-60 flex-shrink-0 flex-col border-r border-border bg-canvas-subtle">
        {/* Logo */}
        <div className="flex h-14 items-center border-b border-border px-4">
          <span className="text-lg font-semibold text-fg">文档同步</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 p-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-fg-muted hover:bg-canvas hover:text-fg',
                ].join(' ')
              }
            >
              <span className="w-4 text-center text-xs">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3 text-xs text-fg-subtle">
          v0.1.0
        </div>
      </aside>

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
