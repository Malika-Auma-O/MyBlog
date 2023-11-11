import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image2 from "../images/sleepRepeat.avif";
import post from "../images/programming.jpg";
import Footer from './Footer';

function Posts() {
  return (
    <div>
        <Card>
            <Card.Img className='border-0 rounded-0' src={post} />
            <div className="overlay"></div>
            <Card.ImgOverlay className='fade-in-animation '>
                <Card.Title className='display-3 text-center text-white m- customBoldText '>First solve the problem,</Card.Title>
                <Card.Title className='display-3 text-center text-white m- customBoldText '>Then write the code.</Card.Title>
            </Card.ImgOverlay>
        </Card>
        <Container className='mt-5'>
            <h1 className="text-center text-color2">All Blog Posts</h1>
            
        <Row xs={1} md={2} lg={3} className="g-4">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx}>
                <Card className='h-100 p-4 '>
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
                        <Card.Text className="text-secondary">Date added</Card.Text>
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