import { faker } from '@faker-js/faker'

// Line chart data for calls over time
export const callsOverTimeData = Array.from({ length: 30 }, (_, index) => ({
  date: new Date(Date.now() - (29 - index) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  calls: faker.number.int({ min: 800, max: 1500 }),
  successful: faker.number.int({ min: 700, max: 1400 }),
  failed: faker.number.int({ min: 50, max: 200 })
}))

// Pie chart data for call status distribution
export const callStatusData = [
  { name: 'Successful', value: 8934, color: '#52c41a' },
  { name: 'Failed', value: 1234, color: '#f5222d' },
  { name: 'Pending', value: 567, color: '#faad14' },
  { name: 'Cancelled', value: 234, color: '#d9d9d9' }
]

// Bar chart data for hourly distribution
export const hourlyDistributionData = Array.from({ length: 24 }, (_, hour) => ({
  hour: `${hour.toString().padStart(2, '0')}:00`,
  calls: faker.number.int({ min: 50, max: 300 }),
  peak: hour >= 9 && hour <= 17
}))

// Area chart data for user activity
export const userActivityData = Array.from({ length: 12 }, (_, index) => ({
  month: new Date(2024, index, 1).toLocaleDateString('en-US', { month: 'short' }),
  activeUsers: faker.number.int({ min: 1000, max: 5000 }),
  newUsers: faker.number.int({ min: 200, max: 800 }),
  returningUsers: faker.number.int({ min: 800, max: 4200 })
}))

// Gauge chart data for performance metrics
export const performanceData = [
  { name: 'CPU Usage', value: 67, max: 100, color: '#1890ff' },
  { name: 'Memory', value: 84, max: 100, color: '#52c41a' },
  { name: 'Disk I/O', value: 45, max: 100, color: '#faad14' },
  { name: 'Network', value: 92, max: 100, color: '#f5222d' }
]