"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const fpsData = Array.from({ length: 30 }, (_, i) => ({
  time: `${i}s`,
  fps: 28 + Math.random() * 4,
  latency: 10 + Math.random() * 5,
}))

const accuracyData = Array.from({ length: 30 }, (_, i) => ({
  time: `${i}s`,
  accuracy: 92 + Math.random() * 4,
}))

export function PerformanceCharts() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg">Performance Trends</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* FPS and Latency Chart */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Frame Rate & Latency</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={fpsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="fps" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} name="FPS" />
              <Line
                type="monotone"
                dataKey="latency"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={false}
                name="Latency (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Accuracy Chart */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Detection Accuracy</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[85, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="hsl(var(--chart-3))"
                fill="hsl(var(--chart-3))"
                fillOpacity={0.2}
                strokeWidth={2}
                name="Accuracy %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
