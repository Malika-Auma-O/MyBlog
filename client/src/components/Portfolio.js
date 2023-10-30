import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import blog from "../images/sleepRepeat.avif";

function Portfolio() {


  return (
    <div>
      <Container className="p-5">
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
                    <Card.Img variant="top" src={blog} className="card-img" />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
