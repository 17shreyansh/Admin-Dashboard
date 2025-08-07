import React, { useState } from 'react'
import { Card, Form, Switch, Select, Input, Button, Typography, Space, Divider, message } from 'antd'
import { SaveOutlined, BulbOutlined, BellOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons'
import { settingsData } from '../data/mockData'

const { Title, Text } = Typography
const { Option } = Select

const Settings = ({ darkMode, setDarkMode }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleSave = async (values) => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      message.success('Settings saved successfully!')
    }, 1000)
  }

  const settingsGroups = [
    {
      title: 'Appearance',
      icon: <BulbOutlined />,
      items: [
        {
          name: 'darkMode',
          label: 'Dark Mode',
          component: <Switch checked={darkMode} onChange={setDarkMode} />,
          description: 'Toggle between light and dark theme'
        }
      ]
    },
    {
      title: 'Notifications',
      icon: <BellOutlined />,
      items: [
        {
          name: 'notifications',
          label: 'Push Notifications',
          component: <Switch defaultChecked={settingsData.notifications} />,
          description: 'Receive push notifications for important updates'
        },
        {
          name: 'emailAlerts',
          label: 'Email Alerts',
          component: <Switch defaultChecked={settingsData.emailAlerts} />,
          description: 'Get email notifications for critical events'
        }
      ]
    },
    {
      title: 'Localization',
      icon: <GlobalOutlined />,
      items: [
        {
          name: 'language',
          label: 'Language',
          component: (
            <Select defaultValue={settingsData.language} style={{ width: 200 }}>
              <Option value="en">English</Option>
              <Option value="es">Spanish</Option>
              <Option value="fr">French</Option>
              <Option value="de">German</Option>
            </Select>
          ),
          description: 'Choose your preferred language'
        },
        {
          name: 'timezone',
          label: 'Timezone',
          component: (
            <Select defaultValue={settingsData.timezone} style={{ width: 200 }}>
              <Option value="UTC">UTC</Option>
              <Option value="EST">Eastern Time</Option>
              <Option value="PST">Pacific Time</Option>
              <Option value="GMT">Greenwich Mean Time</Option>
            </Select>
          ),
          description: 'Set your local timezone'
        }
      ]
    }
  ]

  return (
    <div>
      <Title level={2} style={{ marginBottom: '24px' }}>Settings</Title>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSave}
        initialValues={settingsData}
      >
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {settingsGroups.map((group, groupIndex) => (
            <Card
              key={groupIndex}
              title={
                <Space>
                  {group.icon}
                  <span>{group.title}</span>
                </Space>
              }
              style={{
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px 0'
                  }}>
                    <div style={{ flex: 1 }}>
                      <Text strong style={{ fontSize: '16px' }}>{item.label}</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: '14px' }}>
                        {item.description}
                      </Text>
                    </div>
                    <div>
                      {item.component}
                    </div>
                  </div>
                  {itemIndex < group.items.length - 1 && <Divider />}
                </div>
              ))}
            </Card>
          ))}
          
          <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
            <Button
              type="primary"
              size="large"
              icon={<SaveOutlined />}
              loading={loading}
              htmlType="submit"
              style={{
                borderRadius: '8px',
                height: '48px',
                paddingLeft: '32px',
                paddingRight: '32px'
              }}
            >
              Save Settings
            </Button>
          </Card>
        </Space>
      </Form>
    </div>
  )
}

export default Settings