
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

function PortfolioProjectForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState("");

    const onChangeImage = (e) => {
        const file = e.target.files[0];
        setImages(file);
    };
    

    const apiUrl = process.env.REACT_APP_API_URL;

    const createBlog = (e) => {
        e.preventDefault();
    
        let formData = new FormData();
        formData.append("title", title);
        formData.append("technologies", technologies);
        formData.append("content", content);
        formData.append("category", category);
        formData.append("images", images);
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
    
        axios
          .post(`${apiUrl}/api/blog`, formData, { headers })
          .then((res) => {
            alert("Images added successfully!");
            navigate("/posts");
          })
          .catch((err) => {
            console.error("Error adding images:", err);
          });
    
        
        setTitle("");
        setTechnologies("");
        setContent("");
        setCategory("");
        setImages(null);
      };

    return (
        <Container className='my-5 '>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={8}>
                    <Card className=" border-0">
                        <Card.Header className='background p-5'></Card.Header>
                        <Card.Title className='text-center pt-5 text-color2'><h1>My Projects Form</h1></Card.Title>
                        <Form className='p-5' onSubmit={createBlog}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Project Title</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Project Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicText2">
                                <Form.Label>Technologies</Form.Label>
                                <Form.Control
                                    className='p-2'
                                    type="text"
                                    placeholder="Technologies"
                                    value={technologies}
                                    onChange={(e) => setTechnologies(e.target.value)}
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
                                <Form.Label>Featured Images</Form.Label>
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

export default PortfolioProjectForm;