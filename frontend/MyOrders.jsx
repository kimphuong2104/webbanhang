// src/MyOrders.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './src/AuthContext';

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user && user._id) {
      axios.get(`http://localhost:3000/orders/user/${user._id}`)
        .then(res => setOrders(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  if (!user) return <div style={{padding: '20px'}}>Vui lòng đăng nhập để xem đơn hàng.</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>📦 Đơn hàng của tôi</h1>
      {orders.length === 0 ? <p>Bạn chưa mua đơn hàng nào.</p> : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {orders.map(order => (
            <div key={order._id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
                <div>
                  <strong>Mã đơn:</strong> {order._id.slice(-6)} <br/>
                  <small>{new Date(order.createdAt).toLocaleString()}</small>
                </div>
                <div>
                  <span style={{ 
                    padding: '5px 10px', borderRadius: '15px', color: 'white',
                    background: order.status === 'pending' ? 'orange' : order.status === 'completed' ? 'green' : 'red'
                  }}>
                    {order.status === 'pending' ? 'Chờ xử lý' : order.status === 'completed' ? 'Hoàn thành' : order.status}
                  </span>
                </div>
              </div>

              {/* Danh sách món trong đơn */}
              {order.items.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <img src={item.thumbnail} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px', marginRight: '10px' }} />
                  <div style={{ flex: 1 }}>
                    {item.title} <span style={{color: 'gray'}}>x{item.quantity}</span>
                  </div>
                  <div>${item.price * item.quantity}</div>
                </div>
              ))}
              
              <div style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold', fontSize: '1.2rem', color: '#ff424e' }}>
                Tổng tiền: ${order.totalPrice}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;