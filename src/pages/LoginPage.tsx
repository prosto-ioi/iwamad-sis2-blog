import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Button from '../components/ui/Button'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/dashboard'

  const handleLogin = () => {
    login()
    navigate(from, { replace: true })
  }

  return (
    <section className="page">
      <h1>Log in</h1>
      <p>This page is protected. Log in to continue.</p>
      <Button onClick={handleLogin}>Log in</Button>
    </section>
  )
}

export default LoginPage
