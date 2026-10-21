import { NavLink } from 'react-router'
import { useAuth } from '../context/AuthContext'
import Button from './ui/Button'

function Header() {
  const { isAuth, logout } = useAuth()

  return (
    <header className="site-header">
      <p className="site-title">My Dev Blog</p>
      <nav aria-label="Main">
        <ul className="nav">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          {isAuth && (
            <li><Button variant="secondary" onClick={logout}>Log out</Button></li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
