import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import { Link, useLocation } from 'react-router-dom'; 
import logo from "../images/design2.gif";

function NavbarPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [decoded, setDecoded] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        setDecoded(decodedToken);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [token, navigate]);

  function handleLogout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    navigate("/login")
  }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={logo} alt="Logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" className='text-color'>Home</Nav.Link>
            <Nav.Link as={Link} to="/posts" className={`text-color ${location.pathname === '/posts' ? 'text-primary' : ''}`}>Blog-Posts</Nav.Link>
            <NavDropdown className='text-color' title="Form" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/blog-form" className={`text-color ${location.pathname === '/blog-form' ? 'text-primary' : ''}`}>Blog-Form</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/project-form" className={`text-color ${location.pathname === '/project-form' ? 'text-primary' : ''}`} >
                Project-Form
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={Link} to="/portfolio" className={`text-color ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`text-color ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`text-color ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Nav.Link>
          </Nav>
          <Navbar.Text className='me-2 text-color2'>
          {decoded && decoded.username ? decoded.username.split('@')[0] : "Guest"}
          </Navbar.Text>
            {token ? 
            (
              <Nav>
                <Nav.Link as={Link} to="/user/posts" className={`text-color ${location.pathname === '/user/posts' ? 'text-primary' : ''}`}>My Posts </Nav.Link>
                <Nav.Link 
                onClick={handleLogout}
                className='text-color'>Logout</Nav.Link>
              </Nav>
              
            ) : (
              <>
              <NavDropdown className='text-color' title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/login" className={`text-color ${location.pathname === '/login' ? 'text-primary' : ''}`}>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register" className={`text-color ${location.pathname === '/register' ? 'text-primary' : ''}`} >
                 Register
              </NavDropdown.Item>
              </NavDropdown>
              </>
            )}
        </Navbar.Collapse>
        {/* <Form className="d-flex">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="sm"
            />
            <Button variant="outline-primary" id="search-button">
              <i className="bi bi-search"></i> 
            </Button>
          </InputGroup>
        </Form> */}
      </Container>
    </Navbar>
  );
}

export default NavbarPage;