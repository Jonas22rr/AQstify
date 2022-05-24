import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    NavigationBarProps as Props,
    NavigationBarState as State,
} from "../model/types";

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
                <Navbar
                    bg="dark"
                    variant="dark"
                    expand="lg"
                    fixed="top"
                    collapseOnSelect
                >
                    <Container fluid>
                        <Navbar.Brand>
                            <Nav.Link href="/" className="NameTag ">
                                AQstify
                            </Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse
                            // className="Navbar-margin-left Navbar-margin-top"
                            id="responsive-navbar-nav"
                        >
                            <Nav
                                className="me-auto "
                                // style={{ maxHeight: "100px" }}
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
                            <Nav>
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
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
