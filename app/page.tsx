import { DashboardHeader } from "@/components/dashboard-header"
import { VideoFeed } from "@/components/video-feed"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { SystemStatus } from "@/components/system-status"
import { PerformanceCharts } from "@/components/performance-charts"
import { DetectionStats } from "@/components/detection-stats"
import { AlertsPanel } from "@/components/alerts-panel"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        {/* Top Row - Video Feed and System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VideoFeed />
          </div>
          <div>
            <SystemStatus />
          </div>
        </div>

        {/* Performance Metrics */}
        <PerformanceMetrics />

        {/* Charts and Detection Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceCharts />
          </div>
          <div>
            <DetectionStats />
          </div>
        </div>

        {/* Alerts Panel */}
        <AlertsPanel />
      </main>
    </div>
  )
}
