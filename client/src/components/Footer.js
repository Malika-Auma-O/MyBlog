import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#1c2331' }}>
      <Container className="my-5">
        <Row className="text-center d-flex justify-content-center pt-5">
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button
              onClick={() => navigate("/about")}
               variant="link" className="text-white">About </Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button 
              onClick={() => navigate("/")}
              variant="link" className="text-white">Home</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button
              onClick={() => navigate("/posts")}
               variant="link" className="text-white">Blog-Posts</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button 
              onClick={() => navigate("/portfolio")}
              variant="link" className="text-white">Portfolio</Button>
            </h6>
          </Col>
          <Col md={2}>
            <h6 className="text-uppercase font-weight-bold">
              <Button 
              onClick={() => navigate("/contact")}
              variant="link" className="text-white">Contact</Button>
            </h6>
          </Col>
        </Row>
      </Container>
      
      <hr className="my-5" />
      
      <Container className="mb-5">
        <Row className="d-flex justify-content-center">
          <Col lg={8}>
            <p>
            This website offers insights and experiences from my journey in the world of web development. Explore the coding world through my perspective and learn as I do.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="text-center mb-5">
        <Row>
        <Col>
            {/* <a href="twitter.com" className="text-white me-4">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="google.com" className="text-white me-4">
              <i className="bi bi-google"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/malika-omwayi-b1a03143/" target='blank' className="text-white me-4">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/Malika-Auma-O" target='blank' className="text-white me-4">
              <i className="bi bi-github"></i>
            </a>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="/"> https://malika-developer.onrender.com/</a>
      </div>
    </footer>
  );
}

export default Footer;
