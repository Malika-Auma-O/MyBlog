import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Button, Card, ListGroup } from 'react-bootstrap';
import Footer from './Footer';

const PostDetails = () => {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(location.state.blog);
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAllBlogs = () => {
    axios
      .get(`${apiUrl}/api/blogs`, )
      .then((res) => {
        // Reverse the Blogs array to display the latest Blog first
        const newestFirstImages = res.data.reverse();

         // Get the last 4 images from the reversed array
         const lastThreeImages = newestFirstImages.slice(0, 3);

        setBlogs(lastThreeImages);
      })
      .catch((err) => {
        console.error("Error getting Blogs:", err);
      });
  };

  useEffect(() => {
    getAllBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleBlogItemClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div >
      <Container className='my-5'>
        <Row >
          <Col className='mb-4' lg={8} >
            <Card>
              <Card.Img className='p-3'
              src={selectedBlog.image} title={selectedBlog.title} alt={selectedBlog.title}  />
              <Card.Body>
                <Card.Title>
                  <h6><a className='underline text-color' href={selectedBlog.category}>{selectedBlog.category}</a></h6>
                  <br></br>
                  <h2 className='text-color2'>{selectedBlog.title}</h2>
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
                                <Card.Title className='text-color' ><h6>{selectedBlog.author}</h6></Card.Title>
                                <Card.Title className='text-secondary'><h6>{new Date(selectedBlog.createdAt).toLocaleDateString()}</h6></Card.Title>
                            </div>
                    </Card>
                </div>
                <hr/>
                <Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                        </Card.Text>
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
                                <Card.Title className='text-color' ><h6>{selectedBlog.author}</h6></Card.Title>
                                <Card.Title className='text-secondary'><h6>{new Date(selectedBlog.createdAt).toLocaleDateString()}</h6></Card.Title>
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
                {blogs.map((blog) => (
                  <ListGroup.Item
                  key={blog._id}
                  as="li"
                  className="d-flex justify-content-between align-items-start custom-pointer"
                  onClick={() => handleBlogItemClick(blog)}
              >
                  <Col xs={9} md={9} >
                      <Card.Text className="ms-2 me-auto">
                      {blog.title}
                      </Card.Text>
                      <Card.Link className='text-secondary'>{blog.author} | </Card.Link>
                      <Card.Link className='text-secondary'>{new Date(blog.createdAt).toLocaleDateString()}</Card.Link>
                  </Col>
                  <Col>
                      <Image
                      src={blog.image} 
                      rounded
                      className="img-thumbnail card-img"
                      alt={blog.title}   
                      />                                
                  </Col>                                       
              </ListGroup.Item >
                ))}   
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