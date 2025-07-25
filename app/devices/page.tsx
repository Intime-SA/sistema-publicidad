import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Filter, Laptop, Smartphone, Tablet } from "lucide-react"
import DeviceChart from "@/components/charts/device-chart"

export const metadata: Metadata = {
  title: "Dispositivos | Casino LCP",
  description: "Análisis de dispositivos de usuarios de Lead Capture Page de Casino",
}

export default function DevicesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dispositivos</h1>
          <p className="text-muted-foreground">
            Analiza los dispositivos utilizados por tus usuarios y su comportamiento por tipo de dispositivo
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-medium">Distribución de usuarios por dispositivo</div>
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

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Móvil</CardTitle>
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8,156</div>
                <p className="text-xs text-muted-foreground">65% del total de visitantes</p>
                <div className="mt-4 flex items-center">
                  <div className="font-medium">Tasa de conversión:</div>
                  <div className="ml-auto">23.7%</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="font-medium">Tiempo promedio:</div>
                  <div className="ml-auto">2m 48s</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Desktop</CardTitle>
                <Laptop className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,137</div>
                <p className="text-xs text-muted-foreground">25% del total de visitantes</p>
                <div className="mt-4 flex items-center">
                  <div className="font-medium">Tasa de conversión:</div>
                  <div className="ml-auto">28.4%</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="font-medium">Tiempo promedio:</div>
                  <div className="ml-auto">4m 32s</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Tablet</CardTitle>
                <Tablet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,255</div>
                <p className="text-xs text-muted-foreground">10% del total de visitantes</p>
                <div className="mt-4 flex items-center">
                  <div className="font-medium">Tasa de conversión:</div>
                  <div className="ml-auto">25.1%</div>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="font-medium">Tiempo promedio:</div>
                  <div className="ml-auto">3m 42s</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Distribución por dispositivo</CardTitle>
              <CardDescription>Porcentaje de visitantes por tipo de dispositivo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <DeviceChart />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="mobile">
            <TabsList>
              <TabsTrigger value="mobile">Móvil</TabsTrigger>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
            </TabsList>
            <TabsContent value="mobile" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos móviles</CardTitle>
                  <CardDescription>Análisis detallado de dispositivos móviles utilizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dispositivo</TableHead>
                        <TableHead>Sistema Operativo</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>iPhone 13</TableCell>
                        <TableCell>iOS 15</TableCell>
                        <TableCell>3,245</TableCell>
                        <TableCell>39.8%</TableCell>
                        <TableCell>27.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Samsung Galaxy S21</TableCell>
                        <TableCell>Android 12</TableCell>
                        <TableCell>2,876</TableCell>
                        <TableCell>35.3%</TableCell>
                        <TableCell>24.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>iPhone 12</TableCell>
                        <TableCell>iOS 15</TableCell>
                        <TableCell>1,234</TableCell>
                        <TableCell>15.1%</TableCell>
                        <TableCell>22.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Xiaomi Redmi Note 10</TableCell>
                        <TableCell>Android 11</TableCell>
                        <TableCell>543</TableCell>
                        <TableCell>6.7%</TableCell>
                        <TableCell>18.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otros</TableCell>
                        <TableCell>Varios</TableCell>
                        <TableCell>258</TableCell>
                        <TableCell>3.1%</TableCell>
                        <TableCell>15.2%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="desktop" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos desktop</CardTitle>
                  <CardDescription>Análisis detallado de dispositivos desktop utilizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sistema Operativo</TableHead>
                        <TableHead>Navegador</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Windows 10</TableCell>
                        <TableCell>Chrome</TableCell>
                        <TableCell>1,543</TableCell>
                        <TableCell>49.2%</TableCell>
                        <TableCell>29.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>macOS</TableCell>
                        <TableCell>Safari</TableCell>
                        <TableCell>876</TableCell>
                        <TableCell>27.9%</TableCell>
                        <TableCell>31.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Windows 11</TableCell>
                        <TableCell>Chrome</TableCell>
                        <TableCell>432</TableCell>
                        <TableCell>13.8%</TableCell>
                        <TableCell>27.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>macOS</TableCell>
                        <TableCell>Chrome</TableCell>
                        <TableCell>187</TableCell>
                        <TableCell>6.0%</TableCell>
                        <TableCell>26.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otros</TableCell>
                        <TableCell>Varios</TableCell>
                        <TableCell>99</TableCell>
                        <TableCell>3.1%</TableCell>
                        <TableCell>18.7%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tablet" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos tablet</CardTitle>
                  <CardDescription>Análisis detallado de tablets utilizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dispositivo</TableHead>
                        <TableHead>Sistema Operativo</TableHead>
                        <TableHead>Visitantes</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>iPad</TableCell>
                        <TableCell>iPadOS 15</TableCell>
                        <TableCell>876</TableCell>
                        <TableCell>69.8%</TableCell>
                        <TableCell>27.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Samsung Galaxy Tab S7</TableCell>
                        <TableCell>Android 12</TableCell>
                        <TableCell>234</TableCell>
                        <TableCell>18.6%</TableCell>
                        <TableCell>22.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Amazon Fire HD</TableCell>
                        <TableCell>Fire OS</TableCell>
                        <TableCell>87</TableCell>
                        <TableCell>6.9%</TableCell>
                        <TableCell>18.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lenovo Tab</TableCell>
                        <TableCell>Android 11</TableCell>
                        <TableCell>43</TableCell>
                        <TableCell>3.4%</TableCell>
                        <TableCell>16.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otros</TableCell>
                        <TableCell>Varios</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>1.3%</TableCell>
                        <TableCell>12.8%</TableCell>
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
