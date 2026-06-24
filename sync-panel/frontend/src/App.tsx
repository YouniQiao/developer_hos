import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Changes from './pages/Changes'
import ChangeDetail from './pages/ChangeDetail'
import Execution from './pages/Execution'
import History from './pages/History'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/changes" element={<Changes />} />
        <Route path="/changes/:id" element={<ChangeDetail />} />
        <Route path="/execution" element={<Execution />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
