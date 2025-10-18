"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Video, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoFeed() {
  const [timestamp, setTimestamp] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <Video className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg">Live Camera Feed</CardTitle>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="font-mono text-xs">
            {timestamp.toLocaleTimeString()}
          </Badge>
          <Button variant="ghost" size="sm">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden">
          {/* Simulated camera feed with lane detection overlay */}
          <img src="/highway-road-view-from-car-dashboard-camera.jpg" alt="Camera feed" className="w-full h-full object-cover" />

          {/* Lane detection overlay */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1280 720">
            {/* Left lane line */}
            <path
              d="M 200 720 Q 300 400 350 0"
              stroke="rgb(124 252 0)"
              strokeWidth="3"
              fill="none"
              className="opacity-80"
            />
            {/* Right lane line */}
            <path
              d="M 1080 720 Q 980 400 930 0"
              stroke="rgb(124 252 0)"
              strokeWidth="3"
              fill="none"
              className="opacity-80"
            />
            {/* Center dashed line */}
            <path
              d="M 640 720 L 640 0"
              stroke="rgb(255 215 0)"
              strokeWidth="2"
              strokeDasharray="20,15"
              fill="none"
              className="opacity-60"
            />
          </svg>

          {/* Detection info overlay */}
          <div className="absolute top-4 left-4 space-y-2">
            <Badge className="bg-accent/90 text-accent-foreground border-0">Lane Detection: Active</Badge>
            <Badge className="bg-primary/90 text-primary-foreground border-0">Confidence: 94.2%</Badge>
          </div>

          {/* FPS counter */}
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-background/80 font-mono">
              30 FPS
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
