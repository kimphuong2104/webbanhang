import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import About from './About';
import News from './News';
import Contact from './Contact';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import './App.css';
import Admin from './Admin';
import AddProduct from './AddProduct';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import Checkout from './Checkout';
import MyOrders from '../MyOrders';
import AdminOrders from './AdminOrders';
  
// Map danh mục với icon tương ứng
const categoryIcons = {
  'smartphones': '📱',
  'laptops': '💻',
  'fragrances': '🌸',
  'skincare': '🧴',
  'groceries': '🛒',
  'home-decoration': '🏠',
  'furniture': '🛋️',
  'tops': '👕',
  'womens-dresses': '👗',
  'womens-shoes': '👠',
  'mens-shirts': '👔',
  'mens-shoes': '👞',
  'mens-watches': '⌚',
  'womens-watches': '⏰',
  'womens-bags': '👜',
  'womens-jewellery': '💍',
  'sunglasses': '🕶️',
  'automotive': '🚗',
  'motorcycle': '🏍️',
  'lighting': '💡'
};

// Tên hiển thị cho các danh mục
const categoryNames = {
  'smartphones': 'Điện thoại, Tablet',
  'laptops': 'Laptop',
  'fragrances': 'Nước hoa',
  'skincare': 'Chăm sóc da',
  'groceries': 'Thực phẩm',
  'home-decoration': 'Đồ gia dụng, Làm đẹp',
  'furniture': 'Nội thất',
  'tops': 'Áo thun',
  'womens-dresses': 'Váy nữ',
  'womens-shoes': 'Giày nữ',
  'mens-shirts': 'Áo sơ mi nam',
  'mens-shoes': 'Giày nam',
  'mens-watches': 'Đồng hồ nam',
  'womens-watches': 'Đồng hồ nữ',
  'womens-bags': 'Túi xách',
  'womens-jewellery': 'Trang sức',
  'sunglasses': 'Kính mát',
  'automotive': 'Ô tô',
  'motorcycle': 'Xe máy',
  'lighting': 'Đèn trang trí'
};

