import react from 'react';
import './header.css'
import { Navbar, Nav,NavLink} from 'react-bootstrap';




const Header = ()=>{


    return(
        <Navbar  expand='lg' bg="dark" variant="dark">
            <Navbar.Brand className="ml-auto" href="/">WoWStats</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link  href ="/">Home</Nav.Link>
                <Nav.Link  href ="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;