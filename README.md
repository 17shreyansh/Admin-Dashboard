# High-End Responsive Admin Panel

A modern, responsive admin panel built with React, Vite, and Ant Design featuring amazing interactive charts and visualizations.

## Features

- 🎨 **Modern UI**: Clean, professional design inspired by SaaS dashboards
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 📊 **Amazing Charts**: Interactive line charts, pie charts, bar charts, and area charts
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 🔍 **Search & Filter**: Advanced filtering on users table and logs
- ⚡ **Animated Counters**: Smooth number animations on statistics
- 🎯 **Performance Metrics**: Real-time system performance indicators

## Tech Stack

- **React 18** - Modern React with functional components
- **Vite** - Fast build tool and dev server
- **Ant Design 5** - Professional UI component library
- **React Router DOM** - Client-side routing
- **Recharts** - Beautiful, composable charts
- **Faker.js** - Mock data generation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.jsx     # Navigation sidebar
│   ├── TopNav.jsx      # Top navigation bar
│   └── AnimatedCounter.jsx # Animated number counter
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard with charts
│   ├── Users.jsx       # Users management table
│   ├── Settings.jsx    # Application settings
│   └── Logs.jsx        # System logs viewer
├── data/               # Mock data
│   ├── mockData.js     # Basic mock data
│   └── chartData.js    # Chart-specific data
└── App.jsx             # Main application component
```

## Features Overview

### Dashboard
- Real-time statistics with animated counters
- Interactive line chart showing calls over time
- Pie chart for call status distribution
- Bar chart for hourly call distribution
- Area chart for user activity trends
- Circular progress indicators for system performance

### Users Page
- Responsive data table with user information
- Search functionality across username and location
- Status filtering (online/offline)
- Pagination and sorting capabilities

### Settings Page
- Organized settings groups (Appearance, Notifications, Localization)
- Dark mode toggle integration
- Form validation and save functionality
- Professional card-based layout

### Logs Page
- Filterable system logs with search
- Color-coded log types (info, warning, error)
- Date range filtering
- Detailed log information display

## Responsive Design

- **Desktop**: Full sidebar navigation with expanded content
- **Tablet**: Collapsible sidebar with optimized layouts
- **Mobile**: Hidden sidebar with hamburger menu, stacked cards

## Customization

The admin panel uses Ant Design's theming system and can be easily customized by modifying the theme configuration in `App.jsx`.

## License

MIT License - feel free to use this project for your own applications.