import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, HardDrive, Thermometer, Zap } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function SystemStatus() {
  const systemMetrics = [
    {
      label: "CPU Usage",
      value: 68,
      icon: Cpu,
      status: "normal",
      unit: "%",
    },
    {
      label: "GPU Usage",
      value: 82,
      icon: Zap,
      status: "high",
      unit: "%",
    },
    {
      label: "Memory",
      value: 45,
      icon: HardDrive,
      status: "normal",
      unit: "%",
    },
    {
      label: "Temperature",
      value: 72,
      icon: Thermometer,
      status: "normal",
      unit: "°C",
    },
  ]

  return (
    <Card className="bg-card border-border h-full">
      <CardHeader>
        <CardTitle className="text-lg">System Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {systemMetrics.map((metric) => {
          const Icon = metric.icon
          const statusColor =
            metric.status === "high" ? "text-destructive" : metric.status === "warning" ? "text-chart-3" : "text-accent"

          return (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${statusColor}`} />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {metric.value}
                  {metric.unit}
                </Badge>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          )
        })}

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Device</span>
            <span className="font-mono text-foreground">Jetson AGX Orin</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Uptime</span>
            <span className="font-mono text-foreground">12h 34m</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <Badge className="bg-accent/20 text-accent border-accent/50">Operational</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
