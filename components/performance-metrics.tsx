import { Card, CardContent } from "@/components/ui/card"
import { Activity, Clock, Target, TrendingUp } from "lucide-react"

export function PerformanceMetrics() {
  const metrics = [
    {
      label: "Frame Rate",
      value: "30.2",
      unit: "FPS",
      change: "+2.1%",
      trend: "up",
      icon: Activity,
      color: "text-primary",
    },
    {
      label: "Processing Latency",
      value: "12.4",
      unit: "ms",
      change: "-5.3%",
      trend: "up",
      icon: Clock,
      color: "text-accent",
    },
    {
      label: "Detection Accuracy",
      value: "94.2",
      unit: "%",
      change: "+1.8%",
      trend: "up",
      icon: Target,
      color: "text-chart-3",
    },
    {
      label: "Throughput",
      value: "1.2",
      unit: "GB/s",
      change: "+0.4%",
      trend: "up",
      icon: TrendingUp,
      color: "text-chart-2",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">{metric.value}</span>
                    <span className="text-sm text-muted-foreground">{metric.unit}</span>
                  </div>
                  <p className="text-xs text-accent">{metric.change} from avg</p>
                </div>
                <div className={`p-2 rounded-lg bg-secondary ${metric.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
