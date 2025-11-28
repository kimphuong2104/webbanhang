import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ 
        color: '#2ecc71', 
        textAlign: 'center', 
        marginBottom: '20px',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        📞 Liên hệ với chúng tôi
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        marginBottom: '50px',
        fontSize: '1.1rem'
      }}>
        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        marginBottom: '50px'
      }}>
        {/* Contact Form */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2ecc71', marginBottom: '25px', fontSize: '1.8rem' }}>
            Gửi tin nhắn cho chúng tôi
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: '#333'
              }}>
                Họ và tên *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nguyễn Văn A"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2ecc71'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: '#333'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2ecc71'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: '#333'
              }}>
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0912345678"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2ecc71'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: '#333'
              }}>
                Chủ đề *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Tiêu đề tin nhắn"
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2ecc71'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '600',
                color: '#333'
              }}>
                Nội dung *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Nhập nội dung tin nhắn của bạn..."
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2ecc71'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '15px',
                background: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#27ae60'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#2ecc71'}
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}>
            <h2 style={{ color: '#2ecc71', marginBottom: '25px', fontSize: '1.8rem' }}>
              Thông tin liên hệ
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ 
                  fontSize: '1.8rem', 
                  color: '#2ecc71',
                  minWidth: '40px'
                }}>
                  📍
                </div>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '5px', fontSize: '1.1rem' }}>
                    Địa chỉ văn phòng
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    123 Đường Nguyễn Huệ, Quận 1<br/>
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ 
                  fontSize: '1.8rem', 
                  color: '#2ecc71',
                  minWidth: '40px'
                }}>
                  📞
                </div>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '5px', fontSize: '1.1rem' }}>
                    Hotline
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    <strong style={{ color: '#2ecc71' }}>1900-xxxx</strong> (Miễn phí)<br/>
                    <strong style={{ color: '#2ecc71' }}>028-xxxx-xxxx</strong>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ 
                  fontSize: '1.8rem', 
                  color: '#2ecc71',
                  minWidth: '40px'
                }}>
                  ✉️
                </div>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '5px', fontSize: '1.1rem' }}>
                    Email
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    support@sieuthimini.vn<br/>
                    sales@sieuthimini.vn
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ 
                  fontSize: '1.8rem', 
                  color: '#2ecc71',
                  minWidth: '40px'
                }}>
                  🕐
                </div>
                <div>
                  <h3 style={{ color: '#333', marginBottom: '5px', fontSize: '1.1rem' }}>
                    Giờ làm việc
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Thứ 2 - Thứ 7: 8:00 - 22:00<br/>
                    Chủ nhật: 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div style={{
            background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
            padding: '30px',
            borderRadius: '12px',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
              Kết nối với chúng tôi
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '2rem' }}>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>📘</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>📷</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>🐦</a>
              <a href="#" style={{ color: 'white', textDecoration: 'none' }}>📺</a>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div style={{
        background: 'white',
        padding: '20px', // Giảm padding một chút để map to hơn
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        overflow: 'hidden' // Giữ bo góc cho iframe
      }}>
        <h2 style={{ color: '#2ecc71', marginBottom: '25px', fontSize: '1.8rem' }}>
          Tìm cửa hàng gần bạn
        </h2>
        
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%', // Tỷ lệ 16:9 để map hiển thị đẹp trên mọi màn hình
          height: 0,
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <iframe 
            title="Google Map"
             
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.482034831247!2d106.70284799999995!3d10.774344800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f471fae0893%3A0x4a0c6395cc27f990!2zMTIzIE5ndXnDqsyDbiBIdcOqzKMsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1764311818049!5m2!1svi!2s" 
              style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}


export default Contact;
