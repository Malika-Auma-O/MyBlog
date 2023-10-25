import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image1 from "../images/scriptsCode.png"

function HomeAbout() {
  return (
    <Container className='mt-5 mb-5'>
        <h2 className="display-5 text-center customBoldText m-4">About Me</h2>
        <Row xs={1} md={2} className="g-4">
        <Col  >
          <Card  className="border-0 ">
            <Card.Img variant="top" src={Image1} alt="Coding illustration" className="rounded-circle mx-auto " style={{ width: "20rem" }}  />
            <Card.Body className='mx-auto'>
              <Card.Link  href="/about">Read More About Me</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='border-0'>
            <Card.Body>
              <Card.Title>Hey 👋, I'm Malika Omwayi</Card.Title>
              <Card.Text>
              Hello there! I'm a recent graduate with a certification in Full Stack Development, specializing in the MERN stack. I'm enthusiastic about my newfound skills.
              </Card.Text>
              <Card.Text>
              This website is where I document my coding journey. It's where I share my notes, thoughts, and experiences as I continue to learn and grow as a developer.🙂 
              </Card.Text>
              <Card.Text>
              I'm a firm believer in the value of learning and teaching. While I'm no expert, I'm passionate about helping others navigate the complex "getting started" phase of their coding journey, just as I have.
              </Card.Text>
              <Card.Text>
              I specialize in the MERN stack with a a good grasp of Material UI and Bootstrap for front-end development. I've also gained a basic understanding of WordPress for web content management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
    
  );
}

export default HomeAbout;