// src/Login.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Dùng để chuyển trang tự động
import { useAuth } from './AuthContext'; // <--- 1. Import kho
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook để điều hướng
  const { login } = useAuth(); // <--- 2. Lấy hàm login từ kho
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email,
        password: password
      });
      alert('✅ Đăng nhập thành công');
      localStorage.setItem('token', response.data.access_token); // Lưu token vào localStorage
      login(response.data.user);
      navigate('/'); // Đăng nhập xong tự chuyển về trang chủ
      console.log("User Info:", response.data.user);
    } catch (error) {
      // Lấy lỗi từ Backend trả về
      alert('❌ ' + (error.response?.data?.message || 'Lỗi đăng nhập'));
    }
  };

  return (
    <div style={{ 
      maxWidth: '420px', 
      margin: '80px auto', 
      padding: '40px', 
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(10px)'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#667eea', 
        marginBottom: '30px',
        fontSize: '2rem'
      }}>
        🔑 Đăng nhập
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          color: '#4a5568',
          fontWeight: '600'
        }}>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{ 
            width: '100%', 
            padding: '12px 16px', 
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </div>

      <div style={{ marginBottom: '25px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          color: '#4a5568',
          fontWeight: '600'
        }}>Mật khẩu:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={{ 
            width: '100%', 
            padding: '12px 16px', 
            border: '2px solid #e2e8f0',
            borderRadius: '10px',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
        />
      </div>

      <button 
        onClick={handleLogin} 
        style={{ 
          width: '100%', 
          padding: '14px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          borderRadius: '10px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        Đăng nhập
      </button>

      <div style={{ 
        margin: '20px 0', 
        textAlign: 'center', 
        color: '#a0aec0',
        fontSize: '0.9rem'
      }}>
        hoặc
      </div>

      <button 
        onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
        style={{ 
          width: '100%', 
          padding: '14px', 
          background: 'white',
          color: '#4285f4', 
          border: '2px solid #4285f4', 
          cursor: 'pointer',
          borderRadius: '10px',
          fontSize: '1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#4285f4';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.color = '#4285f4';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path fill="currentColor" d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"/>
          <path fill="currentColor" d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"/>
          <path fill="currentColor" d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"/>
          <path fill="currentColor" d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"/>
        </svg>
        Đăng nhập bằng Google
      </button>
    </div>
  );
}

export default Login;