// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; // <--- Thêm dòng này
import { AuthProvider } from './AuthContext'; // <--- Thêm dòng này

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- Bao bọc App bằng cái này */}
      <AuthProvider> {/* <--- Bọc thêm cái kho User này nữa */}
        
          <App />
        
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)