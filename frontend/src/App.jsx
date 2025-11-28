import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

// Tạo component Trang chủ riêng cho gọn
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map(p => (
          <div key={p._id} style={{ border: '1px solid #ddd', padding: '10px' }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{p.title}</h3>
            <p style={{ color: 'red' }}>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// App chính
function App() {
  const {login} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const name = params.get('name');
    
    if (token) {
      localStorage.setItem('token', token);
      login({name: name, email: 'google-login'});

      window.history.replaceState({}, document.title, "/"); // Xóa tham số khỏi URL
      alert('✅ Đăng nhập thành công bằng Google');
      navigate('/');
    }
    }, [login, navigate]);
  return (
    <div>
      <Navbar /> {/* Menu luôn hiển thị ở trên cùng */}
      
      {/* Khu vực thay đổi nội dung tùy theo link */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;