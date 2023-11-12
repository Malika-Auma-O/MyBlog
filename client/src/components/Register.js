import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  return (
    <Container className='my-5 '>
        <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} xl={6}>
                <Card className=" border-0">
                <Card.Header className='background p-5'></Card.Header>
                    <Card.Title className='text-center pt-5'><h1>Register</h1></Card.Title>
                    <Form className='p-5'>
                        <div className='d-flex '>
                            <Form.Group className="mb-3 w-100 me-2" controlId="formBasicText">
                                <Form.Control className='p-2' type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-100" controlId="formBasicText2">
                                <Form.Control className='p-2' type="text" placeholder="Last Name" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='p-2' type="email" placeholder="Username@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='p-2' type="password" placeholder="Password" />
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
