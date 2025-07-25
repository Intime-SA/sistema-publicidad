import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Configuración | Casino LCP",
  description: "Configuración de Lead Capture Page de Casino",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
          <p className="text-muted-foreground">
            Gestiona la configuración de tu plataforma y personaliza tus preferencias
          </p>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            <TabsTrigger value="api">API y Integraciones</TabsTrigger>
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Información General</CardTitle>
                <CardDescription>Configura la información básica de tu plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-name">Nombre del sitio</Label>
                    <Input id="site-name" defaultValue="Casino LCP" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-url">URL del sitio</Label>
                    <Input id="site-url" defaultValue="https://casino-lcp.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Descripción</Label>
                  <Textarea
                    id="site-description"
                    defaultValue="Lead Capture Page para casino online con sistema de redirección y seguimiento de comisiones."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="casino-url">URL del casino principal</Label>
                  <Input id="casino-url" defaultValue="https://casino-principal.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="affiliate-code">Código de afiliado</Label>
                  <Input id="affiliate-code" defaultValue="AFF12345" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de Análisis</CardTitle>
                <CardDescription>Configura las preferencias para el análisis de datos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics">Activar análisis</Label>
                    <p className="text-sm text-muted-foreground">
                      Recopilar datos de uso y comportamiento de los usuarios
                    </p>
                  </div>
                  <Switch id="analytics" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ip-tracking">Seguimiento de IP</Label>
                    <p className="text-sm text-muted-foreground">
                      Recopilar información sobre las direcciones IP de los usuarios
                    </p>
                  </div>
                  <Switch id="ip-tracking" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="device-tracking">Seguimiento de dispositivos</Label>
                    <p className="text-sm text-muted-foreground">
                      Recopilar información sobre los dispositivos utilizados
                    </p>
                  </div>
                  <Switch id="device-tracking" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="time-tracking">Seguimiento de tiempo en sitio</Label>
                    <p className="text-sm text-muted-foreground">
                      Medir el tiempo que los usuarios pasan en la plataforma
                    </p>
                  </div>
                  <Switch id="time-tracking" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Notificaciones por email</Label>
                    <p className="text-sm text-muted-foreground">Recibir notificaciones por correo electrónico</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-address">Dirección de correo electrónico</Label>
                  <Input id="email-address" defaultValue="admin@casino-lcp.com" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-notifications">Notificaciones por WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">Recibir notificaciones por WhatsApp</p>
                  </div>
                  <Switch id="whatsapp-notifications" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-number">Número de WhatsApp</Label>
                  <Input id="whatsapp-number" defaultValue="+54 11 1234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notification-frequency">Frecuencia de notificaciones</Label>
                  <Select defaultValue="realtime">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Tiempo real</SelectItem>
                      <SelectItem value="hourly">Cada hora</SelectItem>
                      <SelectItem value="daily">Diario</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Alertas</CardTitle>
                <CardDescription>Configura alertas para eventos importantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-registration">Nuevo registro</Label>
                    <p className="text-sm text-muted-foreground">Recibir alerta cuando un usuario se registra</p>
                  </div>
                  <Switch id="new-registration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-verification">Verificación WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir alerta cuando un usuario verifica su WhatsApp
                    </p>
                  </div>
                  <Switch id="whatsapp-verification" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="casino-registration">Registro en casino</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir alerta cuando un usuario se registra en el casino
                    </p>
                  </div>
                  <Switch id="casino-registration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="conversion-drop">Caída en conversión</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibir alerta cuando la tasa de conversión cae significativamente
                    </p>
                  </div>
                  <Switch id="conversion-drop" defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="api" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de API</CardTitle>
                <CardDescription>Gestiona las claves de API y las integraciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-key">Clave de API</Label>
                  <div className="flex gap-2">
                    <Input id="api-key" defaultValue="sk_live_51KjLmQJHY7tKNBXg..." type="password" />
                    <Button variant="outline">Mostrar</Button>
                    <Button variant="outline">Regenerar</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhook-url">URL de Webhook</Label>
                  <Input id="webhook-url" defaultValue="https://casino-lcp.com/api/webhook" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="casino-api-key">Clave de API del Casino</Label>
                  <div className="flex gap-2">
                    <Input id="casino-api-key" defaultValue="casino_api_51KjLmQJHY7tKNBXg..." type="password" />
                    <Button variant="outline">Mostrar</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Integraciones</CardTitle>
                <CardDescription>Configura integraciones con servicios externos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="casino-integration">Integración con Casino</Label>
                    <p className="text-sm text-muted-foreground">Conectar con la API del casino principal</p>
                  </div>
                  <Switch id="casino-integration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-integration">Integración con WhatsApp</Label>
                    <p className="text-sm text-muted-foreground">Conectar con la API de WhatsApp Business</p>
                  </div>
                  <Switch id="whatsapp-integration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="analytics-integration">Integración con Google Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Conectar con Google Analytics para análisis avanzado
                    </p>
                  </div>
                  <Switch id="analytics-integration" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="analytics-id">ID de Google Analytics</Label>
                  <Input id="analytics-id" defaultValue="G-XXXXXXXXXX" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="whatsapp" className="mt-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de WhatsApp</CardTitle>
                <CardDescription>Configura la integración con WhatsApp para verificación y mensajes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-business-id">ID de WhatsApp Business</Label>
                  <Input id="whatsapp-business-id" defaultValue="123456789012345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-token">Token de acceso</Label>
                  <div className="flex gap-2">
                    <Input id="whatsapp-token" defaultValue="EAAJOZCnHZBZC8BANZCkZA..." type="password" />
                    <Button variant="outline">Mostrar</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp-phone-id">ID de número telefónico</Label>
                  <Input id="whatsapp-phone-id" defaultValue="987654321098765" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="verification-template">Plantilla de verificación</Label>
                  <Textarea
                    id="verification-template"
                    defaultValue="Hola, gracias por registrarte en Casino LCP. Tu código de verificación es: {{1}}. Ingresa este código para completar tu registro."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mensajes Automáticos</CardTitle>
                <CardDescription>Configura mensajes automáticos para diferentes eventos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="welcome-message">Mensaje de bienvenida</Label>
                  <Textarea
                    id="welcome-message"
                    defaultValue="¡Bienvenido a Casino LCP! Gracias por registrarte. Haz clic en el siguiente enlace para acceder al casino principal con tu bono de bienvenida: {{1}}"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reminder-message">Mensaje de recordatorio</Label>
                  <Textarea
                    id="reminder-message"
                    defaultValue="Hola {{1}}, te recordamos que aún no has completado tu registro en el casino principal. Haz clic aquí para obtener tu bono de bienvenida: {{2}}"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="promotion-message">Mensaje de promoción</Label>
                  <Textarea
                    id="promotion-message"
                    defaultValue="¡Hola {{1}}! Tenemos una promoción especial para ti. Obtén un 100% de bonificación en tu próximo depósito usando el código: {{2}}. Válido hasta: {{3}}"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-reminder">Recordatorios automáticos</Label>
                    <p className="text-sm text-muted-foreground">
                      Enviar recordatorios automáticos a usuarios que no completan el registro
                    </p>
                  </div>
                  <Switch id="auto-reminder" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reminder-frequency">Frecuencia de recordatorios</Label>
                  <Select defaultValue="24h">
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6h">Cada 6 horas</SelectItem>
                      <SelectItem value="12h">Cada 12 horas</SelectItem>
                      <SelectItem value="24h">Cada 24 horas</SelectItem>
                      <SelectItem value="48h">Cada 48 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
