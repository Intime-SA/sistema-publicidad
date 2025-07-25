"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { hour: "00:00", visitors: 120 },
  { hour: "02:00", visitors: 80 },
  { hour: "04:00", visitors: 50 },
  { hour: "06:00", visitors: 70 },
  { hour: "08:00", visitors: 150 },
  { hour: "10:00", visitors: 280 },
  { hour: "12:00", visitors: 350 },
  { hour: "14:00", visitors: 320 },
  { hour: "16:00", visitors: 380 },
  { hour: "18:00", visitors: 450 },
  { hour: "20:00", visitors: 520 },
  { hour: "22:00", visitors: 280 },
]

export default function HourlyVisitorsChart() {
  return (
    <ChartContainer
      config={{
        visitors: {
          label: "Visitantes",
          color: "hsl(var(--chart-4))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 20 }}>
          <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
