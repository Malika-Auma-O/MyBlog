import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <Container className='my-5 '>
        <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} xl={6}>
                <Card className=" border-0">
                <Card.Header className='background p-5'></Card.Header>
                    <Card.Title className='text-center pt-5'><h1>Login</h1></Card.Title>
                    <Form className='p-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='p-2' type="email" placeholder="Username@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className='p-2' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className='w-100 bg-color' variant="primary" type="submit">
                            Submit
                        </Button>

                        <Card.Text className='my-3'>
                        Don't have an account?
                        <Card.Link href="login"> Register here.</Card.Link>
                    </Card.Text>
                    </Form>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Login;
