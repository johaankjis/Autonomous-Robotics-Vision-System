import { Activity, Settings, Power } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Robotics Vision System</h1>
            </div>
            <Badge variant="outline" className="bg-accent/20 text-accent border-accent/50">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Live
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <Power className="h-4 w-4 mr-2" />
              Stop System
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
