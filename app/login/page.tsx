"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DarkLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (error: any) {
      setError("Credenciales inválidas")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <Card className="w-full max-w-md relative bg-black border-gray-800 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-gray-900 border border-gray-700">
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">Dashboard de Publicidad</CardTitle>
          <CardDescription className="text-gray-400">Accede a tu panel de gestión</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600 h-11"
                placeholder="admin@salvatto.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300 text-sm font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600 h-11"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-950 border border-red-800 rounded-md p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-black font-medium h-11 transition-colors"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </form>

          <div className="text-center">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
