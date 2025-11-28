// src/AdminOrders.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get('http://localhost:3000/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}/status`, { status: newStatus });
      alert('✅ Cập nhật trạng thái thành công!');
      fetchOrders(); 
    } catch (error) {
      alert('❌ Lỗi cập nhật!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Quản lý Đơn hàng ({orders.length})</h1>
      
      <div style={{ overflowX: 'auto', background: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#34495e', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>Mã Đơn</th>
              <th style={{ padding: '15px' }}>Ngày đặt</th>
              <th style={{ padding: '15px' }}>Khách hàng</th>
              <th style={{ padding: '15px' }}>Tổng tiền</th>
              <th style={{ padding: '15px' }}>Trạng thái</th>
              <th style={{ padding: '15px' }}>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} style={{ borderBottom: '1px solid #eee' }}>
                
                {/* 1. Mã đơn rút gọn */}
                <td style={{ padding: '15px', fontWeight: 'bold', color: '#7f8c8d' }}>
                  #{order._id.slice(-6).toUpperCase()}
                </td>

                {/* 2. Ngày đặt (Format lại cho dễ đọc) */}
                <td style={{ padding: '15px', fontSize: '0.9rem' }}>
                  {new Date(order.createdAt).toLocaleString('vi-VN')}
                </td>

                {/* 3. Thông tin khách */}
                <td style={{ padding: '15px' }}>
                  <div style={{ fontWeight: 'bold' }}>{order.customerName}</div>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>📞 {order.phone}</div>
                  <div style={{ fontSize: '0.85rem', color: '#888', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    📍 {order.address}
                  </div>
                </td>

                {/* 4. Tổng tiền */}
                <td style={{ padding: '15px', color: '#e74c3c', fontWeight: 'bold' }}>
                  ${order.totalPrice.toLocaleString()}
                </td>

                {/* 5. Trạng thái (Dropdown) */}
                <td style={{ padding: '15px' }}>
                  <select 
                    value={order.status} 
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    style={{ 
                      padding: '5px', 
                      borderRadius: '4px', 
                      border: '1px solid #ccc',
                      background: order.status === 'completed' ? '#d4edda' : 'white',
                      fontWeight: order.status === 'completed' ? 'bold' : 'normal'
                    }}
                  >
                    <option value="pending">⏳ Chờ xử lý</option>
                    <option value="shipping">🚚 Đang giao</option>
                    <option value="completed">✅ Hoàn thành</option>
                    <option value="cancelled">❌ Đã hủy</option>
                  </select>
                </td>

                {/* 6. Chi tiết món hàng */}
                <td style={{ padding: '15px' }}>
                  <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '0.85rem', color: '#333' }}>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.title} <strong style={{ color: 'blue' }}>x{item.quantity}</strong>
                      </li>
                    ))}
                  </ul>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrders;