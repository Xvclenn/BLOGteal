import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBarr.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function NavBarr() {
    return (
        <>
            <Navbar>
                <Container className='d-flex justify-content-start gap-3'>
                    <Navbar.Brand to='/' as={Link} style={{ color: 'white' }}>
                        Home
                    </Navbar.Brand>
                    <Nav.Link to='/addBlog' as={Link}>
                        Add Blogs
                    </Nav.Link>
                    <Nav.Link to='/blogList' as={Link}>
                        Blog List
                    </Nav.Link>
                </Container>
            </Navbar>
        </>
    );
}
