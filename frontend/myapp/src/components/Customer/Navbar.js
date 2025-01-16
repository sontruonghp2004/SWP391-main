import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-toastify';
import LoginModal from './LoginModel';

function Navbarr() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleShow = () => setShowLoginModal(true);
  const handleClose = () => setShowLoginModal(false);

  const handleLogout = () => {
    // Xóa token từ localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);

    // Hiển thị thông báo
    toast.error('Logged out successfully!');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-light shadow-sm">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="images/logo.png"
              alt="MomCare Logo"
              width="40"
              height="40"
              className="me-2"
            />
            <span className="fw-bold">Mom & Baby</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

{/* Navbar Links */}
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mx-auto">
    <Nav.Link href="#home">Trang chủ</Nav.Link>
    <Nav.Link href="#features">Cộng Đồng</Nav.Link>
    <Nav.Link href="#tracking">Theo dõi</Nav.Link>
    <Nav.Link href="#blog">Blog</Nav.Link>
  </Nav>

  {/* Login/Logout and Register */}
  <Nav className="ms-auto">
    {/* Conditional Rendering for Login/Logout */}
    {isLoggedIn ? (
      <Nav.Link onClick={handleLogout} className="text-danger">
        Đăng xuất
      </Nav.Link>
    ) : (
      <Nav.Link onClick={handleShow} className="text-primary">
        Đăng nhập
      </Nav.Link>
    )}
    {/* Đăng ký */}
    {!isLoggedIn && (
      <Nav.Link href="#register" className="btn btn-success text-white ms-2">
        Đăng ký
      </Nav.Link>
    )}
  </Nav>
</Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hiển thị LoginModal */}
      <LoginModal
        show={showLoginModal}
        handleClose={handleClose}
        setIsLoggedIn={setIsLoggedIn}
      />
    </>
  );
}

export default Navbarr;
