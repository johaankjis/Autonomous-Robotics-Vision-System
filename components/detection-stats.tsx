import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

export function DetectionStats() {
  const stats = [
    {
      label: "Successful Detections",
      value: "2,847",
      percentage: 94.2,
      icon: CheckCircle2,
      color: "text-accent",
    },
    {
      label: "Partial Detections",
      value: "142",
      percentage: 4.7,
      icon: AlertTriangle,
      color: "text-chart-3",
    },
    {
      label: "Failed Detections",
      value: "33",
      percentage: 1.1,
      icon: XCircle,
      color: "text-destructive",
    },
  ]

  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle className="text-lg">Detection Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {stat.percentage}%
                  </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-semibold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">frames</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total Frames</span>
            <span className="font-mono text-foreground">3,022</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Session Duration</span>
            <span className="font-mono text-foreground">1h 41m</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Avg Confidence</span>
            <span className="font-mono text-foreground">94.2%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
