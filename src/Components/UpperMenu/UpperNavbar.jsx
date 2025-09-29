import { Navbar, Nav, Container, NavbarText } from 'react-bootstrap'
import './MyNavbar.css'
// import "bootswatch/dist/lux/bootstrap.min.css";

function MyNavbar() {
  return (
    <Navbar expand={false} bg="dark" data-bs-theme="dark" fixed="top" className='my-navbar'>
      <Container className='countainer-fluid'>
        <Navbar.Brand href="#">Homepage</Navbar.Brand>
        <Nav.Link href='#teste'>Login 2</Nav.Link>
        
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default MyNavbar
