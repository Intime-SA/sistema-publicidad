"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "01/04", visitors: 1200 },
  { date: "02/04", visitors: 1350 },
  { date: "03/04", visitors: 1500 },
  { date: "04/04", visitors: 1400 },
  { date: "05/04", visitors: 1600 },
  { date: "06/04", visitors: 1750 },
  { date: "07/04", visitors: 1800 },
  { date: "08/04", visitors: 1950 },
  { date: "09/04", visitors: 2100 },
  { date: "10/04", visitors: 2000 },
  { date: "11/04", visitors: 2200 },
  { date: "12/04", visitors: 2300 },
  { date: "13/04", visitors: 2400 },
  { date: "14/04", visitors: 2500 },
]

export default function VisitorsChart() {
  return (
    <ChartContainer
      config={{
        visitors: {
          label: "Visitantes",
          color: "hsl(var(--chart-1))",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} className="text-xs" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="visitors"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            stroke="var(--color-visitors)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
