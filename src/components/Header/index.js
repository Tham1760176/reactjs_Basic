import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import './style.css';

const Header = () => {
  return (
    <Row className="Header">
      <Col md={3} className="logo">
        <img src="./images/logo.jpg" alt="" />
        <h4>Go!..</h4>
      </Col>
      <Col md={7} className="menu">
        <Navbar>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              Hàng Mới
              <img className="imgage-nav" src="./images/hot.gif" alt="" />
            </Nav.Link>
            <NavDropdown title="Áo" id="navbarScrollingDropdown">
              <NavDropdown.Item>Áo Thun</NavDropdown.Item>
              <NavDropdown.Item>Áo Sơ Mi</NavDropdown.Item>
              <NavDropdown.Item>Áo Polo</NavDropdown.Item>
              <NavDropdown.Item>Áo Khoác</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Quần" id="navbarScrollingDropdown">
              <NavDropdown.Item>Quần Jean</NavDropdown.Item>
              <NavDropdown.Item>Quần Tây</NavDropdown.Item>
              <NavDropdown.Item>Quần Kaki</NavDropdown.Item>
              <NavDropdown.Item>Quần Short</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Phụ Kiện" id="navbarScrollingDropdown">
              <NavDropdown.Item>Nón</NavDropdown.Item>
              <NavDropdown.Item>Ví</NavDropdown.Item>
              <NavDropdown.Item>Tất</NavDropdown.Item>
              <NavDropdown.Item>Thắt Lưng</NavDropdown.Item>
              <NavDropdown.Item>Đồng Hồ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Sale</Nav.Link>
            <Nav.Link>Liên Hệ</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
      <Col md={2} className="login-cart">
        <div className="cart">
          <a href="">
            <FontAwesomeIcon icon={solid('cart-shopping')}></FontAwesomeIcon>
          </a>
        </div>
        <div className="login">
          <NavDropdown
            title={
              <a href="">
                <span>
                  <FontAwesomeIcon icon={solid('user')}></FontAwesomeIcon>
                </span>
              </a>
            }>
            <NavDropdown.Item>Đăng nhập</NavDropdown.Item>
            <NavDropdown.Item>Đăng Ký</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
