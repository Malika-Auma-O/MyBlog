import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#1c2331' }}>
      <Container className="my-5">
        <Row className="text-center d-flex justify-content-center pt-5">
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button variant="link" className="text-white">About </Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button variant="link" className="text-white">Home</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button variant="link" className="text-white">Blog-Posts</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button variant="link" className="text-white">Portfolio</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button variant="link" className="text-white">Contact</Button>
            </h6>
          </Col>
        </Row>
      </Container>
      
      <hr className="my-5" />
      
      <Container className="mb-5">
        <Row className="d-flex justify-content-center">
          <Col lg={8}>
            <p>
            CMD_BLOG is a web development blog that offers insights and experiences from my journey in the world of web development. Explore the coding world through my perspective and learn as I do.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="text-center mb-5">
        <Row>
        <Col>
            <a href="facebook.com" className="text-white me-4">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="twitter.com" className="text-white me-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="google.com" className="text-white me-4">
              <i className="bi bi-google"></i>
            </a>
            <a href="linkedin.com" className="text-white me-4">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="github.com" className="text-white me-4">
              <i className="bi bi-github"></i>
            </a>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="/home"> cmd_blog.com</a>
      </div>
    </footer>
  );
}

export default Footer;
