/* eslint-disable jsx-a11y/iframe-has-title */
import React, { FunctionComponent as FC } from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import "./Watch.css";

const Watch: FC = () => {
    return (
        <div>
            <Header id="watch" />
            <div className="Watch-container">
                <Container>
                    <div className="Watch-wrapper ">
                        <iframe
                            src="https://www.youtube.com/embed/gAgD6y4dEDI"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Watch;
