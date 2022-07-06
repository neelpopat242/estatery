import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navb() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Estatery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Rent</Nav.Link>
                            <Nav.Link href="#link">Buy</Nav.Link>
                            <Nav.Link href="#link">Sell</Nav.Link>
                            <NavDropdown title="Manage Property" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                
                            </NavDropdown>
                            <NavDropdown title="Resources" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                
                            </NavDropdown>

                        </Nav>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success me-3" type="submit">Login</button>
                            <button type="button" className="btn btn-primary">Signup</button>
                        </form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Estatery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Rent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Sell</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage Property
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Action</a></li>
                                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/#">Action</a></li>
                                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success me-3" type="submit">Login</button>
                        <button className="btn btn-outline-success me-3" type="submit">SignUp</button>
                    </form>
                </div>
            </nav> */}
        </div>
    )
}
