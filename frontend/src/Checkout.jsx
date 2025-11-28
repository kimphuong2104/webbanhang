// src/Checkout.jsx
import { useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth(); // Lấy thông tin user nếu đã đăng nhập
  const navigate = useNavigate();

  // Tự động điền tên nếu đã đăng nhập
  const [formData, setFormData] = useState({
    customerName: user ? user.name : '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Chuẩn bị dữ liệu gửi lên Backend
    const orderData = {
      userId: user ? user._id : 'guest', // Nếu chưa đăng nhập thì ghi là guest
      customerName: formData.customerName,
      phone: formData.phone,
      address: formData.address,
      items: cart,
      totalPrice: totalPrice
    };

    try {
      await axios.post('http://localhost:3000/orders', orderData);
      alert('🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm.');
      clearCart(); // Xóa giỏ hàng
      navigate('/'); // Quay về trang chủ
    } catch (error) {
      alert('❌ Lỗi đặt hàng, vui lòng thử lại.');
      console.error(error);
    }
  };

  if (cart.length === 0) {
    return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Giỏ hàng trống, không thể thanh toán!</h2>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', color: '#27ae60' }}>Thanh Toán</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', background: '#f9f9f9' }}>
        <h3>Tổng tiền cần thanh toán: <span style={{ color: 'red' }}>${totalPrice}</span></h3>
        <p>Số lượng món: {cart.length}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Họ và tên người nhận:</label>
          <input 
            name="customerName" 
            value={formData.customerName} 
            onChange={handleChange}
            required 
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Số điện thoại:</label>
          <input 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            required 
            type="tel"
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Địa chỉ giao hàng:</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange}
            required 
            rows="3"
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
          ></textarea>
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '15px', background: '#27ae60', color: 'white', border: 'none', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
        >
          XÁC NHẬN ĐẶT HÀNG
        </button>
      </form>
    </div>
  );
}

export default Checkout;