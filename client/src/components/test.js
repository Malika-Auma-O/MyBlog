import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import PortfolioModal from './PortfolioModal';
import Footer from "./Footer";

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;


      const getAllProjects = () => {
        axios
          .get(`${apiUrl}/api/projects`, )
          .then((res) => {
            // Reverse the array to display the latest Project first
            setProjects(res.data.reverse());
          })
          .catch((err) => {
            console.error("Error getting Projects:", err);
          });
      };

      useEffect(() => {
        getAllProjects();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      function pprojectDetails(project) {
        navigate("/project-modal", { state: { project } });
      }
      
    
  return (
    <div>
      <Container className="p-5">
        <Container >
        </Container>
        <Row xs={1} md={1} className="g-4">
          {projects.map((project) => (
            <Col key={project._id}>
              <Card className="p-4 mb-4">
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Button className="my-4 bg-color" onClick={() => setModalShow(true)}>
                      {project.category}
                      </Button>
                      <Card.Title>
                      {project.title}
                      </Card.Title>
                      <Card.Subtitle className="mt-4 text-muted">{new Date(project.createdAt).toLocaleDateString()}</Card.Subtitle>
                    </Card.Body>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="image-container">
                      <Card.Img 
                      onClick={() => setModalShow(true)}
                      variant="top" src={project.images[0]} className="card-img rounded" />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <PortfolioModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Footer/>
    </div>
  );
}

export default Portfolio;
