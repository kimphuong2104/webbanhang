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
    <div style={{ maxWidth: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Đăng nhập</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mật khẩu:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
      </div>

      <button onClick={handleLogin} style={{ width: '100%', padding: '10px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
        Đăng nhập
      </button>
      <button 
  onClick={() => window.location.href = 'http://localhost:3000/auth/google'}
  style={{ width: '100%', padding: '10px', background: '#db4437', color: 'white', border: 'none', marginTop: '10px', cursor: 'pointer' }}
>
  Đăng nhập bằng Google
</button>
    </div>
  );
}

export default Login;