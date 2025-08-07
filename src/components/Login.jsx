import React, { useState } from 'react'
import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import logo from '../assets/logo.svg'

const { Title, Text } = Typography

const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false)

  const handleLogin = async (values) => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      if (values.username === 'admin' && values.password === 'admin123') {
        message.success('Login successful!')
        onLogin()
      } else {
        message.error('Invalid credentials! Use admin/admin123')
      }
      setLoading(false)
    }, 1500)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <AnimatedBackground />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card
          style={{
            width: 400,
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 10
          }}
          bodyStyle={{ padding: '40px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '32px' }}
          >
            <img src={logo} alt="Logo" style={{ marginBottom: '16px' }} />
            <Title level={2} style={{ margin: 0, color: '#1890ff' }}>
              Welcome Back
            </Title>
            <Text type="secondary">Sign in to your account</Text>
          </motion.div>

          <Form
            name="login"
            onFinish={handleLogin}
            autoComplete="off"
            size="large"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: '#1890ff' }} />}
                  placeholder="Username"
                  style={{
                    borderRadius: '8px',
                    height: '48px',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                />
              </Form.Item>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: '#1890ff' }} />}
                  placeholder="Password"
                  style={{
                    borderRadius: '8px',
                    height: '48px',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease'
                  }}
                />
              </Form.Item>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{
                    width: '100%',
                    height: '48px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #1890ff, #096dd9)',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>
            </motion.div>
          </Form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ textAlign: 'center', marginTop: '16px' }}
          >
            <Text type="secondary" style={{ fontSize: '12px' }}>
              Demo credentials: admin / admin123
            </Text>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Login