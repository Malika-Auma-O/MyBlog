import React from 'react';
import { Container, Row, Col, Image, Button, Card, ListGroup } from 'react-bootstrap';
import Footer from './Footer';

const PostDetails = () => {
  return (
    <div >
      <Container className='my-5'>
        <Row >
          <Col className='mb-4' lg={8} >
            <Card>
              <Card.Img className='p-3'
              src="https://t4.ftcdn.net/jpg/04/50/27/29/240_F_450272980_XFQGEPRzCBrel1ugIIXnUmD3cltQxlvg.jpg" title="" alt=""  />
              <Card.Body>
                <Card.Title>
                  <h6><a className='underline text-color' href="l">JAVASCRIPT</a></h6>
                  <br></br>
                  <h2 className='text-color2'>Title about the blog post</h2>
                </Card.Title>
                <br></br>

                <div >
                    <Card className='d-flex flex-row align-items-center border-0'>
                            <Image
                            src="https://img.freepik.com/free-photo/painting-woman-with-oranges-her-hair_1340-28007.jpg" 
                        
                            className="rounded-circle img-thumbnail profile-image small-avatar"
                            alt="profile-image"    
                            />
                            <div className='mx-2' >
                                <Card.Title className='text-color' ><h6>Malika Omwayi</h6></Card.Title>
                                <Card.Title className='text-secondary'><h6>26 Nov 2023</h6></Card.Title>
                            </div>
                    </Card>
                </div>
                <hr/>
                

                <div>
                  <Card.Text>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum...</Card.Text>
                  <Card.Text>Eget aenean tellus venenatis. Donec odio tempus. .</Card.Text>

                  <h4>Subtitle same topic</h4>
                  <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  
                    <Card.Text className='text-color'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Card.Text>
                    <Card.Text className="text-secondary">Someone famous in <cite title="Source Title">Dick Gray</cite></Card.Text>
                 
                  <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Text>
                </div>
                <div >
                    <Button className='m-1 bg-color' >Angular</Button>{' '}
                    <Button className='m-1 bg-color' >Development</Button>{' '}
                    <Button className='m-1 bg-color' >HTML</Button>{' '}
                    <Button className='m-1 bg-color' >Web Design</Button>{' '}
                    <Button className='m-1 bg-color' >Javascript</Button>{' '}
                    <Button className='m-1 bg-color' >CSS</Button>{' '}
                    <Button className='m-1 bg-color' >React</Button>{' '}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <div className='sticky-top'>
                <Card border="light">
                    <Card.Header className='text-color'><h3>Author</h3></Card.Header>
                    <Card className='d-flex flex-row align-items-center border-0 m-2'>
                            <Image
                            src="https://img.freepik.com/free-photo/painting-woman-with-oranges-her-hair_1340-28007.jpg" 
                        
                            className="rounded-circle img-thumbnail profile-image "
                            alt="profile-image"    
                            />
                            <div className='mx-2' >
                                <Card.Title className='text-color' ><h6>Malika Omwayi</h6></Card.Title>
                                <Card.Title className='text-secondary'><h6>26 Nov 2023</h6></Card.Title>
                            </div>
                    </Card>

                    <Card.Body>
                    <Card.Text>
                        I design and develop stylish, modern websites.
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <br></br>

                <Card >
                <Card.Header className='text-color'><h3>Latest Posts</h3></Card.Header>
                <ListGroup variant="flush">
                <ListGroup.Item 
                    as="li"
                    className="d-flex justify-content-between align-items-start "
                >
                    <Col xs={9} md={9} >
                        <div className="ms-2 me-auto">
                        Post title, author, date below
                        </div>
                        <Card.Link className='text-secondary' href="#">Malika Omwayi | </Card.Link>
                        <Card.Link className='text-secondary' href="#">26 Nov 2023</Card.Link>
                    </Col>
                    <Col>
                    <div>
                        <Image
                        src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" 
                        rounded
                        className="img-thumbnail card-img"
                        alt="image"    
                        />                  
                    </div>
                    </Col>                                       
                </ListGroup.Item >   
                <ListGroup.Item 
                    as="li"
                    className="d-flex justify-content-between align-items-start "
                >
                    <Col xs={9} md={9} >
                        <div className="ms-2 me-auto">
                        Cras justo odio
                        </div>
                        <Card.Link className='text-secondary' href="#">Malika Omwayi | </Card.Link>
                        <Card.Link className='text-secondary' href="#">26 Nov 2023</Card.Link>
                    </Col>
                    <Col>
                    <div>
                        <Image
                        src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" 
                        rounded
                        className="img-thumbnail card-img"
                        alt="image"    
                        />                  
                    </div>
                    </Col>                                       
                </ListGroup.Item >   
                <ListGroup.Item 
                    as="li"
                    className="d-flex justify-content-between align-items-start "
                >
                    <Col xs={9} md={9} >
                        <div className="ms-2 me-auto">
                        Cras justo odio
                        </div>
                        <Card.Link className='text-secondary' href="#">Malika Omwayi | </Card.Link>
                        <Card.Link className='text-secondary' href="#">26 Nov 2023</Card.Link>
                    </Col>
                    <Col>
                    <div>
                        <Image
                        src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" 
                        rounded
                        className="img-thumbnail card-img"
                        alt="image"    
                        />                  
                    </div>
                    </Col>                                       
                </ListGroup.Item >   
                </ListGroup>
                </Card>

                <br></br>

                <Card>
                    <Card.Header className='text-color'><h3>Latest Tags</h3></Card.Header>
                    <Card.Body>
                        <Button className='m-1 bg-color' >Angular</Button>{' '}
                        <Button className='m-1 bg-color' >Development</Button>{' '}
                        <Button className='m-1 bg-color' >HTML</Button>{' '}
                        <Button className='m-1 bg-color' >Web Design</Button>{' '}
                        <Button className='m-1 bg-color' >Javascript</Button>{' '}
                        <Button className='m-1 bg-color' >CSS</Button>{' '}
                        <Button className='m-1 bg-color' >React</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default PostDetails;
