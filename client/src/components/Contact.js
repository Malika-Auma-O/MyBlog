import React, { useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import envelope from "../images/envelope.png";
import contact from "../images/touch.png"
import Footer from "./Footer"


function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        let formData = {
            firstName,
            lastName,
            email,
            message
        };
        
        await axios.post(`${apiUrl}/api/contact`, formData);
        setFormSubmitted(true);
        } catch (error) {
        console.error("Error posting message:", error);
        }
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
}


  return (
    <div>
        <Card className="bg-dark text-white border-0 rounded-0">
            <Card.Img src={contact} />
            <div className="overlay"></div>
            <Card.ImgOverlay>
                <Card.Title className='display-3 text-center customBoldText fade-in-animation'>Get In Touch</Card.Title>
            </Card.ImgOverlay>
            </Card>
        <Container>
            <br></br>
           
            <Row xs={1} md={2} className="g-4 m-5">
                <Col className=" my-5">
                <Card className='border-0'>
                    <Card.Img className='envelope ' variant="top" src={envelope} />
                </Card>
                </Col>
                <Col className=" my-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                         type="text" 
                         placeholder="First Name" 
                         value={firstName}
                         onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                         type="text"
                         placeholder="Last Name"
                         value={lastName}
                         onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                         type="email"
                          placeholder="What's your email?"
                          value={email}
                         onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                         as="textarea" 
                         rows={3} placeholder="Your questions..."
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button type="submit" className='bg-color' >SEND MESSAGE</Button>
                    </div>
                    </Form>
                    {formSubmitted && (
                    <p className="text-color">
                        Form submitted successfully!
                    </p>
                    )}
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
    
  );
}

export default Contact;