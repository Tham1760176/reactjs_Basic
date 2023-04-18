import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

const Sale = () => {
  return (
    <Container>
      <Row className="sale">
        <Col md={7} className="img-sale"></Col>
        <Col md={5}>
          <Row className=" img-sale-banner">
            <Col md={12}></Col>
          </Row>
          <Row className="img-sale-banner">
            <Col md={12}> </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Sale;
