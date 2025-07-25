"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { device: "Móvil", time: 2.8 },
  { device: "Desktop", time: 4.5 },
  { device: "Tablet", time: 3.7 },
]

export default function TimeOnSiteChart() {
  return (
    <ChartContainer
      config={{
        time: {
          label: "Tiempo (minutos)",
          color: "hsl(var(--chart-3))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 20 }}>
          <XAxis dataKey="device" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-xs"
            tickFormatter={(value) => `${value}m`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="time" fill="var(--color-time)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
