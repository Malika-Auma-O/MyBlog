import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import post from "../images/programming.jpg";
import Footer from './Footer';

function Posts() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    
      const getAllBlogs = () => {
        axios
          .get(`${apiUrl}/api/blogs`, )
          .then((res) => {
            // Reverse the Blogs array to display the latest Blog first
            setBlogs(res.data.reverse());
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

  return (
    <div>
        <Card>
            <Card.Img className='border-0 rounded-0' src={post} />
            <div className="overlay"></div>
            <Card.ImgOverlay className='fade-in-animation '>
                <Card.Title className='display-3 text-center text-white m- customBoldText '>First solve the problem,</Card.Title>
                <Card.Title className='display-3 text-center text-white m- customBoldText '>Then write the code.</Card.Title>
            </Card.ImgOverlay>
        </Card>
        <Container className='mt-5'>
            <h1 className="text-center text-color2">All Blog Posts</h1>
            
            <Row xs={1} md={2} lg={3} className="g-4">
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
                        {/* <Card.Text>
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </Card.Text> */}
                        <Card.Text className="text-secondary">{new Date(blog.createdAt).toLocaleDateString()}</Card.Text>
                        <Card.Link className="custom-pointer" onClick={() => postDetails(blog)}>Learn More</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
        </Container>
        <Footer/>
    </div>
    
  );
}

export default Posts;