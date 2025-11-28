// src/Dashboard.jsx
function Dashboard() {
  return (
    <div>
      <h1>📊 Tổng quan cửa hàng</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        
        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>💰 Doanh thu tháng</h3>
          <p style={{ fontSize: '2rem', color: 'green', fontWeight: 'bold' }}>$12,500</p>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>📦 Tổng sản phẩm</h3>
          <p style={{ fontSize: '2rem', color: 'blue', fontWeight: 'bold' }}>105</p>
        </div>

        <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h3>👤 Khách hàng mới</h3>
          <p style={{ fontSize: '2rem', color: 'orange', fontWeight: 'bold' }}>32</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;