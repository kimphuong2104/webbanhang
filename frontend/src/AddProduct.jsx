// src/AddProduct.jsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    thumbnail: '', // Ở đây mình nhập link ảnh cho nhanh
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/products', formData);
      alert('✅ Thêm sản phẩm thành công!');
      navigate('/admin'); // Quay về trang admin
    } catch (error) {
      alert('❌ Lỗi khi thêm!');
    }
  };

  // CSS đơn giản cho input
  const inputStyle = { width: '100%', padding: '8px', marginBottom: '10px', display: 'block' };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <label>Tên sản phẩm:</label>
        <input name="title" onChange={handleChange} style={inputStyle} required />

        <label>Giá ($):</label>
        <input name="price" type="number" onChange={handleChange} style={inputStyle} required />

        <label>Danh mục (VD: smartphones):</label>
        <input name="category" onChange={handleChange} style={inputStyle} required />

        <label>Link ảnh (URL):</label>
        <input name="thumbnail" onChange={handleChange} style={inputStyle} required placeholder="https://..." />

        <label>Mô tả:</label>
        <textarea name="description" onChange={handleChange} rows="4" style={inputStyle}></textarea>

        <button type="submit" style={{ width: '100%', padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Lưu sản phẩm
        </button>
      </form>
    </div>
  );
}

export default AddProduct;