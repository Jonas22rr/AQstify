import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBarProps as Props } from "../model/types";

class NavigationBar extends React.Component<Props, {}> {
    render() {
        return (
            <div id="Navbar-MainContainer">
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand className="Navbar-margin-left">
                        <Nav.Link href="/" className="NameTag">
                            AQstify
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbarScroll"
                        className="Navbar-margin"
                    />
                    <Navbar.Collapse
                        id="navbarScroll"
                        className="Navbar-margin-left Navbar-margin-top"
                    >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link
                                href="/"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav1}
                            </Nav.Link>
                            <Nav.Link
                                href="#theBand"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav2}
                            </Nav.Link>
                            <Nav.Link
                                href="#references"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav3}
                            </Nav.Link>
                            <Nav.Link
                                href="#watch"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav6}
                            </Nav.Link>
                            <Nav.Link
                                href="#contactUs"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav4}
                            </Nav.Link>
                            <Nav.Link
                                href="/photogallery"
                                className="hover-underline-animation"
                            >
                                {this.props.Nav5}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
