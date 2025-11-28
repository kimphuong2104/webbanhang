import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate

import { useAuth } from './AuthContext'; // <--- Import kho User

function Navbar() {
  const { user, logout } = useAuth(); // <--- Lấy user và hàm logout
  const navigate = useNavigate();

  // Hàm xử lý khi bấm đăng xuất
  const handleLogout = () => {
    logout();
    navigate('/login'); // Quay về trang đăng nhập
  };
  return (
    <nav style={{ padding: '15px', background: '#333', color: 'white', display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Trang chủ</Link>
      
      {/* ĐIỀU KIỆN HIỂN THỊ Ở ĐÂY */}
      {user ? (
        // TRƯỜNG HỢP 1: ĐÃ ĐĂNG NHẬP
        <>
          <span style={{ color: '#00ff00', fontWeight: 'bold' }}>
            👤 Xin chào, {user.name}
          </span>
          <button 
            onClick={handleLogout} 
            style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
          >
            Đăng xuất
          </button>
        </>
      ) : (
        // TRƯỜNG HỢP 2: CHƯA ĐĂNG NHẬP
        <>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Đăng nhập</Link>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Đăng ký</Link>
        </>
      )}

    
    </nav>
  );
}

export default Navbar;