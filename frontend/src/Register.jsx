// src/Register.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Dùng để chuyển trang tự động

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook để điều hướng

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/users/register', {
        name, email, password
      });
      alert('✅ Đăng ký thành công! Hãy đăng nhập.');
      navigate('/login'); // Đăng ký xong tự chuyển sang trang Login
    } catch (error) {
      alert('❌ ' + (error.response?.data?.message || 'Lỗi đăng ký'));
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
        ✨ Đăng ký tài khoản
      </h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          color: '#4a5568',
          fontWeight: '600'
        }}>Họ tên:</label>
        <input 
          type="text" 
          placeholder="Nguyễn Văn A" 
          value={name} 
          onChange={e => setName(e.target.value)} 
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

      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          color: '#4a5568',
          fontWeight: '600'
        }}>Email:</label>
        <input 
          type="email" 
          placeholder="your@email.com" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
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
          placeholder="••••••••" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
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
        onClick={handleRegister} 
        style={{
          width: '100%', 
          padding: '14px', 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          borderRadius: '10px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(245, 87, 108, 0.4)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        Đăng ký ngay
      </button>

      <p style={{
        textAlign: 'center',
        marginTop: '20px',
        color: '#718096',
        fontSize: '0.9rem'
      }}>
        Đã có tài khoản? <a href="/login" style={{ color: '#667eea', fontWeight: '600', textDecoration: 'none' }}>Đăng nhập</a>
      </p>
    </div>
  );
}

export default Register;