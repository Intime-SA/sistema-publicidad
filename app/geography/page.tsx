import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Filter } from "lucide-react"
import LocationMap from "@/components/charts/location-map"

export const metadata: Metadata = {
  title: "Geografía | Casino LCP",
  description: "Análisis geográfico de usuarios de Lead Capture Page de Casino",
}

export default function GeographyPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Geografía</h1>
          <p className="text-muted-foreground">
            Analiza la distribución geográfica de tus usuarios y su comportamiento por ubicación
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-medium">Distribución de usuarios por ubicación</div>
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

          <Card>
            <CardHeader>
              <CardTitle>Mapa de calor de usuarios</CardTitle>
              <CardDescription>Visualización de la concentración de usuarios por ubicación geográfica</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <LocationMap />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="countries">
            <TabsList>
              <TabsTrigger value="countries">Países</TabsTrigger>
              <TabsTrigger value="cities">Ciudades</TabsTrigger>
              <TabsTrigger value="ips">Direcciones IP</TabsTrigger>
            </TabsList>
            <TabsContent value="countries" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Distribución por países</CardTitle>
                  <CardDescription>Análisis de usuarios por país de origen</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>País</TableHead>
                        <TableHead>Usuarios</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                        <TableHead>Tiempo promedio</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Argentina</TableCell>
                        <TableCell>10,245</TableCell>
                        <TableCell>81.6%</TableCell>
                        <TableCell>26.4%</TableCell>
                        <TableCell>3m 52s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Chile</TableCell>
                        <TableCell>987</TableCell>
                        <TableCell>7.9%</TableCell>
                        <TableCell>18.9%</TableCell>
                        <TableCell>2m 45s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Uruguay</TableCell>
                        <TableCell>654</TableCell>
                        <TableCell>5.2%</TableCell>
                        <TableCell>17.2%</TableCell>
                        <TableCell>2m 38s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Paraguay</TableCell>
                        <TableCell>432</TableCell>
                        <TableCell>3.4%</TableCell>
                        <TableCell>15.8%</TableCell>
                        <TableCell>2m 12s</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otros</TableCell>
                        <TableCell>230</TableCell>
                        <TableCell>1.9%</TableCell>
                        <TableCell>12.3%</TableCell>
                        <TableCell>1m 58s</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cities" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Distribución por ciudades</CardTitle>
                  <CardDescription>Análisis de usuarios por ciudad de origen</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ciudad</TableHead>
                        <TableHead>País</TableHead>
                        <TableHead>Usuarios</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Tasa de conversión</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Buenos Aires</TableCell>
                        <TableCell>Argentina</TableCell>
                        <TableCell>4,532</TableCell>
                        <TableCell>36.1%</TableCell>
                        <TableCell>28.4%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Córdoba</TableCell>
                        <TableCell>Argentina</TableCell>
                        <TableCell>2,154</TableCell>
                        <TableCell>17.2%</TableCell>
                        <TableCell>25.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Rosario</TableCell>
                        <TableCell>Argentina</TableCell>
                        <TableCell>1,876</TableCell>
                        <TableCell>15.0%</TableCell>
                        <TableCell>22.7%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mendoza</TableCell>
                        <TableCell>Argentina</TableCell>
                        <TableCell>1,432</TableCell>
                        <TableCell>11.4%</TableCell>
                        <TableCell>21.3%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Santiago</TableCell>
                        <TableCell>Chile</TableCell>
                        <TableCell>987</TableCell>
                        <TableCell>7.9%</TableCell>
                        <TableCell>18.9%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ips" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Análisis de direcciones IP</CardTitle>
                  <CardDescription>Información detallada sobre las direcciones IP de los usuarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Dirección IP</TableHead>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Proveedor</TableHead>
                        <TableHead>Visitas</TableHead>
                        <TableHead>Última visita</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>181.45.123.45</TableCell>
                        <TableCell>Buenos Aires, AR</TableCell>
                        <TableCell>Telecom Argentina</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>23/04/2023 14:32</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>200.68.45.123</TableCell>
                        <TableCell>Córdoba, AR</TableCell>
                        <TableCell>Fibertel</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>23/04/2023 13:45</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>190.51.78.234</TableCell>
                        <TableCell>Rosario, AR</TableCell>
                        <TableCell>Claro Argentina</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>23/04/2023 12:18</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>186.33.110.87</TableCell>
                        <TableCell>Mendoza, AR</TableCell>
                        <TableCell>Movistar Argentina</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>23/04/2023 11:05</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>200.27.45.67</TableCell>
                        <TableCell>Santiago, CL</TableCell>
                        <TableCell>Movistar Chile</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>23/04/2023 10:42</TableCell>
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