// Component Banner Slider
function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: 'SIÊU KHUYẾN MÃI\nTHỰC PHẨM TƯƠI SỐNG',
      oldPrice: '500.000',
      newPrice: '350.000',
      duration: 'Áp dụng từ 28.11 - 05.12',
      background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800'
    },
    {
      id: 2,
      title: 'GIẢM GIÁ SỐC\nĐỒ DÙNG GIA ĐÌNH',
      oldPrice: '800.000',
      newPrice: '550.000',
      duration: 'Chỉ trong tuần này',
      background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'
    },
    {
      id: 3,
      title: 'LAPTOP - ĐIỆN THOẠI\nGIÁ RẺ NHẤT THỊ TRƯỜNG',
      oldPrice: '15.000.000',
      newPrice: '12.500.000',
      duration: 'Flash Sale cuối tuần',
      background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-slider">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ background: banner.background }}
        >
          <div className="banner-content">
            <h1 style={{ whiteSpace: 'pre-line' }}>{banner.title}</h1>
            <div className="price-info">
              <span className="old-price">{banner.oldPrice}</span>
              <span className="new-price">→ {banner.newPrice}</span>
            </div>
            <div className="duration">{banner.duration}</div>
            <button className="banner-btn">MUA NGAY</button>
          </div>
        </div>
      ))}
      
      <div className="banner-arrows">
        <button className="arrow-btn" onClick={prevSlide}>‹</button>
        <button className="arrow-btn" onClick={nextSlide}>›</button>
      </div>
      
      <div className="banner-dots">
        {banners.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

// Tạo component Trang chủ riêng cho gọn
function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  // 1. Tạo các biến để lưu trạng thái bộ lọc
  const [keyword, setKeyword] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('desc'); // Mặc định giá giảm dần

  const fetchProducts = () => {
    const params={
      keyword: keyword,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: sort
    };
    axios.get('http://localhost:3000/products', {
      params: params
    })
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  // Gọi lần đầu khi vào trang
  useEffect(() => {
    fetchProducts();
  }, []); // Chỉ chạy 1 lần đầu
  const handleReset = () => {
    // 1. Xóa trắng các biến state (để giao diện sạch trơn)
    setKeyword('');
    setMinPrice('');
    setMaxPrice('');
    setSort('desc');
    setSelectedCategory('all'); // Quay về danh mục Tất cả

    // 2. Gọi API lấy lại toàn bộ 100% sản phẩm (không truyền params gì cả)
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };
  
  const categories = [...new Set(products.map(p => p.category))];
  
  // Lọc sản phẩm theo danh mục được chọn
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);
  

  return (
    <>
      {/* Banner Slider */}
      <BannerSlider />
      
      <div className="home-container">
        {/* Sidebar danh mục */}
        <aside className="category-sidebar">
          <h3 className="sidebar-title">🔍 Bộ lọc tìm kiếm</h3>
          
          <div style={{ padding: '0 15px 20px 15px' }}>
            {/* Ô tìm kiếm */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Tên sản phẩm:</label>
              <input 
                type="text" 
                placeholder="Ví dụ: iPhone..." 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            {/* Khoảng giá */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Khoảng giá ($):</label>
              <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
                <input 
                  type="number" placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
                  style={{ width: '50%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <input 
                  type="number" placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
                  style={{ width: '50%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
            </div>

            {/* Sắp xếp */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Sắp xếp giá:</label>
              <select 
                value={sort} 
                onChange={(e) => setSort(e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
              >
                <option value="asc">Thấp đến Cao</option>
                <option value="desc">Cao đến Thấp</option>
              </select>
            </div>

            {/* Nút Lọc */}
            <button 
              onClick={fetchProducts}
              style={{ width: '100%', padding: '10px', background: '#ff424e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Áp dụng
            </button>
            <button 
              onClick={handleReset}
              style={{ 
                width: '100%', 
                padding: '10px',
                marginTop: '10px', 
                background: 'white', // Nền trắng
                color: '#333',       // Chữ đen
                border: '1px solid #ccc', // Viền xám
                borderRadius: '4px', 
                cursor: 'pointer', 
                fontWeight: 'bold' 
              }}
            >
              🔄 Xóa bộ lọc (Xem tất cả)
            </button>
          </div>

          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '0 0 15px 0' }} />
        <h3 className="sidebar-title">📋 Danh mục sản phẩm</h3>
        <div className="category-list">
          <div 
            className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <span className="category-icon">🏪</span>
            <span>Tất cả sản phẩm</span>
            <span className="category-arrow">›</span>
          </div>
          
          {categories.map(category => (
            <div 
              key={category}
              className={`category-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="category-icon">{categoryIcons[category] || '📦'}</span>
              <span>{categoryNames[category] || category}</span>
              <span className="category-arrow">›</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Nội dung chính */}
      <main className="main-content">
          <h1 className="home-title">🛍️ Kết quả tìm kiếm ({products.length} sản phẩm)</h1>
          
          <div className="product-grid">
            {filteredProducts.map(p => (
              <div key={p._id} className="product-card" onClick={() => navigate(`/product/${p._id}`)}>
                <img src={p.thumbnail} alt={p.title} className="product-image" />
                <h3 className="product-title">{p.title}</h3>
                <div className="product-footer">
                  <span className="product-price">${p.price}</span>
                  <button onClick={(e) => { e.stopPropagation(); alert('...'); }} className="product-btn">Xem</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

// App chính

function App() {
  const { login } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const name = params.get('name');
    const id = params.get('id');
    if (token) {
      localStorage.setItem('token', token);
      login({ _id: id, name: name, email: 'google-login' });
      window.history.replaceState({}, document.title, "/");
      alert('✅ Đăng nhập thành công bằng Google');
      navigate('/');
    }
  }, [login, navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Admin />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="*" element={
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/my-orders" element={<MyOrders />} />
              
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;