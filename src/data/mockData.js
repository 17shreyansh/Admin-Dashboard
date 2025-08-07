import { faker } from '@faker-js/faker'

// Dashboard statistics
export const dashboardStats = {
  today: 1247,
  thisWeek: 8934,
  thisMonth: 34567
}

// Users data
export const usersData = Array.from({ length: 50 }, (_, index) => ({
  key: index + 1,
  id: index + 1,
  username: faker.internet.userName(),
  location: `${faker.location.city()}, ${faker.location.country()}`,
  loginTime: faker.date.recent({ days: 7 }).toLocaleString(),
  status: faker.helpers.arrayElement(['online', 'offline']),
  avatar: faker.image.avatar()
}))

// Settings data
export const settingsData = {
  darkMode: false,
  notifications: true,
  emailAlerts: false,
  language: 'en',
  timezone: 'UTC'
}