"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Clock,
  Database,
  Download,
  Globe,
  Home,
  Laptop,
  PieChart,
  RefreshCw,
  Settings,
  Smartphone,
  Tablet,
  Users,
  Wallet,
  MessageSquare,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import VisitorsChart from "./charts/visitors-chart"
import DeviceChart from "./charts/device-chart"
import ConversionChart from "./charts/conversion-chart"
import TimeOnSiteChart from "./charts/time-on-site-chart"
import LocationMap from "./charts/location-map"
import HourlyVisitorsChart from "./charts/hourly-visitors-chart"
import { KpisGenerales } from "./kpis-generales"
import Link from "next/link"
import Header from "./header"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function DashboardMetrics() {

  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-muted/40 hidden md:block">
          <div className="flex h-full flex-col gap-2">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/home">
                    <Home className="h-4 w-4" />
                    Inicio
                  </Link>
                </Button>
                <Button variant="secondary" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/dashboard">
                    <BarChart className="h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/users">
                    <Users className="h-4 w-4" />
                    Usuarios
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/geography">
                    <Globe className="h-4 w-4" />
                    Geografía
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/devices">
                    <Smartphone className="h-4 w-4" />
                    Dispositivos
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/time-on-site">
                    <Clock className="h-4 w-4" />
                    Tiempo en sitio
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
                  <Link href="/registrations">
                    <Database className="h-4 w-4" />
                    Registros
                  </Link>
                </Button>
                <Button variant="ghost" className="flex items-center justify-start gap-2 px-3" asChild>
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
          <div className="container mx-auto p-4 md:p-6">
            {/* KPIs Generales con datos reales */}
            <KpisGenerales />

            <Tabs defaultValue="overview" className="mt-6">
              <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-6">
                <TabsTrigger value="overview">General</TabsTrigger>
                <TabsTrigger value="visitors">Visitantes</TabsTrigger>
                <TabsTrigger value="devices">Dispositivos</TabsTrigger>
                <TabsTrigger value="location">Ubicación</TabsTrigger>
                <TabsTrigger value="conversion">Conversión</TabsTrigger>
                <TabsTrigger value="users">Usuarios</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Visitantes por Día</CardTitle>
                      <CardDescription>Número total de visitantes únicos por día</CardDescription>
                    </CardHeader>
                    <CardContent className="px-2">
                      <div className="h-[300px]">
                        <VisitorsChart />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Distribución por Dispositivo</CardTitle>
                      <CardDescription>Porcentaje de visitantes por tipo de dispositivo</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <DeviceChart />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Tiempo en Sitio</CardTitle>
                      <CardDescription>Tiempo promedio que los usuarios pasan en la plataforma</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <TimeOnSiteChart />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Tasa de Conversión</CardTitle>
                      <CardDescription>Porcentaje de visitantes que completan el registro</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ConversionChart />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="visitors" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Visitantes por Hora</CardTitle>
                      <CardDescription>Distribución de visitantes a lo largo del día</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <HourlyVisitorsChart />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Visitantes Únicos</CardTitle>
                      <CardDescription>Estadísticas de visitantes únicos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Nuevos</span>
                          <span className="text-sm text-muted-foreground">8,234</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Recurrentes</span>
                          <span className="text-sm text-muted-foreground">4,314</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Total</span>
                          <span className="text-sm font-bold">12,548</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="devices" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Dispositivos</CardTitle>
                      <CardDescription>Distribución de visitantes por tipo de dispositivo</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <DeviceChart />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Detalles por Dispositivo</CardTitle>
                      <CardDescription>Estadísticas detalladas por dispositivo</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-blue-500" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Móvil</span>
                              <span className="text-sm text-muted-foreground">65%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Laptop className="h-5 w-5 text-green-500" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Desktop</span>
                              <span className="text-sm text-muted-foreground">28%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Tablet className="h-5 w-5 text-purple-500" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Tablet</span>
                              <span className="text-sm text-muted-foreground">7%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="location" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Mapa de Ubicaciones</CardTitle>
                      <CardDescription>Distribución geográfica de visitantes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <LocationMap />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Top Países</CardTitle>
                      <CardDescription>Países con mayor número de visitantes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <span className="text-sm font-medium">España</span>
                          </div>
                          <span className="text-sm text-muted-foreground">45%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">México</span>
                          </div>
                          <span className="text-sm text-muted-foreground">23%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium">Argentina</span>
                          </div>
                          <span className="text-sm text-muted-foreground">18%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm font-medium">Colombia</span>
                          </div>
                          <span className="text-sm text-muted-foreground">14%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="conversion" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Tasa de Conversión</CardTitle>
                      <CardDescription>Evolución de la tasa de conversión en el tiempo</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ConversionChart />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Funnel de Conversión</CardTitle>
                      <CardDescription>Proceso de conversión paso a paso</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Visitantes</span>
                          <span className="text-sm text-muted-foreground">12,548</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Páginas vistas</span>
                          <span className="text-sm text-muted-foreground">8,234</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Formularios iniciados</span>
                          <span className="text-sm text-muted-foreground">3,456</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Registros completados</span>
                          <span className="text-sm font-bold text-green-600">1,842</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="users" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Usuarios Activos</CardTitle>
                      <CardDescription>Usuarios activos en tiempo real</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Usuarios en línea</span>
                          <span className="text-sm font-bold text-green-600">234</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Usuarios únicos hoy</span>
                          <span className="text-sm text-muted-foreground">1,234</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Usuarios únicos esta semana</span>
                          <span className="text-sm text-muted-foreground">8,456</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Usuarios únicos este mes</span>
                          <span className="text-sm text-muted-foreground">12,548</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Usuarios Recientes</CardTitle>
                      <CardDescription>Últimos usuarios registrados</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Juan Doe</p>
                            <p className="text-xs text-muted-foreground">Hace 2 minutos</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium">María Smith</p>
                            <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>RJ</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium">Roberto Johnson</p>
                            <p className="text-xs text-muted-foreground">Hace 8 minutos</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
