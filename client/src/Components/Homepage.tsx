import React from "react";
import PicCarousel from "./Carousel";
import TheBand from "./theBand";
import Contact from "./Contact";
import LegalNotice from "./LegalNotice";
import Watch from "./Watch";

class Homepage extends React.Component<{}, {}> {
    render() {
        return (
            <div id="App" className="App">
                <div className="App">
                    <PicCarousel />
                    <TheBand />
                    <Watch />
                    <Contact />
                    <LegalNotice />
                </div>
            </div>
        );
    }
}

export default Homepage;
