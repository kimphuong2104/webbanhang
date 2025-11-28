import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate

import { useAuth } from './AuthContext'; // <--- Import kho User
import { useCart } from './CartContext'; // <--- Import kho Giỏ hàng

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const {cart} = useCart();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ 
      padding: '16px 40px', 
      background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%)',
      backdropFilter: 'blur(10px)',
      color: '#e0e0e0', 
      display: 'flex', 
      gap: '40px', 
      alignItems: 'center',
      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1), 0 0 1px rgba(0, 212, 255, 0.3)',
      borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo */}
      <Link to="/" style={{ 
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textDecoration: 'none', 
        fontWeight: 900,
        fontSize: '1.9rem',
        transition: 'all 0.3s ease',
        display: 'inline-block'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.filter = 'none';
      }}
      >
        🛒 Siêu Thị Mini

      </Link>
      <Link to="/admin" style={{ color: '#2ecc71', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#2ecc71'}
      >⚙️ Admin</Link>
      
      {/* Menu điều hướng */}
      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          color: '#b0b0b0', 
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.textShadow = 'none';
        }}
        >
          TRANG CHỦ
        </Link>
        <Link to="/about" style={{ 
          color: '#b0b0b0', 
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.textShadow = 'none';
        }}
        >
          GIỚI THIỆU
        </Link>
        <Link to="/" style={{ 
          color: '#b0b0b0', 
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.textShadow = 'none';
        }}
        >
          SẢN PHẨM
        </Link>
        <Link to="/news" style={{ 
          color: '#b0b0b0', 
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.textShadow = 'none';
        }}
        >
          TIN TỨC
        </Link>
        <Link to="/contact" style={{ 
          color: '#b0b0b0', 
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.textShadow = 'none';
        }}
        >
          LIÊN HỆ
        </Link>
      </div>
      
      {/* User actions & icons */}
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <button style={{ 
          background: 'none', 
          border: 'none', 
          fontSize: '1.5rem', 
          cursor: 'pointer',
          color: '#b0b0b0',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#00d4ff';
          e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.4))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#b0b0b0';
          e.currentTarget.style.filter = 'none';
        }}
        >
          🔍
        </button>
        
        {user ? (
          <>
            <span style={{ 
              color: '#00d4ff', 
              fontWeight: '700',
              fontSize: '0.95rem',
              textShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
            }}>
              👤 {user.name}
            </span>
            <Link to="/cart" style={{ 
              color: '#2ecc71', 
              textDecoration: 'none', 
              fontWeight: '700',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00d4ff';
              e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#2ecc71';
              e.currentTarget.style.textShadow = 'none';
            }}
            >
              🛒 ({cart.reduce((total, item) => total + item.quantity, 0)})
            </Link>
            <Link to="/my-orders" style={{ color: 'white', textDecoration: 'none', marginLeft: '10px' }}>📦 Đơn hàng</Link>
            <button 
              onClick={handleLogout} 
              style={{ 
                background: 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)',
                color: 'white', 
                border: 'none', 
                padding: '8px 20px', 
                cursor: 'pointer', 
                borderRadius: '6px',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 68, 68, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 68, 68, 0.3)';
              }}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ 
              color: '#b0b0b0', 
              textDecoration: 'none',
              fontWeight: '700',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00d4ff';
              e.currentTarget.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b0b0b0';
              e.currentTarget.style.textShadow = 'none';
            }}
            >
              Đăng nhập
            </Link>
            <Link to="/register" style={{ 
              color: '#0f0f1e', 
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
              padding: '10px 22px',
              borderRadius: '6px',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
            }}
            >
              Đăng ký
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;