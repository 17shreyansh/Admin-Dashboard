import React from 'react'
import { Row, Col, Card, Statistic, Typography, Progress } from 'antd'
import {
  PhoneOutlined,
  CalendarOutlined,
  BarChartOutlined,
  TrophyOutlined,
  RiseOutlined,
  FallOutlined
} from '@ant-design/icons'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { dashboardStats } from '../data/mockData'
import {
  callsOverTimeData,
  callStatusData,
  hourlyDistributionData,
  userActivityData,
  performanceData
} from '../data/chartData'

const { Title, Text } = Typography

const Dashboard = () => {
  const statsCards = [
    {
      title: 'Calls Today',
      value: dashboardStats.today,
      icon: <PhoneOutlined style={{ color: '#1890ff' }} />,
      color: '#1890ff'
    },
    {
      title: 'Calls This Week',
      value: dashboardStats.thisWeek,
      icon: <CalendarOutlined style={{ color: '#52c41a' }} />,
      color: '#52c41a'
    },
    {
      title: 'Calls This Month',
      value: dashboardStats.thisMonth,
      icon: <BarChartOutlined style={{ color: '#faad14' }} />,
      color: '#faad14'
    },
    {
      title: 'Total Performance',
      value: 98.5,
      suffix: '%',
      icon: <TrophyOutlined style={{ color: '#f5222d' }} />,
      color: '#f5222d'
    }
  ]

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>Dashboard</Title>
      
      <Row gutter={[24, 24]}>
        {statsCards.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              style={{
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: `1px solid ${stat.color}20`
              }}
              styles={{ body: { padding: '24px' } }}
            >
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '8px',
                  color: '#8c8c8c'
                }}>
                  {stat.icon}
                  {stat.title}
                </div>
                <div style={{
                  color: stat.color,
                  fontSize: '28px',
                  fontWeight: 'bold'
                }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Section */}
      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={16}>
          <Card
            title={<span><RiseOutlined style={{ marginRight: '8px', color: '#52c41a' }} />Calls Over Time</span>}
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={callsOverTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #d9d9d9',
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="calls"
                  stroke="#1890ff"
                  strokeWidth={3}
                  dot={{ fill: '#1890ff', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#1890ff', strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="successful"
                  stroke="#52c41a"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card
            title="Call Status Distribution"
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={callStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {callStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [value.toLocaleString(), 'Calls']}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #d9d9d9',
                    borderRadius: '6px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Second Row of Charts */}
      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={12}>
          <Card
            title="Hourly Call Distribution"
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hourlyDistributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="hour" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #d9d9d9',
                    borderRadius: '6px'
                  }}
                />
                <Bar
                  dataKey="calls"
                  fill={(entry) => entry?.peak ? '#1890ff' : '#91d5ff'}
                  radius={[4, 4, 0, 0]}
                >
                  {hourlyDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.peak ? '#1890ff' : '#91d5ff'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card
            title="User Activity Trends"
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#8c8c8c" />
                <YAxis stroke="#8c8c8c" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #d9d9d9',
                    borderRadius: '6px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="activeUsers"
                  stackId="1"
                  stroke="#1890ff"
                  fill="#1890ff"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="newUsers"
                  stackId="1"
                  stroke="#52c41a"
                  fill="#52c41a"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Performance Metrics */}
      <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
        <Col xs={24}>
          <Card
            title="System Performance"
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <Row gutter={[24, 24]}>
              {performanceData.map((metric, index) => (
                <Col xs={12} sm={6} key={index}>
                  <div style={{ textAlign: 'center' }}>
                    <Text strong style={{ fontSize: '16px', display: 'block', marginBottom: '12px' }}>
                      {metric.name}
                    </Text>
                    <Progress
                      type="circle"
                      percent={metric.value}
                      strokeColor={{
                        '0%': metric.color,
                        '100%': metric.color,
                      }}
                      strokeWidth={8}
                      size={80}
                      format={(percent) => `${percent}%`}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard