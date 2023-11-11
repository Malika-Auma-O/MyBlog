import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image2 from "../images/sleepRepeat.avif"

function HomeFeatures() {
  return (
    <Container className="my-5">
        <h2 className="display-5 text-center customBoldText m-4 text-color2">Featured Blogs: Recently Added</h2>
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='h-100 p-4'>
          <div className="image-container">
          <Card.Img className='card-img rounded' variant="top" src={Image2} />
          </div>
            
            <Card.Body>
              <Card.Title >Card title</Card.Title>
              <Card.Text>Author: <span className="text-secondary">Malika <span className="ms-3">Site Owner</span></span></Card.Text>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Link href="#">Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   <br></br>
    <div className="d-grid gap-2">
      <Button  className='bg-color' size="lg">View All Blog Posts</Button>
    </div>
    
    </Container>
  );
}

export default HomeFeatures;