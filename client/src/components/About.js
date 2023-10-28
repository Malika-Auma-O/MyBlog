

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import code from "../images/sleepRepeat.avif"
import ProfileCard from './ProfileCard';
import Footer from './Footer';

function About() {
  return (
    <div>
        <Container>
            <h1 className="text-center ">About Me</h1>
        <Row xs={1} md={2} className="g-4 m-5">
            <Col >
            <Card className='profile-card'>
                <Card.Img  src={code} />              
            </Card>
            </Col>
            <Col>
            <ProfileCard/>
            </Col>
        </Row>
        </Container>
        <Container className=' m-5'>
            <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header  >What is this blog about?</Accordion.Header>
                <Accordion.Body>
                This website is my personal space to document my coding journey. It's where I share my notes, thoughts, and experiences as I continue to learn and grow as a developer. I believe in the power of knowledge sharing and aim to provide valuable insights for fellow learners and enthusiasts.
                I'm a firm believer in the value of learning and teaching. While I'm no expert, I'm passionate about helping others navigate the complex "getting started" phase of their coding journey, just as I have.
                </Accordion.Body>                
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>How long have you been in web development?</Accordion.Header>
                <Accordion.Body>
                I started my journey in web development 1 year ago by learning
                HTML and CSS and gradually expanded my knowledge to include JavaScript and other web technologies. I'm a recent graduate with a certification in Full Stack Development, specializing in the MERN stack.
                Over the past few months, I've worked on various web projects, honing my skills and gaining valuable experience.
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="2">
            <Accordion.Header>What is your favorite programming language or framework?</Accordion.Header>
                <Accordion.Body>
                My favorite programming language is JavaScript, and I particularly enjoy working with the React framework.
                JavaScript's versatility and the vibrant React ecosystem allow me to create dynamic and interactive web applications with ease.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Do you have any upcoming projects or goals in your web development career?</Accordion.Header>
                <Accordion.Body>
                Yes, I'm currently working on this personal website that will showcase my portfolio and more blog posts about web development and related topics. Additionally, I plan to contribute to open-source projects and continue
                learning and improving my skills.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What advice do you have for aspiring web developers?</Accordion.Header>
                <Accordion.Body>
                My advice for aspiring web developers is to never stop learning. The web development field is constantly evolving, so staying updated with the latest technologies and trends is crucial. Also, practice and build real projects to gain hands-on experience. Don't be afraid to ask questions and seek help when needed, and always keep your curiosity alive.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </Container>
        <Footer/>
    </div>
    
  );
}

export default About;
