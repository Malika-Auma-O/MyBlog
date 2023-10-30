import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image2 from "../images/sleepRepeat.avif";
import Footer from './Footer';

function Posts() {
  return (
    <div>
        <Container >
            <h1 className="text-center">All Blog Posts</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx}>
                <Card className='h-100 p-4'>
                    <Card.Img variant="top" src={Image2} />
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
        </Container>
        <Footer/>
    </div>
    
  );
}

export default Posts;