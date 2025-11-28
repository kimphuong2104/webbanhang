import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🛒 Siêu Thị Mini</h3>
          <p>
            Hệ thống siêu thị bán lẻ hàng đầu Việt Nam với hơn 50 chi nhánh trên toàn quốc. 
            Cam kết mang đến sản phẩm chất lượng với giá tốt nhất.
          </p>
        </div>

        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/news">Tin tức</Link>
          <Link to="/contact">Liên hệ</Link>
        </div>

        <div className="footer-section">
          <h3>Chính sách</h3>
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản sử dụng</a>
          <a href="#">Chính sách đổi trả</a>
          <a href="#">Hướng dẫn mua hàng</a>
        </div>

        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>📍 123 Đường Nguyễn Huệ, Q.1, TP.HCM</p>
          <p>📞 Hotline: 1900-xxxx</p>
          <p>✉️ Email: support@sieuthimini.vn</p>
          <p>🕐 Giờ làm việc: 8:00 - 22:00 (T2-T7)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Siêu Thị Mini. All rights reserved. Made with ❤️ in Vietnam</p>
      </div>
    </footer>
  );
}

export default Footer;
