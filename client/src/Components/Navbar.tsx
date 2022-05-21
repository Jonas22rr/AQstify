import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    NavigationBarProps as Props,
    NavigationBarState as State,
} from "../model/types";
import { ThemeProvider } from "@mui/material";

class NavigationBar extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            language: "Language",
        } as State;

        this.setGerman = this.setGerman.bind(this);
        this.setEnglish = this.setEnglish.bind(this);
    }

    private setGerman(): void {
        this.setState({
            language: "German",
        });
        this.props.language("de");
    }

    private setEnglish(): void {
        this.setState({
            language: "English",
        });
        this.props.language("en");
    }

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
                            <NavDropdown
                                title={this.state.language}
                                className="hover-underline-animation"
                            >
                                <NavDropdown.Item
                                    defaultValue={"DE"}
                                    onClick={this.setGerman}
                                >
                                    German
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    defaultValue={"EN"}
                                    onClick={this.setEnglish}
                                >
                                    English
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
