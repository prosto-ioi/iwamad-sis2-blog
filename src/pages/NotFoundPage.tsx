import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <section className="page not-found">
      <p className="not-found__code" aria-hidden="true">404</p>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
      <Link to="/">Back to Home</Link>
    </section>
  )
}

export default NotFoundPage
