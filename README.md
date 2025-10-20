# Autonomous Robotics Vision System

A real-time monitoring dashboard for autonomous robotics vision systems with live camera feeds, lane detection, and comprehensive performance analytics.

## 🚀 Features

### Real-Time Vision Processing
- **Live Camera Feed**: Real-time video streaming with overlay visualization
- **Lane Detection**: Computer vision-based lane detection with confidence metrics
- **Object Detection**: Track and identify objects in the camera field of view
- **Performance Metrics**: Monitor FPS, latency, accuracy, and throughput in real-time

### System Monitoring
- **Hardware Status**: Monitor CPU, GPU, memory, and temperature
- **Performance Trends**: Visualize frame rate, latency, and detection accuracy over time
- **Detection Statistics**: Track successful, partial, and failed detections
- **System Alerts**: Real-time notifications for system events and warnings

### Dashboard Interface
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Dark Theme**: Eye-friendly dark mode interface
- **Real-Time Updates**: Live data refresh with minimal latency
- **Interactive Charts**: Dynamic performance visualization using Recharts

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with server-side rendering
- **React 19** - UI library for building interactive components
- **TypeScript 5** - Type-safe JavaScript development

### UI Components & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library
- **Shadcn/ui** - Re-usable component library built on Radix UI

### Data Visualization
- **Recharts** - Composable charting library for React
- **Embla Carousel** - Lightweight carousel library

### State Management & Forms
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation
- **Next Themes** - Dark mode support

### Additional Tools
- **date-fns** - Modern date utility library
- **Sonner** - Toast notifications
- **Vercel Analytics** - Web analytics integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (package manager)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Autonomous-Robotics-Vision-System.git
   cd Autonomous-Robotics-Vision-System
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚦 Usage

### Development
Start the development server with hot-reload:
```bash
pnpm dev
```

### Production Build
Create an optimized production build:
```bash
pnpm build
```

### Start Production Server
Run the production build:
```bash
pnpm start
```

### Linting
Run ESLint to check code quality:
```bash
pnpm lint
```

## 📁 Project Structure

```
Autonomous-Robotics-Vision-System/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Main dashboard page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Shadcn/ui)
│   ├── alerts-panel.tsx         # System alerts display
│   ├── dashboard-header.tsx     # Dashboard header with controls
│   ├── detection-stats.tsx      # Detection statistics widget
│   ├── performance-charts.tsx   # Performance trend charts
│   ├── performance-metrics.tsx  # Real-time metrics cards
│   ├── system-status.tsx        # System resource monitoring
│   ├── theme-provider.tsx       # Dark mode theme provider
│   └── video-feed.tsx           # Live camera feed component
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile device detection
│   └── use-toast.ts             # Toast notification hook
├── lib/                          # Utility functions
├── public/                       # Static assets
│   └── highway-road-view-from-car-dashboard-camera.jpg
├── styles/                       # Additional stylesheets
├── components.json              # Shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🎨 Key Components

### Dashboard Components

- **DashboardHeader**: Navigation bar with system controls and live status indicator
- **VideoFeed**: Real-time camera feed with lane detection overlay and confidence metrics
- **SystemStatus**: Hardware monitoring (CPU, GPU, Memory, Temperature)
- **PerformanceMetrics**: Key performance indicators (FPS, Latency, Accuracy, Throughput)
- **PerformanceCharts**: Time-series visualization of system performance
- **DetectionStats**: Statistical breakdown of detection results
- **AlertsPanel**: System notifications and event log

### Hardware Support

The system is designed to run on embedded platforms like:
- **NVIDIA Jetson AGX Orin** (shown in system status)
- Other NVIDIA Jetson modules
- Edge computing devices with GPU acceleration

## 🔍 Features in Detail

### Lane Detection System
- Real-time lane boundary detection
- Confidence score calculation
- Visual overlay on camera feed
- 30 FPS processing capability

### Performance Monitoring
- **Frame Rate**: Real-time FPS tracking (target: 30 FPS)
- **Processing Latency**: End-to-end processing time (target: <15ms)
- **Detection Accuracy**: Confidence metrics (target: >90%)
- **Data Throughput**: System bandwidth utilization

### System Resources
- CPU usage monitoring
- GPU utilization tracking
- Memory consumption
- Temperature monitoring with threshold alerts

## 🌐 Deployment

This application is optimized for deployment on:
- **Vercel** (recommended for Next.js apps)
- **Docker containers** for edge deployment
- **Self-hosted** on embedded devices

### Environment Variables

Create a `.env.local` file for environment-specific configuration:
```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open-source and available for educational and research purposes.

## 🐛 Known Issues

- TypeScript build errors are currently ignored (configured in `next.config.mjs`)
- Image optimization is disabled for better compatibility with edge devices

## 🔮 Future Enhancements

- [ ] Integration with actual camera hardware
- [ ] Real-time object detection and classification
- [ ] Historical data storage and playback
- [ ] Multi-camera support
- [ ] API for external system integration
- [ ] Machine learning model configuration UI
- [ ] Export and reporting features
- [ ] User authentication and role management

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

---

**Note**: This is a dashboard interface for autonomous robotics vision systems. For integration with actual hardware and vision processing backends, additional configuration and setup will be required.
