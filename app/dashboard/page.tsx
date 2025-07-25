import type { Metadata } from "next"
import DashboardMetrics from "@/components/dashboard-metrics"

export const metadata: Metadata = {
  title: "Dashboard de Métricas | Casino LCP",
  description: "Panel de control para métricas de Lead Capture Page de Casino",
}

export default function DashboardPage() {
  return <DashboardMetrics />
}
