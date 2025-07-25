"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "01/04", conversion: 18 },
  { date: "02/04", conversion: 19 },
  { date: "03/04", conversion: 20 },
  { date: "04/04", conversion: 21 },
  { date: "05/04", conversion: 22 },
  { date: "06/04", conversion: 23 },
  { date: "07/04", conversion: 22 },
  { date: "08/04", conversion: 24 },
  { date: "09/04", conversion: 25 },
  { date: "10/04", conversion: 24 },
  { date: "11/04", conversion: 26 },
  { date: "12/04", conversion: 27 },
  { date: "13/04", conversion: 26 },
  { date: "14/04", conversion: 28 },
]

export default function ConversionChart() {
  return (
    <ChartContainer
      config={{
        conversion: {
          label: "Tasa de Conversión",
          color: "hsl(var(--chart-2))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            className="text-xs"
            tickFormatter={(value) => `${value}%`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="conversion"
            stroke="var(--color-conversion)"
            fill="var(--color-conversion)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
