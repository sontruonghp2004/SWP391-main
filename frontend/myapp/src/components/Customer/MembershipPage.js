import React from 'react';
import './MembershipPage.css'; // Add your CSS file for styling

function MembershipPage() {
  return (
    <div className="membership-container">
      <h1 className="membership-title">Chọn gói nâng cấp</h1>
      <p className="membership-description">Để sử dụng đầy đủ các chức năng của diễn đàn, hãy chọn các gói dịch vụ phù hợp với bạn để có thể sử dụng đầy đủ các quyền lợi và chức năng của diễn đàn.</p>
      
      <div className="membership-plans">
        <div className="membership-plan">
          <h2>BABYCARE MEMBER</h2>
          <p>38,000đ cho 1 tháng</p>
          <ul>
            <li>Được truy cập hơn 2,000 đề tài có ích</li>
            <li>Hiển thị đầy đủ các link ẩn</li>
            <li>Comment và chat không giới hạn</li>
          </ul>
        </div>
        <div className="membership-plan">
          <h2>BABYCARE VIP</h2>
          <p>200,000đ cho 8 tháng</p>
          <ul>
            <li>Toàn quyền của gói Member</li>
            <li>Không quảng cáo</li>
            <li>Xem chủ đề mới nhất của diễn đàn</li>
          </ul>
        </div>
        <div className="membership-plan">
          <h2>BABYCARE NOVA</h2>
          <p>650,000đ cho 4 năm</p>
          <ul>
            <li>Toàn quyền của gói VIP</li>
            <li>Không quảng cáo</li>
            <li>Xem chủ đề mới nhất của diễn đàn</li>
            <li>Sử dụng chức năng đặt biệt</li>
          </ul>
        </div>
      </div>
      
      <h3 className="payment-method-title">Phương thức thanh toán</h3>
      <p className="payment-method-description">Bạn có thể nạp FUO Point qua tài khoản ngân hàng hoặc quét mã QR code để nạp tiền.</p>
      
      <div className="payment-methods">
        <p><strong>CHỦ TÀI KHOẢN:</strong> NGUYEN VAN A</p>
        <p><strong>SỐ TK:</strong> babycare.com</p>
        <p><strong>NGÂN HÀNG:</strong> MB</p>
        <p><strong>NỘI DUNG CHUYỂN KHOẢN:</strong> NAP306046BABY</p>
        <img src="images/QRCode.png" alt="QR Code" className="qr-code" />   
        <p><strong>Mệnh giá BABYCARE Point:</strong> 1,000 Baby Point = 1,000 VND</p>
      </div>
    </div>
  );
}

export default MembershipPage;
