import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Filter } from "lucide-react"
import TimeOnSiteChart from "@/components/charts/time-on-site-chart"

export const metadata: Metadata = {
  title: "Tiempo en Sitio | Casino LCP",
  description: "Análisis del tiempo en sitio de usuarios de Lead Capture Page de Casino",
}

export default function TimeOnSitePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Tiempo en Sitio</h1>
          <p className="text-muted-foreground">
            Analiza cuánto tiempo pasan los usuarios en tu plataforma y su comportamiento durante la visita
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-medium">Tiempo promedio por sesión: 3m 42s</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3m 42s</div>
                <p className="text-xs text-muted-foreground">+5.1% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Máximo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15m 23s</div>
                <p className="text-xs text-muted-foreground">+2.3% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Mínimo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12s</div>
                <p className="text-xs text-muted-foreground">-1.5% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Rebote Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18.4%</div>
                <p className="text-xs text-muted-foreground">-3.2% respecto al período anterior</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tiempo en sitio por dispositivo</CardTitle>
              <CardDescription>
                Tiempo promedio que los usuarios pasan en la plataforma según el dispositivo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <TimeOnSiteChart />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="by-page">
            <TabsList>
              <TabsTrigger value="by-page">Por página</TabsTrigger>
              <TabsTrigger value="by-device">Por dispositivo</TabsTrigger>
              <TabsTrigger value="by-location">Por ubicación</TabsTrigger>
            </TabsList>
            <TabsContent value="by-page" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tiempo en sitio por página</CardTitle>
                  <CardDescription>Análisis del tiempo que los usuarios pasan en cada página</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Página</TableHead>
                        <TableHead>Tiempo promedio</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Tasa de rebote</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Página principal</TableCell>
                        <TableCell>2m 45s</TableCell>
                        <TableCell>12,548</TableCell>
                        <TableCell>18.4%</TableCell>
                        <TableCell>24.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Formulario de registro</TableCell>
                        <TableCell>1m 32s</TableCell>
                        <TableCell>5,876</TableCell>
                        <TableCell>12.3%</TableCell>
                        <TableCell>53.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Página de promociones</TableCell>
                        <TableCell>3m 18s</TableCell>
                        <TableCell>4,321</TableCell>
                        <TableCell>15.7%</TableCell>
                        <TableCell>32.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Página de juegos</TableCell>
                        <TableCell>4m 05s</TableCell>
                        <TableCell>3,654</TableCell>
                        <TableCell>14.2%</TableCell>
                        <TableCell>28.7%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Página de métodos de pago</TableCell>
                        <TableCell>2m 12s</TableCell>
                        <TableCell>2,187</TableCell>
                        <TableCell>16.8%</TableCell>
                        <TableCell>21.5%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="by-device" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tiempo en sitio por dispositivo</CardTitle>
                  <CardDescription>
                    Análisis del tiempo que los usuarios pasan según el dispositivo utilizado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dispositivo</TableHead>
                        <TableHead>Tiempo promedio</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Tasa de rebote</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>iPhone 13</TableCell>
                        <TableCell>2m 32s</TableCell>
                        <TableCell>3,245</TableCell>
                        <TableCell>19.2%</TableCell>
                        <TableCell>27.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Samsung Galaxy S21</TableCell>
                        <TableCell>2m 48s</TableCell>
                        <TableCell>2,876</TableCell>
                        <TableCell>18.7%</TableCell>
                        <TableCell>24.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Windows PC</TableCell>
                        <TableCell>4m 12s</TableCell>
                        <TableCell>2,154</TableCell>
                        <TableCell>15.3%</TableCell>
                        <TableCell>29.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>MacBook</TableCell>
                        <TableCell>4m 45s</TableCell>
                        <TableCell>1,987</TableCell>
                        <TableCell>14.8%</TableCell>
                        <TableCell>31.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>iPad</TableCell>
                        <TableCell>3m 54s</TableCell>
                        <TableCell>1,432</TableCell>
                        <TableCell>16.2%</TableCell>
                        <TableCell>27.3%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="by-location" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tiempo en sitio por ubicación</CardTitle>
                  <CardDescription>
                    Análisis del tiempo que los usuarios pasan según su ubicación geográfica
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Tiempo promedio</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Tasa de rebote</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Buenos Aires, AR</TableCell>
                        <TableCell>3m 48s</TableCell>
                        <TableCell>4,532</TableCell>
                        <TableCell>17.2%</TableCell>
                        <TableCell>28.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Córdoba, AR</TableCell>
                        <TableCell>3m 32s</TableCell>
                        <TableCell>2,154</TableCell>
                        <TableCell>18.5%</TableCell>
                        <TableCell>25.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Rosario, AR</TableCell>
                        <TableCell>3m 24s</TableCell>
                        <TableCell>1,876</TableCell>
                        <TableCell>19.1%</TableCell>
                        <TableCell>22.7%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mendoza, AR</TableCell>
                        <TableCell>3m 12s</TableCell>
                        <TableCell>1,432</TableCell>
                        <TableCell>20.3%</TableCell>
                        <TableCell>21.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Santiago, CL</TableCell>
                        <TableCell>2m 54s</TableCell>
                        <TableCell>987</TableCell>
                        <TableCell>22.1%</TableCell>
                        <TableCell>18.9%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
