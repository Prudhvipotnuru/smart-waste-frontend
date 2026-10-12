import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

function decodeToken(token) {
  const payload = JSON.parse(atob(token.split('.')[1]))
  return {
    token,
    userId: payload.userId,
    name: payload.userName,
    role: payload.roles[0].authority.replace('ROLE_', ''), // 'ADMIN' | 'COLLECTOR'
  }
}

export function AuthProvider({ children }) {
  // initialise from localStorage so a refresh doesn't log you out
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token')
    return token ? decodeToken(token) : null
  })

  function login(token) {
    localStorage.setItem('token', token)
    const decoded = decodeToken(token)
    setUser(decoded)
    return decoded
  }

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
