import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/drip.png" alt="" width="60px" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="link" href="#joyas">
            Joyas
          </Nav.Link>
          <Nav.Link className="link" href='"#about'>
            About us
          </Nav.Link>
        </Nav>
        <button>
          <CartWidget />
        </button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
