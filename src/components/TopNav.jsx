import React from 'react'
import { Layout, Button, Space, Switch, Typography } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  BulbOutlined
} from '@ant-design/icons'

const { Header } = Layout
const { Text } = Typography

const TopNav = ({ collapsed, setCollapsed, darkMode, setDarkMode }) => {
  return (
    <Header style={{
      padding: '0 24px',
      background: darkMode ? '#141414' : '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: `1px solid ${darkMode ? '#303030' : '#f0f0f0'}`,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      marginLeft: collapsed ? 0 : 200,
      transition: 'margin-left 0.2s'
    }}>
      <Space align="center">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Text strong style={{ fontSize: '20px', marginLeft: '16px' }}>
          Admin Panel
        </Text>
      </Space>
      
      <Space align="center">
        <BulbOutlined />
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          size="small"
        />
        <Button
          type="text"
          icon={<SettingOutlined />}
          style={{ fontSize: '16px' }}
        />
      </Space>
    </Header>
  )
}

export default TopNav