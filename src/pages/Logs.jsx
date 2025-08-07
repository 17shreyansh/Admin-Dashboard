import React, { useState } from 'react'
import { Card, List, Tag, Typography, Space, Input, Select, DatePicker } from 'antd'
import { SearchOutlined, InfoCircleOutlined, WarningOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { faker } from '@faker-js/faker'

const { Title, Text } = Typography
const { RangePicker } = DatePicker
const { Option } = Select

// Generate mock log data
const generateLogs = () => {
  const logTypes = ['info', 'warning', 'error']
  const actions = ['User Login', 'Data Export', 'Settings Changed', 'File Upload', 'API Call', 'Database Query']
  
  return Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    timestamp: faker.date.recent({ days: 30 }).toISOString(),
    type: faker.helpers.arrayElement(logTypes),
    action: faker.helpers.arrayElement(actions),
    user: faker.internet.userName(),
    details: faker.lorem.sentence(),
    ip: faker.internet.ip()
  }))
}

const Logs = () => {
  const [logs] = useState(generateLogs())
  const [searchText, setSearchText] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [filteredLogs, setFilteredLogs] = useState(logs)

  const getLogIcon = (type) => {
    switch (type) {
      case 'info': return <InfoCircleOutlined style={{ color: '#1890ff' }} />
      case 'warning': return <WarningOutlined style={{ color: '#faad14' }} />
      case 'error': return <CloseCircleOutlined style={{ color: '#f5222d' }} />
      default: return <InfoCircleOutlined />
    }
  }

  const getLogColor = (type) => {
    switch (type) {
      case 'info': return 'blue'
      case 'warning': return 'orange'
      case 'error': return 'red'
      default: return 'default'
    }
  }

  const handleFilter = () => {
    let filtered = logs
    
    if (searchText) {
      filtered = filtered.filter(log =>
        log.action.toLowerCase().includes(searchText.toLowerCase()) ||
        log.user.toLowerCase().includes(searchText.toLowerCase()) ||
        log.details.toLowerCase().includes(searchText.toLowerCase())
      )
    }
    
    if (typeFilter !== 'all') {
      filtered = filtered.filter(log => log.type === typeFilter)
    }
    
    setFilteredLogs(filtered)
  }

  React.useEffect(() => {
    handleFilter()
  }, [searchText, typeFilter])

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>System Logs</Title>
      
      <Card style={{ marginBottom: '24px', borderRadius: '12px' }}>
        <Space wrap style={{ marginBottom: '16px' }}>
          <Input
            placeholder="Search logs..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
          />
          <Select
            value={typeFilter}
            onChange={setTypeFilter}
            style={{ width: 120 }}
          >
            <Option value="all">All Types</Option>
            <Option value="info">Info</Option>
            <Option value="warning">Warning</Option>
            <Option value="error">Error</Option>
          </Select>
          <RangePicker style={{ width: 300 }} />
        </Space>
        
        <List
          dataSource={filteredLogs}
          pagination={{
            pageSize: 20,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} logs`,
          }}
          renderItem={(log) => (
            <List.Item
              style={{
                padding: '16px',
                borderRadius: '8px',
                marginBottom: '8px',
                border: '1px solid #f0f0f0',
                backgroundColor: '#fafafa'
              }}
            >
              <List.Item.Meta
                avatar={getLogIcon(log.type)}
                title={
                  <Space>
                    <Text strong>{log.action}</Text>
                    <Tag color={getLogColor(log.type)}>{log.type.toUpperCase()}</Tag>
                  </Space>
                }
                description={
                  <Space direction="vertical" size="small">
                    <Text>{log.details}</Text>
                    <Space>
                      <Text type="secondary">User: {log.user}</Text>
                      <Text type="secondary">IP: {log.ip}</Text>
                      <Text type="secondary">
                        {new Date(log.timestamp).toLocaleString()}
                      </Text>
                    </Space>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default Logs