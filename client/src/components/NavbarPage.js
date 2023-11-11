import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import logo from "../images/design2.gif"; // Change to your logo path

function NavbarPage() {
  const location = useLocation();

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
            <Nav.Link as={Link} to="/portfolio" className={`text-color ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about" className={`text-color ${location.pathname === '/about' ? 'text-primary' : ''}`}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`text-color ${location.pathname === '/contact' ? 'text-primary' : ''}`}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              size="sm"
            />
            <Button variant="outline-primary" id="search-button">
              <i className="bi bi-search"></i> {/* Magnifying glass icon */}
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
