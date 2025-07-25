"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Móvil", value: 65 },
  { name: "Desktop", value: 25 },
  { name: "Tablet", value: 10 },
]

export default function DeviceChart() {
  return (
    <ChartContainer
      config={{
        Móvil: {
          label: "Móvil",
          color: "hsl(var(--chart-1))",
        },
        Desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-2))",
        },
        Tablet: {
          label: "Tablet",
          color: "hsl(var(--chart-3))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.name})`} stroke="transparent" />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
