import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBarr.css";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

export function NavBarr() {
    const navigate = useNavigate();
    const login = () => navigate("/login");
    const signup = () => navigate("/signin");
    return (
        <>
            <Navbar className="sticky-top">
                <Container className="d-flex">
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                        <Navbar.Brand
                            to="/"
                            as={Link}
                            style={{ color: "white" }}
                        >
                            Home
                        </Navbar.Brand>
                        <Nav.Link to="/addBlog" as={Link}>
                            Add Blogs
                        </Nav.Link>
                        <Nav.Link to="/blogList" as={Link}>
                            Blog List
                        </Nav.Link>
                    </div>
                    {/* <div className="loginSignin">
                        <button onClick={login}>Log In</button>
                        <button onClick={signup}>Sign Up</button>
                    </div> */}
                </Container>
            </Navbar>
        </>
    );
}
