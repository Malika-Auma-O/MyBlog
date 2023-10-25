import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import logo from "../images/blogLogo.png"


function NavbarPage() {



  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/">
        <Image src={logo} alt="Logo" height="40" />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blogs">Blog-Posts</Nav.Link>
            <Nav.Link href="/about">Portfolio</Nav.Link>
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

export default NavbarPage;