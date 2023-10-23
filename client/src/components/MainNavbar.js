import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import logo from "../images/blogLogo1.png"



function MainNavbar() {



  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/home">
        <Image src={logo} alt="Logo" height="40" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        <Nav>
        <Form
         className="d-flex">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="sm"
              
            />
            <Button variant="outline-success" id="search-button">
              <i className="bi bi-search"></i> {/* Magnifying glass icon */}
            </Button>
          </InputGroup>
        </Form>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;