import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

describe('LikeButton', () => {
  it('shows the new like count after a click', async () => {
    render(
      <LikesProvider>
        <LikeButton postId={1} />
      </LikesProvider>,
    )
    const button = screen.getByRole('button', { name: /like/i })
    expect(button).toHaveTextContent('♡ 0')

    await userEvent.click(button)

    expect(button).toHaveTextContent('♥ 1')
  })
})
