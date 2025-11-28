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
    <div style={{ maxWidth: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Đăng ký tài khoản</h2>
      <input type="text" placeholder="Họ tên" value={name} onChange={e => setName(e.target.value)} style={{width: '100%', padding: '8px', marginBottom: '10px'}} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{width: '100%', padding: '8px', marginBottom: '10px'}} />
      <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} style={{width: '100%', padding: '8px', marginBottom: '10px'}} />
      <button onClick={handleRegister} style={{width: '100%', padding: '10px', background: 'orange', color: 'white', border: 'none', cursor: 'pointer'}}>Đăng ký ngay</button>
    </div>
  );
}

export default Register;