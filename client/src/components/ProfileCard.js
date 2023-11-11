import React from "react";
import { Container, Button, Card, Image, ListGroup } from "react-bootstrap";

function ProfileCard() {
  return ( 
    <Container className="border-0 profile-card h-100">
      
          <Card className="text-center card-box border-0 h-100">
            <div className=" pt-2 pb-2">
              <div className="">
                <Image
                  src="https://img.freepik.com/free-photo/painting-woman-with-oranges-her-hair_1340-28007.jpg"
                  roundedCircle
                  className="rounded-circle img-thumbnail mb-3 profile-image"
                  alt="profile-image"
                 
                />
                <h4>Malika Omwayi</h4>
                <h6>
                  <small className="text-secondary">Full Stack Web Developer</small>
                </h6>
                <p className="text-muted">
                  @Founder <span>| </span>
                  <span>
                    <a className="text-color" href="#n" >
                      malikaomwayi.com
                    </a>
                  </span>
                </p>
              </div>
              <ListGroup className="social-links list-group-horizontal d-flex justify-content-center">
                <ListGroup.Item className="list-group-item rounded-circle m-1 p-2 border border-3">
                  <a title="" data-placement="top" data-toggle="tooltip" href="#n">
                    <i className="bi bi-twitter text-dark p-1"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item rounded-circle m-1 p-2 border-3">
                  <a title="" data-placement="top" data-toggle="tooltip" href="#n">
                    <i className="bi bi-github text-dark p-1"></i>
                  </a>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item rounded-circle m-1 p-2 border-3">
                  <a title="" data-placement="top" data-toggle="tooltip" href="#n">
                    <i className="bi bi-linkedin text-dark p-1"></i>
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Button
                type="button"
                className="btn btn-primary btn-rounded my-2 bg-color"
              >
                Contact Me
              </Button>
            
            </div>
          </Card>
    </Container>
  );
}

export default ProfileCard;
