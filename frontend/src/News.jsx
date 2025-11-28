import { useState } from 'react';

function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Khai trương chi nhánh thứ 50 tại Hà Nội',
      date: '25/11/2025',
      category: 'Sự kiện',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400',
      excerpt: 'Siêu Thị Mini vinh dự khai trương chi nhánh thứ 50 tại trung tâm Hà Nội với nhiều ưu đãi hấp dẫn dành cho khách hàng...',
      content: 'Chi nhánh mới có diện tích 2000m2, được trang bị hiện đại với đầy đủ các mặt hàng thiết yếu.'
    },
    {
      id: 2,
      title: 'Chương trình giảm giá Black Friday lên đến 50%',
      date: '23/11/2025',
      category: 'Khuyến mãi',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
      excerpt: 'Black Friday 2025 - Cơ hội vàng để mua sắm với mức giá không thể tốt hơn. Hàng ngàn sản phẩm giảm giá sâu...',
      content: 'Áp dụng cho tất cả các danh mục sản phẩm từ ngày 29/11 đến 01/12/2025.'
    },
    {
      id: 3,
      title: 'Ra mắt ứng dụng mobile mua sắm trực tuyến',
      date: '20/11/2025',
      category: 'Công nghệ',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      excerpt: 'Ứng dụng Siêu Thị Mini giờ đây đã có mặt trên cả iOS và Android, mang đến trải nghiệm mua sắm tiện lợi hơn bao giờ hết...',
      content: 'Tải app ngay để nhận voucher 100.000đ cho đơn hàng đầu tiên.'
    },
    {
      id: 4,
      title: 'Chương trình "Mua 1 tặng 1" cho thực phẩm tươi sống',
      date: '18/11/2025',
      category: 'Khuyến mãi',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      excerpt: 'Từ ngày 20/11 - 25/11, mua 1 tặng 1 cho tất cả các mặt hàng thực phẩm tươi sống như rau củ, trái cây, thịt cá...',
      content: 'Chương trình áp dụng tại tất cả các chi nhánh trên toàn quốc.'
    },
    {
      id: 5,
      title: 'Siêu Thị Mini nhận giải thưởng "Thương hiệu tin cậy 2025"',
      date: '15/11/2025',
      category: 'Giải thưởng',
      image: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=400',
      excerpt: 'Chúng tôi vinh dự được bình chọn là thương hiệu bán lẻ được tin dùng nhất năm 2025 bởi hiệp hội người tiêu dùng...',
      content: 'Đây là lần thứ 3 liên tiếp chúng tôi đạt được giải thưởng danh giá này.'
    },
    {
      id: 6,
      title: 'Mở rộng dịch vụ giao hàng 24/7',
      date: '10/11/2025',
      category: 'Dịch vụ',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
      excerpt: 'Từ tháng 11, dịch vụ giao hàng của chúng tôi sẽ hoạt động 24/7 để phục vụ nhu cầu mua sắm mọi lúc mọi nơi...',
      content: 'Miễn phí giao hàng cho đơn từ 200.000đ trong bán kính 5km.'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const categories = ['Tất cả', 'Sự kiện', 'Khuyến mãi', 'Công nghệ', 'Giải thưởng', 'Dịch vụ'];

  const filteredNews = selectedCategory === 'Tất cả' 
    ? newsArticles 
    : newsArticles.filter(news => news.category === selectedCategory);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ 
        color: '#2ecc71', 
        textAlign: 'center', 
        marginBottom: '20px',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        📰 Tin tức & Sự kiện
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        marginBottom: '40px',
        fontSize: '1.1rem'
      }}>
        Cập nhật những tin tức mới nhất về khuyến mãi, sự kiện và hoạt động của Siêu Thị Mini
      </p>

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        marginBottom: '40px',
        flexWrap: 'wrap'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 25px',
              border: selectedCategory === cat ? 'none' : '2px solid #2ecc71',
              background: selectedCategory === cat ? '#2ecc71' : 'white',
              color: selectedCategory === cat ? 'white' : '#2ecc71',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== cat) {
                e.currentTarget.style.background = '#2ecc71';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== cat) {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#2ecc71';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '30px' 
      }}>
        {filteredNews.map(news => (
          <article 
            key={news.id}
            style={{
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ position: 'relative' }}>
              <img 
                src={news.image} 
                alt={news.title}
                style={{ 
                  width: '100%', 
                  height: '220px', 
                  objectFit: 'cover' 
                }}
              />
              <span style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#2ecc71',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {news.category}
              </span>
            </div>
            
            <div style={{ padding: '25px' }}>
              <div style={{ 
                color: '#999', 
                fontSize: '0.9rem', 
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                📅 {news.date}
              </div>
              
              <h3 style={{ 
                color: '#333', 
                marginBottom: '15px',
                fontSize: '1.3rem',
                lineHeight: '1.4'
              }}>
                {news.title}
              </h3>
              
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                {news.excerpt}
              </p>
              
              <button style={{
                background: 'none',
                border: 'none',
                color: '#2ecc71',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                Đọc thêm →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News;
