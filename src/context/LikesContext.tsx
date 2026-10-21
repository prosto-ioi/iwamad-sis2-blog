import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesValue = {
  likesFor: (postId: number) => number
  addLike: (postId: number) => void
}

const LikesContext = createContext<LikesValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({})

  const value: LikesValue = {
    likesFor: (postId) => likes[postId] ?? 0,
    addLike: (postId) =>
      setLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 0) + 1 })),
  }

  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes(): LikesValue {
  const ctx = useContext(LikesContext)
  if (ctx === null) throw new Error('useLikes must be used inside <LikesProvider>')
  return ctx
}
