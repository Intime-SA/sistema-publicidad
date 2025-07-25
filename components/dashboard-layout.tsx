"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Clock,
  Database,
  Download,
  Globe,
  Home,
  RefreshCw,
  Settings,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PageSelector } from "./filters/pages-selector"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [dateRange, setDateRange] = useState("7d")
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
        <div className="flex items-center gap-2 font-semibold">
          <Wallet className="h-6 w-6 text-primary" />
          <span>Casino LCP Analytics</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <PageSelector />
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Últimas 24 horas</SelectItem>
              <SelectItem value="7d">Últimos 7 días</SelectItem>
              <SelectItem value="30d">Últimos 30 días</SelectItem>
              <SelectItem value="90d">Últimos 90 días</SelectItem>
              <SelectItem value="1y">Último año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Actualizar datos</span>
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Descargar reporte</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Usuario" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex h-full flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Button
                  variant={pathname === "/home" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/home">
                    <Home className="h-4 w-4" />
                    Inicio
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/dashboard" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/dashboard">
                    <BarChart className="h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/users" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/users">
                    <Users className="h-4 w-4" />
                    Usuarios
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/geography" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/geography">
                    <Globe className="h-4 w-4" />
                    Geografía
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/devices" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/devices">
                    <Smartphone className="h-4 w-4" />
                    Dispositivos
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/time-on-site" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/time-on-site">
                    <Clock className="h-4 w-4" />
                    Tiempo en sitio
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/registrations" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/registrations">
                    <Database className="h-4 w-4" />
                    Registros
                  </Link>
                </Button>
                <Button
                  variant={pathname === "/settings" ? "secondary" : "ghost"}
                  className="flex items-center justify-start gap-2 px-3"
                  asChild
                >
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    Configuración
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
