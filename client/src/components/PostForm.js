
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

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    

    const apiUrl = process.env.REACT_APP_API_URL;

    const createBlog = (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("image", image);
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
    
        axios
          .post(`${apiUrl}/api/blog`, formData, { headers })
          .then((res) => {
            alert("Image added successfully!");
            navigate("/user/posts");
          })
          .catch((err) => {
            console.error("Error adding image:", err);
          });
    
        
        setTitle("");
        setAuthor("");
        setContent("");
        setCategory("");
        setImage(null);
      };

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
                            <Editor handleContentChange={setContent} />
                            <Form.Group className="mb-3" controlId="formBasicText4">
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                    className='p-2'
                                    aria-label="Default select example"
                                    value={category}
                                    onChange={(e) => {setCategory(e.target.value)}}
                                >
                                    <option value=""></option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="React">React</option>
                                    <option value="Angular">Angular</option>
                                    <option value="Node JS">Node JS</option>
                                    <option value="WordPress">WordPress</option>
                                    <option value="Others">Others</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Featured Image</Form.Label>
                                <Form.Control
                                 type="file"
                                  multiple
                                //   value={image}
                                  onChange={onChangeImage}
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