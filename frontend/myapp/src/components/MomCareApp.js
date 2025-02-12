import React from 'react';
import '../App.css';
import './MomCareApp.css';

function MomCareApp() {
  return (
    <div className="App">
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>Chào mừng đến với<br />Mom & Baby</h1>
              <h2>Đồng hành cùng mẹ trên hành trình thai kỳ</h2>
              <p>Theo dõi sự phát triển của thai nhi một cách khoa học và chính xác với các tính năng thông minh.</p>
              <div className="hero-buttons">
                <a href="login" className="btn-primary">Bắt đầu ngay</a>
                <a href="#learn-more" className="btn-secondary">Tìm hiểu thêm</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="images/hero-pregnancy.png" alt="Pregnancy Journey" />
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Tính Năng Chính</h2>
              <p>Những công cụ hữu ích giúp theo dõi thai kỳ hiệu quả</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="images/icon3.png" alt='feature-icon'/>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Theo Dõi Tăng Trưởng</h3>
                <p>Cập nhật và theo dõi sự phát triển của thai nhi qua từng tuần</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="images/icon2.png" alt='feature-icon'/>
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3>Nhắc Nhở Thông Minh</h3>
                <p>Không bỏ lỡ các mốc khám thai và tiêm phòng quan trọng</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="images/icon4.png" alt='feature-icon'/>
                  <i className="fas fa-bell"></i>
                </div>
                <h3>Cảnh Báo Sớm</h3>
                <p>Phát hiện sớm các dấu hiệu bất thường trong thai kỳ</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tracking">
          <div className="container tracking-grid">
            <div className="tracking-content">
              <h2>Theo Dõi Thai Kỳ</h2>
              <p>Ghi lại hành trình phát triển của con yêu</p>
              <div className="tracking-features">
                <div className="tracking-item">
                  <i className="fas fa-baby"></i>
                  <div className="tracking-text">
                    <h4>Chỉ Số Thai Nhi</h4>
                    <p>Cân nặng và chiều cao theo tuần</p>
                  </div>
                </div>
                <div className="tracking-item">
                  <i className="fas fa-heartbeat"></i>
                  <div className="tracking-text">
                    <h4>Theo Dõi Sức Khỏe</h4>
                    <p>Các chỉ số quan trọng của mẹ</p>
                  </div>
                </div>
                <div className="tracking-item">
                  <i className="fas fa-calendar-alt"></i>
                  <div className="tracking-text">
                    <h4>Lịch Khám Thai</h4>
                    <p>Đặt lịch và nhắc nhở tự động</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tracking-image">
              <img src="images/tracking-demo.png" alt="Tracking Features" />
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default MomCareApp;
