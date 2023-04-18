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
          <Navbar.Brand href="#">Trang Chủ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              Khuyến Mãi
              <img className="imgage-nav" src="./images/hot.gif" alt="" />
            </Nav.Link>
            <NavDropdown title="Du Lịch Trong Nước" id="navbarScrollingDropdown">
              <Navbar className="subtours">
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Miền Nam
                    <Navbar.Text className="sub">Phú Quốc</Navbar.Text>
                    <Navbar.Text className="sub">Miền Tây</Navbar.Text>
                    <Navbar.Text className="sub">Côn Đảo</Navbar.Text>
                    <Navbar.Text className="sub">Vũng Tàu</Navbar.Text>
                    <Navbar.Text className="sub">TP.Hồ Chí Minh</Navbar.Text>
                    <Navbar.Text className="sub">Tây Ninh</Navbar.Text>
                    <Navbar.Text className="sub">Tây Ninh</Navbar.Text>
                    <Navbar.Text className="sub">Tây Ninh</Navbar.Text>
                    <Navbar.Text className="sub">Tây Ninh</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Miền Trung
                    <Navbar.Text className="sub" href="#">
                      Hà Giang
                    </Navbar.Text>
                    <Navbar.Text className="sub">Nha Trang</Navbar.Text>
                    <Navbar.Text className="sub">Đà Nẵng</Navbar.Text>
                    <Navbar.Text className="sub">Huế</Navbar.Text>
                    <Navbar.Text className="sub">Đà Lạt</Navbar.Text>
                    <Navbar.Text className="sub">Tây Nguyên</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Miền Bắc
                    <Navbar.Text className="sub">Hà Nội</Navbar.Text>
                    <Navbar.Text className="sub">Hạ Long</Navbar.Text>
                    <Navbar.Text className="sub">Sapa</Navbar.Text>
                    <Navbar.Text className="sub">Ninh Bình</Navbar.Text>
                    <Navbar.Text className="sub">Hải Phòng</Navbar.Text>
                    <Navbar.Text className="sub">Tây Bắc</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
              </Navbar>
            </NavDropdown>
            <NavDropdown title="Du Lịch Quốc Tế" id="navbarScrollingDropdown">
              <Nav className="subtours">
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Châu Á<Navbar.Text className="sub">Campuchia</Navbar.Text>
                    <Navbar.Text className="sub">Thái Lan</Navbar.Text>
                    <Navbar.Text className="sub">Hàn Quốc</Navbar.Text>
                    <Navbar.Text className="sub">Trung Quốc</Navbar.Text>
                    <Navbar.Text className="sub">Nhật Bản</Navbar.Text>
                    <Navbar.Text className="sub">Malaysia</Navbar.Text>
                    <Navbar.Text className="sub">Myanmar</Navbar.Text>
                    <Navbar.Text className="sub">Singapore</Navbar.Text>
                    <Navbar.Text className="sub">Lào</Navbar.Text>
                    <Navbar.Text className="sub">Indonesia</Navbar.Text>
                    <Navbar.Text className="sub">Ấn Độ</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Châu Âu
                    <Navbar.Text className="sub" href="#">
                      Anh Quốc
                    </Navbar.Text>
                    <Navbar.Text className="sub">Thổ Nhĩ Kỳ</Navbar.Text>
                    <Navbar.Text className="sub">Hà Lan</Navbar.Text>
                    <Navbar.Text className="sub">Phần Lan</Navbar.Text>
                    <Navbar.Text className="sub">Thụy Điển</Navbar.Text>
                    <Navbar.Text className="sub">Đức</Navbar.Text>
                    <Navbar.Text className="sub">Pháp</Navbar.Text>
                    <Navbar.Text className="sub">Bỉ</Navbar.Text>
                    <Navbar.Text className="sub">Thụy Sĩ</Navbar.Text>
                    <Navbar.Text className="sub">Đan Mạch</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="submenu">
                  <Nav.Link>
                    Châu Mỹ-Châu Úc-Châu Phi
                    <Navbar.Text className="sub">Canada</Navbar.Text>
                    <Navbar.Text className="sub">Hoa Kỳ</Navbar.Text>
                    <Navbar.Text className="sub">Cuba</Navbar.Text>
                    <Navbar.Text className="sub">Brazil</Navbar.Text>
                    <Navbar.Text className="sub">Úc</Navbar.Text>
                    <Navbar.Text className="sub">Nam Phi</Navbar.Text>
                    <Navbar.Text className="sub">Ai Cập</Navbar.Text>
                    <Navbar.Text className="sub">Ma-Rốc</Navbar.Text>
                    <Navbar.Text className="sub">Nam Mỹ</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </NavDropdown>
            <NavDropdown title="Dịch Vụ Du Lịch" id="navbarScrollingDropdown">
              <Navbar className="services">
                <Nav.Item className="submenu">
                  <Nav.Link>
                    <Navbar.Text className="sub">Thuê Khách Sạn</Navbar.Text>
                    <Navbar.Text className="sub">Vé Máy Bay</Navbar.Text>
                    <Navbar.Text className="sub">Thuê Xe</Navbar.Text>
                    <Navbar.Text className="sub">Bảo Hiểm Du Lịch</Navbar.Text>
                    <Navbar.Text className="sub">Sim Du Lịch</Navbar.Text>
                    <Navbar.Text className="sub">Visa</Navbar.Text>
                  </Nav.Link>
                </Nav.Item>
              </Navbar>
            </NavDropdown>

            <Nav.Link>Liên Hệ</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
      <Col md={1} className="login-cart">
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
