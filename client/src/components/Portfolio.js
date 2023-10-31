import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import blog from "../images/sleepRepeat.avif";
import Footer from "./Footer"

function Portfolio() {
    const [activeKey, setActiveKey] = useState("1");
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
      };
      
    
  return (
    <div>
      <Container className="p-5">
        <h2 class="text-center mt-3">My Projects</h2>
        
        <h3 class="text-center">Here is a selection of projects I have worked on so far.</h3>
        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect} className="m-5 justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="HTML" href="#/html">
              HTML
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" title="JavaScript" href="#/javascript">
              JAVASCRIPT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" title="React" href="#/react">
              REACT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" title="Angular" href="#/angular">
              ANGULAR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="6" title="WordPress" href="#/wordpress">
              WORDPRESS
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row xs={1} md={1} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="p-4">
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Button className=" mt-4">Card title</Button>
                      <Card.Title>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </Card.Title>
                      <Card.Subtitle className=" mt-4 text-muted">Date Created</Card.Subtitle>
                    </Card.Body>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Img  variant="top" src={blog} className="card-img rounded" />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Portfolio;
