import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


// import 'Menu.css'
const Menu = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' className={({isActive})=> isActive ? 'bg-red'  : ''}>React-Bootstrap</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/categoria/Pokemon'>Pokemon</Link>
                    <Link to='/categoria/Pota'>Pota</Link>
                    {/* <Nav.Link href="#" as to='/detail'>Gorras</Nav.Link> */}
                    {/* <Nav.Link href="#pricing">Remeras</Nav.Link> */}                   
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Carrito</Nav.Link>
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu
