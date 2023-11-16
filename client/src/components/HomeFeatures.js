import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function HomeFeatures() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
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
  function postDetails(blog) {
    navigate("/post", { state: { blog } });
  }

  const toAllPosts = () => {
    navigate('/posts');
  }


  return (
    <Container className="my-5">
        <h2 className="display-5 text-center customBoldText m-4 text-color2">Featured Blogs: Recently Added</h2>
      <Row xs={1} md={3} className="g-4">
      {blogs.map((blog) => (
            <Col key={blog._id}>
                <Card className='h-100 p-4'>
                    <div className="image-container custom-pointer"
                    onClick={() => postDetails(blog)}
                    >
                        <Card.Img className='card-img rounded' variant="top" src={blog.image} />
                    </div>

                    <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>Author: <span className="text-secondary">{blog.author} <span className="ms-3">Site Owner</span></span></Card.Text>
                        <Card.Text className="text-secondary">{new Date(blog.createdAt).toLocaleDateString()}</Card.Text>
                        <Card.Link className="custom-pointer" onClick={() => postDetails(blog)}>Learn More</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
   <br></br>
    <div className="d-grid gap-2">
      <Button
        className='bg-color'
        size="lg"
        onClick={toAllPosts}
      >View All Blog Posts
      </Button>
    </div>
    
    </Container>
  );
}

export default HomeFeatures;