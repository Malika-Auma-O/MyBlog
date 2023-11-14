import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Editor from './Editor'; 

function PostForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const apiUrl = process.env.REACT_APP_API_URL;

    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

    async function createBlog(event) {
        event.preventDefault();
        let newBlog = {
            title: title,
            author: author,
            content: content,
            category: category,
            image: image,
        };

        let response = await axios.post(`${apiUrl}//api/blog`, newBlog, { headers });
        if (response.status === 200) {
            alert(response.data.msg);
            setTimeout(() => navigate("/posts"), 1000);
        } else {
            alert("error")
        }
    }

    return (
        <Container className='my-5 '>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={8}>
                    <Card className=" border-0">
                        <Card.Header className='background p-5'></Card.Header>
                        <Card.Title className='text-center pt-5 text-color2'><h1>Post Form</h1></Card.Title>
                        <Form className='p-5' onSubmit={createBlog}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Post Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText2">
                                <Form.Label>Author</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Author"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                            </Form.Group>
                            <Editor handleContentChange={setContent} /> {/* Always visible */}
                            <Form.Group className="mb-3" controlId="formBasicText4">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText5">
                                <Form.Label>Featured Image</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Featured Image"
                                    value={image}
                                    onChange={(event) => setImage(event.target.value)}
                                />
                            </Form.Group>
                            <Button className='w-100 bg-color' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PostForm;
