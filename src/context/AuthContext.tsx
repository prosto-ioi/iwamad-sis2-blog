import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type AuthValue = { isAuth: boolean; login: () => void; logout: () => void }

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState(false)
  const value: AuthValue = { isAuth, login: () => setIsAuth(true), logout: () => setIsAuth(false) }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext)
  if (ctx === null) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
