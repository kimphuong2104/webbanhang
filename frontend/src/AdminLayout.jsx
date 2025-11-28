// src/AdminLayout.jsx
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Bảo mật cơ bản: Nếu chưa đăng nhập thì đá về trang login
  useEffect(() => {
    if (!user) {
      alert("Bạn cần đăng nhập để vào Admin!");
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      {/* 1. SIDEBAR (Thanh bên trái) */}
      <div style={{ width: '250px', background: '#2c3e50', color: 'white', padding: '20px' }}>
        <h2 style={{ borderBottom: '1px solid #7f8c8d', paddingBottom: '20px' }}>🤖 Admin Panel</h2>
        
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '3' }}>
          <li>
            <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>📊 Thống kê chung</Link>
          </li>
          <li>
            <Link to="/admin/products" style={{ color: 'white', textDecoration: 'none' }}>📦 Quản lý Sản phẩm</Link>
          </li>
          <li>
            <Link to="/admin/orders" style={{ color: 'white', textDecoration: 'none' }}>🛒 Quản lý Đơn hàng</Link>
          </li>
          <li>
            <Link to="/" style={{ color: '#f1c40f', textDecoration: 'none' }}>🏠 Về trang chủ</Link>
          </li>
        </ul>

        <button 
          onClick={logout} 
          style={{ marginTop: '50px', width: '100%', padding: '10px', background: '#c0392b', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Đăng xuất
        </button>
      </div>

      {/* 2. MAIN CONTENT (Nội dung thay đổi) */}
      <div style={{ flex: 1, padding: '20px', background: '#ecf0f1' }}>
        {/* <Outlet /> là nơi các trang con (Dashboard, Products...) sẽ hiện ra */}
        <Outlet /> 
      </div>

    </div>
  );
}

export default AdminLayout;