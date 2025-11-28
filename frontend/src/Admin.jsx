// src/Admin.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
  const [products, setProducts] = useState([]);

  // Lấy danh sách sản phẩm
  const fetchProducts = () => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Hàm xóa sản phẩm
  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này không?')) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        alert('Đã xóa thành công!');
        fetchProducts(); // Tải lại danh sách sau khi xóa
      } catch (error) {
        alert('Lỗi khi xóa!');
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>⚙️ Quản lý sản phẩm</h1>
        <Link to="/admin/add" style={{ background: 'green', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px' }}>
          + Thêm mới
        </Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#333', color: 'white' }}>
            <th style={{ padding: '10px' }}>Ảnh</th>
            <th style={{ padding: '10px' }}>Tên sản phẩm</th>
            <th style={{ padding: '10px' }}>Giá</th>
            <th style={{ padding: '10px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
              <td style={{ padding: '10px' }}>
                <img src={p.thumbnail} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{p.title}</td>
              <td style={{ padding: '10px', color: 'red' }}>${p.price}</td>
              <td style={{ padding: '10px' }}>
                <button 
                  onClick={() => handleDelete(p._id)}
                  style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;