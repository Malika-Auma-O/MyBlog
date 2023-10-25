import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import envelope from "../images/envelope.png";
import contact from "../images/contact.jpg"
import Footer from "./Footer"


function Contact() {
  return (
    <div>
        <Card className='border-0'>
                <Card.Body>
                <Card.Title className='display-3 text-center customBoldText '>
                    Get In Touch
                </Card.Title>
                </Card.Body>
                <Card.Img  variant="bottom" src={contact} />
           </Card>
        <Container>
            
            <Row xs={1} md={2} className="g-4 m-5">
                <Col className=" my-5">
                <Card className='border-0'>
                    <Card.Img className='envelope ' variant="top" src={envelope} />
                </Card>
                </Col>
                <Col className=" my-5">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="What's your email?" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Your questions..." />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button  variant="primary" >SEND MESSAGE</Button>
                    </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
    
  );
}

export default Contact;