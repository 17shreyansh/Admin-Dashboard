import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout, ConfigProvider, theme } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Logs from './pages/Logs'

const { Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#1890ff',
            borderRadius: 8,
          },
        }}
      >
        <Login onLogin={() => setIsAuthenticated(true)} />
      </ConfigProvider>
    )
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 8,
        },
      }}
    >
      <Router>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Layout style={{ minHeight: '100vh' }}>
              <Sidebar collapsed={collapsed} />
              <Layout>
                <TopNav 
                  collapsed={collapsed} 
                  setCollapsed={setCollapsed}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  onLogout={() => setIsAuthenticated(false)}
                />
                <Content style={{ 
                  margin: '16px',
                  marginLeft: collapsed ? '16px' : '216px',
                  padding: '24px',
                  background: darkMode ? '#141414' : '#fff',
                  borderRadius: '8px',
                  minHeight: 'calc(100vh - 112px)',
                  transition: 'margin-left 0.2s'
                }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/settings" element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
                    <Route path="/logs" element={<Logs />} />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </motion.div>
        </AnimatePresence>
      </Router>
    </ConfigProvider>
  )
}

export default App