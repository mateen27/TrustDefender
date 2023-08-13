import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div >
      <header className='Header'>
      <Navbar collapseOnSelect expand="lg" className="fixed-top" style={{ width: '100%' ,backgroundColor : 'rgba(51, 51, 51,0.8)'}}>
      <Container>
        <Navbar.Brand href="#home" className='text-white font-weight-bold'>Trust Defender</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto gap-x-10" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home" className='text-white font-weight-bold'>HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className='text-white font-weight-bold' >ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className='text-white font-weight-bold'>FAQ'S</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    </div>
  );
}

export default App;