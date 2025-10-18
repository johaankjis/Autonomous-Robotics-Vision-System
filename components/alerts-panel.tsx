import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Info, CheckCircle } from "lucide-react"

export function AlertsPanel() {
  const alerts = [
    {
      type: "info",
      message: "System initialized successfully",
      timestamp: "14:32:18",
      icon: CheckCircle,
      color: "text-accent",
    },
    {
      type: "warning",
      message: "GPU temperature approaching threshold (72°C)",
      timestamp: "14:28:45",
      icon: AlertCircle,
      color: "text-chart-3",
    },
    {
      type: "info",
      message: "Lane detection model loaded",
      timestamp: "14:25:12",
      icon: Info,
      color: "text-primary",
    },
    {
      type: "info",
      message: "Camera feed connected at 1920x1080@30fps",
      timestamp: "14:25:08",
      icon: CheckCircle,
      color: "text-accent",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg">System Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const Icon = alert.icon
            return (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                <Icon className={`h-5 w-5 mt-0.5 ${alert.color}`} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm text-foreground">{alert.message}</p>
                  <Badge variant="outline" className="font-mono text-xs">
                    {alert.timestamp}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
