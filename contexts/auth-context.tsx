"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { type User, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdTokenResult } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Verificar si el token está vencido
          const tokenResult = await getIdTokenResult(user)
          const expirationTime = new Date(tokenResult.expirationTime).getTime()
          const currentTime = new Date().getTime()

          if (currentTime >= expirationTime) {
            // Token vencido, cerrar sesión
            await signOut(auth)
            setUser(null)
            router.push("/login")
          } else {
            setUser(user)
          }
        } catch (error) {
          console.error("Error verificando token:", error)
          await signOut(auth)
          setUser(null)
          router.push("/login")
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      router.push("/login")
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    }
  }

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
