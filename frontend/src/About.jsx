function About() {
  return (
    <div style={{ 
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginTop: '30px',
      marginBottom: '30px'
    }}>
      <h1 style={{ 
        color: '#2ecc71', 
        textAlign: 'center', 
        marginBottom: '30px',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        🏪 Giới thiệu về Siêu Thị Mini
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        marginBottom: '40px'
      }}>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600" 
            alt="Siêu thị" 
            style={{ 
              width: '100%', 
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }} 
          />
        </div>
        
        <div>
          <h2 style={{ color: '#2ecc71', marginBottom: '20px' }}>Câu chuyện của chúng tôi</h2>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem' }}>
            <strong>Siêu Thị Mini</strong> được thành lập vào năm 2020 với mục tiêu mang đến cho khách hàng 
            những sản phẩm chất lượng cao với giá cả hợp lý nhất. Chúng tôi tự hào là một trong những 
            chuỗi siêu thị bán lẻ phát triển nhanh nhất khu vực.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', marginTop: '15px' }}>
            Với hơn <strong style={{ color: '#2ecc71' }}>50 chi nhánh</strong> trên toàn quốc và đội ngũ 
            nhân viên nhiệt tình, chuyên nghiệp, chúng tôi cam kết mang đến trải nghiệm mua sắm tuyệt vời nhất.
          </p>
        </div>
      </div>

      <div style={{ 
        background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
        padding: '40px',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '40px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>
          Giá trị cốt lõi
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✨</div>
            <h3 style={{ marginBottom: '10px' }}>Chất lượng</h3>
            <p>100% sản phẩm chính hãng, có nguồn gốc rõ ràng</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>💰</div>
            <h3 style={{ marginBottom: '10px' }}>Giá tốt</h3>
            <p>Cam kết giá tốt nhất thị trường, hoàn tiền nếu phát hiện giá cao hơn</p>
          </div>
          <div>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🚚</div>
            <h3 style={{ marginBottom: '10px' }}>Giao hàng nhanh</h3>
            <p>Giao hàng trong vòng 2 giờ tại nội thành</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#2ecc71', textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>
          Thành tựu của chúng tôi
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '20px',
          textAlign: 'center'
        }}>
          <div style={{ 
            padding: '30px', 
            background: '#f8f9fa', 
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', color: '#2ecc71', fontWeight: 'bold' }}>50+</div>
            <div style={{ color: '#666', marginTop: '10px' }}>Chi nhánh</div>
          </div>
          <div style={{ 
            padding: '30px', 
            background: '#f8f9fa', 
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', color: '#2ecc71', fontWeight: 'bold' }}>10K+</div>
            <div style={{ color: '#666', marginTop: '10px' }}>Sản phẩm</div>
          </div>
          <div style={{ 
            padding: '30px', 
            background: '#f8f9fa', 
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', color: '#2ecc71', fontWeight: 'bold' }}>1M+</div>
            <div style={{ color: '#666', marginTop: '10px' }}>Khách hàng</div>
          </div>
          <div style={{ 
            padding: '30px', 
            background: '#f8f9fa', 
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <div style={{ fontSize: '2.5rem', color: '#2ecc71', fontWeight: 'bold' }}>500+</div>
            <div style={{ color: '#666', marginTop: '10px' }}>Nhân viên</div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#2ecc71', marginBottom: '15px', fontSize: '1.5rem' }}>
          Cam kết của chúng tôi
        </h3>
        <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem', maxWidth: '800px', margin: '0 auto' }}>
          Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu. Mọi sản phẩm đều được 
          kiểm tra chất lượng kỹ càng trước khi đến tay người tiêu dùng. Đội ngũ chăm sóc khách 
          hàng 24/7 luôn sẵn sàng hỗ trợ bạn bất cứ lúc nào.
        </p>
      </div>
    </div>
  );
}

export default About;
