import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./pictures/logo.jpg";
import five from "./pictures/5.jpg";
import seven from "./pictures/7.jpg";
import eight from "./pictures/8.jpg";
import ten from "./pictures/10.jpg";
import "./Carousel.css";
import Header from "./Header";

class PicCarousel extends React.Component {
    render() {
        return (
            <div>
                <Header id="Home" />
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            id="CarouselImg"
                            className="d-block w-100 Carousel-width"
                            src={logo}
                            alt="logo"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 Carousel-width"
                            src={ten}
                            alt="ten"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 Carousel-width"
                            src={five}
                            alt="five"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 Carousel-width"
                            src={seven}
                            alt="seven"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 Carousel-width"
                            src={eight}
                            alt="eight"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default PicCarousel;
