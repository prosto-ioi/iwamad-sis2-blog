import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute() {
  const { isAuth } = useAuth()
  const location = useLocation()
  if (!isAuth) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return <Outlet />
}

export default ProtectedRoute
