import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const apiUrl = process.env.REACT_APP_API_URL;
    
    async function handleSignup(e) {
        e.preventDefault();
        try {
            let user = {
                firstName,
                lastName,
                username,
                password
            };
            let response = await axios.post(`${apiUrl}/api/auth/signup`, user);
            if (response) {
                localStorage.setItem("token", response.data.token);
                alert(response.data.msg);
                setTimeout(() => navigate("/posts"), 1000);
            }
        } catch (error) {
            alert(error.response.data.msg);
        }
    }

    return (
        <Container className='my-5 '>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={8} xl={6}>
                    <Card className=" border-0">
                        <Card.Header className='background p-5'></Card.Header>
                        <Card.Title className='text-center pt-5 text-color2'><h1>Register</h1></Card.Title>
                        <Form className='p-5' onSubmit={handleSignup}>
                            <div className='d-flex '>
                                <Form.Group className="mb-3 w-100 me-2" controlId="formBasicText">
                                    <Form.Control
                                        className='p-2'
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 w-100" controlId="formBasicText2">
                                    <Form.Control
                                        className='p-2'
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                    className='p-2'
                                    type="email"
                                    placeholder="Username@example.com"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    className='p-2'
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="I agree to all statements in Terms of service." />
                            </Form.Group>
                            <Button className='w-100 bg-color' variant="primary" type="submit">
                                Submit
                            </Button>
                            <Card.Text className='my-3'>
                                Already have an account?
                                <Card.Link href="login"> Login here.</Card.Link>
                            </Card.Text>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;
