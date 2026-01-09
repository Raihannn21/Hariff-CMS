import { useState, useEffect } from 'react'
import axiosInstance from './api/axios'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState({
    connected: false,
    loading: true,
    error: null,
    data: null
  })

  useEffect(() => {
    const checkBackendConnection = async () => {
      try {
        const response = await axiosInstance.get('/health-check')
        setBackendStatus({
          connected: true,
          loading: false,
          error: null,
          data: response.data
        })
      } catch (error) {
        setBackendStatus({
          connected: false,
          loading: false,
          error: error.message,
          data: null
        })
      }
    }

    checkBackendConnection()
  }, [])

  return (
    <div className="App">
      <h1>Hariff Projects - CMS</h1>
      
      <div className="status-card">
        <h2>Backend Connection Status</h2>
        
        {backendStatus.loading && (
          <p className="status loading">⏳ Checking connection...</p>
        )}
        
        {!backendStatus.loading && backendStatus.connected && (
          <div className="status-success">
            <p className="status connected">✅ Connected to Backend</p>
            <div className="status-details">
              <p><strong>Status:</strong> {backendStatus.data?.status}</p>
              <p><strong>Service:</strong> {backendStatus.data?.service}</p>
              <p><strong>Timestamp:</strong> {new Date(backendStatus.data?.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}
        
        {!backendStatus.loading && !backendStatus.connected && (
          <div className="status-error">
            <p className="status disconnected">❌ Failed to connect</p>
            <p className="error-message">{backendStatus.error}</p>
            <p className="help-text">
              Pastikan Laravel backend sudah berjalan di http://localhost:8000
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
