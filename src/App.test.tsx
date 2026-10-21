import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { LikesProvider } from './context/LikesContext'
import { posts } from './data/posts'

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}

describe('posts', () => {
  it('shows one card per post in the array', () => {
    renderAt('/')
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(posts.length)
  })

  it('keeps a separate like count for each post', async () => {
    renderAt('/')
    const buttons = screen.getAllByRole('button', { name: /like/i })
    await userEvent.click(buttons[0])
    expect(buttons[0]).toHaveTextContent('♥ 1')
    expect(buttons[1]).toHaveTextContent('♡ 0')
  })
})

describe('404 pages', () => {
  it('shows the custom 404 page for an unknown path', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })

  it('shows a clear message for a post id that does not exist', () => {
    renderAt('/posts/999')
    expect(screen.getByRole('heading', { name: /post not found/i })).toBeInTheDocument()
  })
})

describe('route protection', () => {
  it('shows sign-in instead of the protected page when signed out', () => {
    renderAt('/dashboard')
    expect(screen.getByRole('heading', { name: /log in/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /^dashboard$/i })).not.toBeInTheDocument()
  })

  it('opens the protected page after signing in', async () => {
    renderAt('/dashboard')
    await userEvent.click(screen.getByRole('button', { name: /log in/i }))
    expect(screen.getByRole('heading', { name: /^dashboard$/i })).toBeInTheDocument()
  })
})
