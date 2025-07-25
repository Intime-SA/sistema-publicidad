import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Clock, Database, Globe, Smartphone, Users, Wallet } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Inicio | Casino LCP",
  description: "Panel de control para métricas de Lead Capture Page de Casino",
}

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Bienvenido al Panel de Control</h1>
          <p className="text-muted-foreground">
            Monitorea y analiza el rendimiento de tu Lead Capture Page para casino online
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Resumen Rápido</CardTitle>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="mt-2 grid gap-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Visitantes hoy</div>
                  <div>487</div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Conversiones hoy</div>
                  <div>124</div>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="font-medium">Tasa de conversión</div>
                  <div>25.4%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Registros en casino</div>
                  <div>78</div>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <Link href="/dashboard">
                  Ver dashboard completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Accesos Rápidos</CardTitle>
              <Wallet className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="mt-2 grid gap-2">
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/users">
                    <Users className="mr-2 h-4 w-4" />
                    Gestionar usuarios
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/geography">
                    <Globe className="mr-2 h-4 w-4" />
                    Ver mapa de calor
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/devices">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Análisis por dispositivo
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/time-on-site">
                    <Clock className="mr-2 h-4 w-4" />
                    Tiempo en plataforma
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/registrations">
                    <Database className="mr-2 h-4 w-4" />
                    Registros y conversiones
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">Actividad Reciente</CardTitle>
              <Clock className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="mt-2 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Nuevo registro</p>
                    <p className="text-sm text-muted-foreground">Usuario desde Buenos Aires completó registro</p>
                    <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Wallet className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Conversión a casino</p>
                    <p className="text-sm text-muted-foreground">Usuario registrado en casino principal</p>
                    <p className="text-xs text-muted-foreground">Hace 12 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Nueva ubicación</p>
                    <p className="text-sm text-muted-foreground">Primer visitante desde Neuquén</p>
                    <p className="text-xs text-muted-foreground">Hace 28 minutos</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Ver toda la actividad
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
