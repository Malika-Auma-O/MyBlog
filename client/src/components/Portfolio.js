import React, { useEffect, useState } from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blog from "../images/sleepRepeat.avif";
import mern from "../images/mern.jpg"
import Footer from "./Footer"

function Portfolio() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const [activeKey, setActiveKey] = useState("1");
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
      };

      const languages = [
        { name: "CSS", percentage: 80 },
        { name: "HTML", percentage: 80 },
        { name: "Javascript", percentage: 70 },
        { name: "React", percentage: 60 },
        { name: "Angular", percentage: 15 },
        { name: "Python", percentage: 10 },
        { name: "Node.js", percentage: 65 },
        { name: "WordPress", percentage: 50 },
      ];

      useEffect(() => {
        // set a delay to mark the animation as complete after a brief delay.
        const animationTimeout = setTimeout(() => {
          setAnimationComplete(true);
        }, 500);
    
        return () => clearTimeout(animationTimeout);
      }, []);
      
    
  return (
    <div>
        <Card>
          <Card.Img className='border-0 rounded-0 ' variant="top" src={mern} />
          <div className="overlay"></div>
          <Card.ImgOverlay>
                <Card.Title className='display-3 text-center customBoldText text-white fade-in-animation'>Portfolio</Card.Title>
            </Card.ImgOverlay>
        </Card>
      <Container className="p-5">
        <Container >
            <Row>
                <Col  >
                <h5 className='mb-4 text-color2'>Tools:</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-brands fa-git-alt" size='xl' style={{color: "#001b6b",}}  /> Git
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-regular fa-window-maximize" size='xl' style={{color: "#001b6b",}} /> Postman
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-brands fa-accusoft" size='xl' style={{color: "#001b6b",}} /> Visual Studio Code
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-brands fa-github" size='xl' style={{color: "#001b6b",}} /> GitHub
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-brands fa-trello" size='xl' style={{color: "#001b6b",}} /> Trello
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon  icon="fa-brands fa-npm" size='xl' style={{color: "#001b6b",}} /> npm
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-brands fa-envira" rotation={90} size='xl' style={{color: "#001b6b",}} /> MongoDB
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <FontAwesomeIcon icon="fa-solid fa-gear" size='xl' style={{color: "#001b6b",}}/> REST API
                    </ListGroup.Item>
                </ListGroup>
                <br></br>
                <Card.Link href="https://tan-katee-6.tiiny.site/" target="_blank">Click to view my resume in pdf format.</Card.Link>          
                </Col>
                <Col>
                <h5 className='mb-3 text-color2'>Languages I speak:</h5>
                <div>
                {languages.map((language, index) => (
                    <div key={index} className="mb-3">
                    <div className="d-flex justify-content-between">
                        <span className="fw-bold">{language.name}</span>
                        <span>{language.percentage}%</span>
                    </div>
                    <ProgressBar animated
                      now={animationComplete ? language.percentage : 0}
                      transition={animationComplete ? "false" : "true"}
                    />

                    </div>
                ))}
                </div>
                </Col>
            </Row>
        </Container>
        <br/><hr/><br/>
        <h2 className="text-center mt-3 text-color2">My Projects</h2>
        <h5 className="text-center">Here is a selection of projects I have worked on so far. Click on thumbnails to view more information about each project.</h5>
        <Nav variant="pills" activeKey={activeKey} onSelect={handleSelect} className="m-5 justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home"
             className={activeKey === '1' ? 'active-tab' : 'inactive-tab'}>
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="HTML" href="#/html"
            className={activeKey === '2' ? 'active-tab' : 'inactive-tab'}
            >
              HTML
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" title="JavaScript" href="#/javascript"
            className={activeKey === '3' ? 'active-tab' : 'inactive-tab'}>
              JAVASCRIPT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" title="React" href="#/react"
            className={activeKey === '4' ? 'active-tab' : 'inactive-tab'}>
              REACT
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5" title="Angular" href="#/angular"
            className={activeKey === '5' ? 'active-tab' : 'inactive-tab'}>
              ANGULAR
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="6" title="WordPress" href="#/wordpress"
            className={activeKey === '6' ? 'active-tab' : 'inactive-tab'}>
              WORDPRESS
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row xs={1} md={1} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card className="p-4">
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Button className=" my-4 bg-color">Card title</Button>
                      <Card.Title>
                        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                      </Card.Title>
                      <Card.Subtitle className=" mt-4 text-muted">Date Created</Card.Subtitle>
                    </Card.Body>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="image-container">
                    <Card.Img variant="top" src={blog} className="card-img rounded" />
                  </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default Portfolio;
