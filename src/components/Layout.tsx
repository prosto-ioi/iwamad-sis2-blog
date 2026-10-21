import { Outlet } from 'react-router'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="site-footer">© 2026 My Dev Blog</footer>
    </>
  )
}

export default Layout
