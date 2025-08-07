import React, { useState } from 'react'
import { Table, Input, Select, Space, Tag, Avatar, Typography, Card } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { usersData } from '../data/mockData'

const { Title } = Typography
const { Option } = Select

const Users = () => {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredData = usersData.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchText.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchText.toLowerCase())
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const columns = [
    {
      title: 'User',
      dataIndex: 'username',
      key: 'username',
      render: (text, record) => (
        <Space>
          <Avatar src={record.avatar} icon={<UserOutlined />} />
          <span style={{ fontWeight: '500' }}>{text}</span>
        </Space>
      ),
      responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      responsive: ['sm', 'md', 'lg', 'xl'],
    },
    {
      title: 'Login Time',
      dataIndex: 'loginTime',
      key: 'loginTime',
      responsive: ['md', 'lg', 'xl'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'online' ? 'green' : 'default'}>
          {status.toUpperCase()}
        </Tag>
      ),
      responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  ]

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>Users</Title>
      
      <Card style={{ marginBottom: '24px', borderRadius: '12px' }}>
        <Space style={{ marginBottom: '16px', width: '100%' }} direction="vertical" size="middle">
          <Space wrap>
            <Input
              placeholder="Search users..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 300 }}
            />
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: 120 }}
            >
              <Option value="all">All Status</Option>
              <Option value="online">Online</Option>
              <Option value="offline">Offline</Option>
            </Select>
          </Space>
        </Space>
        
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
          }}
          scroll={{ x: 800 }}
          style={{
            borderRadius: '8px',
          }}
        />
      </Card>
    </div>
  )
}

export default Users