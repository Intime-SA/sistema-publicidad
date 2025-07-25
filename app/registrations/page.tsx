import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Filter, MessageSquare } from "lucide-react"
import ConversionChart from "@/components/charts/conversion-chart"

export const metadata: Metadata = {
  title: "Registros | Casino LCP",
  description: "Análisis de registros y conversiones de Lead Capture Page de Casino",
}

export default function RegistrationsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Registros</h1>
          <p className="text-muted-foreground">Analiza los registros y conversiones de usuarios en tu plataforma</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg font-medium">Tasa de conversión: 24.8%</div>
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
                <CardTitle className="text-sm font-medium">Visitantes Totales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,548</div>
                <p className="text-xs text-muted-foreground">+18.2% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Registros Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,876</div>
                <p className="text-xs text-muted-foreground">+12.4% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Verificados WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,124</div>
                <p className="text-xs text-muted-foreground">+8.7% respecto al período anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Registros Casino</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,842</div>
                <p className="text-xs text-muted-foreground">+12.5% respecto al período anterior</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tasa de conversión</CardTitle>
              <CardDescription>Porcentaje de visitantes que completan cada etapa del proceso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ConversionChart />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Embudo de conversión</CardTitle>
              <CardDescription>Seguimiento del proceso de conversión de usuarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                    <span>Visitantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">12,548</span>
                    <span className="text-sm text-muted-foreground">100%</span>
                  </div>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-full bg-primary" style={{ width: "100%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                    <span>Ingresaron Teléfono</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">5,876</span>
                    <span className="text-sm text-muted-foreground">46.8%</span>
                  </div>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-blue-500" style={{ width: "46.8%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    <span>Verificaron WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">3,124</span>
                    <span className="text-sm text-muted-foreground">24.9%</span>
                  </div>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-green-500" style={{ width: "24.9%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <span>Registrados en Casino</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">1,842</span>
                    <span className="text-sm text-muted-foreground">14.7%</span>
                  </div>
                </div>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-yellow-500" style={{ width: "14.7%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="recent">
            <TabsList>
              <TabsTrigger value="recent">Registros recientes</TabsTrigger>
              <TabsTrigger value="verified">Verificados WhatsApp</TabsTrigger>
              <TabsTrigger value="converted">Convertidos a Casino</TabsTrigger>
            </TabsList>
            <TabsContent value="recent" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Registros recientes</CardTitle>
                  <CardDescription>Últimos usuarios que han proporcionado su número telefónico</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Dispositivo</TableHead>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#12458</TableCell>
                        <TableCell>+54 11 5678-9012</TableCell>
                        <TableCell>23/04/2023 14:32</TableCell>
                        <TableCell>iPhone 13</TableCell>
                        <TableCell>Buenos Aires, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Registrado en Casino</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12457</TableCell>
                        <TableCell>+54 11 4567-8901</TableCell>
                        <TableCell>23/04/2023 13:45</TableCell>
                        <TableCell>Samsung Galaxy S21</TableCell>
                        <TableCell>Córdoba, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">Verificado WhatsApp</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12456</TableCell>
                        <TableCell>+54 11 3456-7890</TableCell>
                        <TableCell>23/04/2023 12:18</TableCell>
                        <TableCell>Windows PC</TableCell>
                        <TableCell>Rosario, AR</TableCell>
                        <TableCell>
                          <Badge variant="outline">Pendiente Verificación</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12455</TableCell>
                        <TableCell>+54 11 2345-6789</TableCell>
                        <TableCell>23/04/2023 11:05</TableCell>
                        <TableCell>MacBook</TableCell>
                        <TableCell>Mendoza, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Registrado en Casino</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="verified" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Verificados por WhatsApp</CardTitle>
                  <CardDescription>Usuarios que han verificado su número telefónico por WhatsApp</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Fecha Registro</TableHead>
                        <TableHead>Fecha Verificación</TableHead>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#12457</TableCell>
                        <TableCell>+54 11 4567-8901</TableCell>
                        <TableCell>23/04/2023 13:45</TableCell>
                        <TableCell>23/04/2023 13:52</TableCell>
                        <TableCell>Córdoba, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">Verificado WhatsApp</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12454</TableCell>
                        <TableCell>+54 11 1234-5678</TableCell>
                        <TableCell>23/04/2023 10:42</TableCell>
                        <TableCell>23/04/2023 10:48</TableCell>
                        <TableCell>Buenos Aires, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500">Verificado WhatsApp</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="converted" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Convertidos a Casino</CardTitle>
                  <CardDescription>Usuarios que se han registrado en el casino principal</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Teléfono</TableHead>
                        <TableHead>Fecha Registro</TableHead>
                        <TableHead>Fecha Conversión</TableHead>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>#12458</TableCell>
                        <TableCell>+54 11 5678-9012</TableCell>
                        <TableCell>23/04/2023 14:32</TableCell>
                        <TableCell>23/04/2023 15:10</TableCell>
                        <TableCell>Buenos Aires, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Registrado en Casino</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>#12455</TableCell>
                        <TableCell>+54 11 2345-6789</TableCell>
                        <TableCell>23/04/2023 11:05</TableCell>
                        <TableCell>23/04/2023 11:42</TableCell>
                        <TableCell>Mendoza, AR</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Registrado en Casino</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </TableCell>
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
