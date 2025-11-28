import {useCart} from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart(){
    const {cart, removeFromCart, updateQuantity, totalPrice} = useCart();
    const navigate = useNavigate();
    
    if (cart.length === 0) {
        return (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '80px',
              padding: '40px 20px'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>😢</div>
              <h2 style={{ color: '#b0b0b0', fontSize: '2rem', marginBottom: '30px' }}>
                Giỏ hàng trống trơn
              </h2>
              <p style={{ color: '#888', marginBottom: '40px', fontSize: '1.1rem' }}>
                Hãy quay lại và thêm một số sản phẩm yêu thích vào giỏ
              </p>
              <button 
                onClick={() => navigate('/')} 
                style={{ 
                  padding: '12px 35px', 
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
                  color: '#0f0f1e',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 212, 255, 0.3)';
                }}
              >
                ← Quay lại mua sắm
              </button>
            </div>
        );
    }
    
    return (
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontSize: '2.5rem',
          marginBottom: '40px',
          fontWeight: '800'
        }}>
          🛒 Giỏ hàng của bạn
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '30px' }}>
          {/* Danh sách sản phẩm */}
          <div>
            {cart.map((item) => (
              <div 
                key={item._id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '15px',
                  transition: 'all 0.3s ease',
                  gap: '20px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
                }}
              >
                
                {/* Ảnh */}
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    border: '2px solid rgba(0, 212, 255, 0.3)'
                  }} 
                />
                
                {/* Tên & Giá */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0',
                    color: '#e0e0e0',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#00d4ff', 
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    margin: '0',
                    textShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
                  }}>
                    ${item.price}
                  </p>
                  <p style={{
                    color: '#888',
                    fontSize: '0.9rem',
                    margin: '5px 0 0 0'
                  }}>
                    Tổng: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Bộ tăng giảm số lượng */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 212, 255, 0.3)'
                }}>
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                    style={{ 
                      width: '32px', 
                      height: '32px',
                      background: 'rgba(0, 212, 255, 0.2)',
                      color: '#00d4ff',
                      border: '1px solid rgba(0, 212, 255, 0.4)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)';
                    }}
                  >
                    −
                  </button>
                  <span style={{ 
                    fontWeight: '700',
                    color: '#e0e0e0',
                    minWidth: '30px',
                    textAlign: 'center',
                    fontSize: '1.1rem'
                  }}>
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    style={{ 
                      width: '32px', 
                      height: '32px',
                      background: 'rgba(0, 212, 255, 0.2)',
                      color: '#00d4ff',
                      border: '1px solid rgba(0, 212, 255, 0.4)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)';
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Nút xóa */}
                <button 
                  onClick={() => removeFromCart(item._id)}
                  style={{ 
                    background: 'rgba(255, 68, 68, 0.2)',
                    color: '#ff4444',
                    border: '1px solid rgba(255, 68, 68, 0.4)',
                    padding: '10px 16px', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 68, 68, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
                  }}
                >
                  🗑️ Xóa
                </button>
              </div>
            ))}
          </div>

          {/* Sidebar tổng tiền */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '12px',
            padding: '30px',
            height: 'fit-content',
            position: 'sticky',
            top: '100px',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.1)'
          }}>
            <h2 style={{
              color: '#00d4ff',
              marginBottom: '25px',
              textAlign: 'center',
              fontSize: '1.3rem',
              fontWeight: '800',
              textShadow: '0 0 10px rgba(0, 212, 255, 0.3)'
            }}>
              Tóm tắt đơn hàng
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '12px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
                color: '#b0b0b0'
              }}>
                <span>Số sản phẩm:</span>
                <span style={{ fontWeight: '700' }}>
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '12px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
                color: '#b0b0b0'
              }}>
                <span>Tiền hàng:</span>
                <span style={{ fontWeight: '700', color: '#e0e0e0' }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '12px',
                paddingBottom: '12px',
                borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
                color: '#b0b0b0'
              }}>
                <span>Vận chuyển:</span>
                <span style={{ fontWeight: '700', color: '#2ecc71' }}>Miễn phí</span>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              marginBottom: '25px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{ color: '#b0b0b0', fontSize: '1.05rem' }}>Tổng cộng:</span>
                <span style={{ 
                  color: '#00d4ff', 
                  fontSize: '2rem', 
                  fontWeight: '900',
                  textShadow: '0 0 15px rgba(0, 212, 255, 0.4)'
                }}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button 
              style={{ 
                width: '100%',
                background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
                color: '#0f0f1e',
                padding: '14px 20px', 
                fontSize: '1.1rem', 
                fontWeight: '700',
                border: 'none', 
                borderRadius: '8px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
                marginBottom: '12px',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 212, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.3)';
              }}
                onClick={() => navigate('/checkout')}
            >
              💳 Thanh Toán Ngay
            </button>

            <button 
              onClick={() => navigate('/')}
              style={{ 
                width: '100%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#b0b0b0',
                padding: '12px 20px', 
                fontSize: '1rem', 
                fontWeight: '600',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '8px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.color = '#00d4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#b0b0b0';
              }}
            >
              ← Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    );
}
export default Cart;
