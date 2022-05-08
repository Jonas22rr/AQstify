import React from "react";
import Header from "./Header";
import "./theBand.css";
import ThorstenBott from "./pictures/Thorsten_Bott.jpeg";
import NikHuber from "./pictures/Nik_Huber.jpg";
import GeroSteigerwald from "./pictures/Gero_Steigerwald.jpg";
import i18n from "../i18n/i18n.json";

class TheBand extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header header="Die Band" />
                <div className="theBand-container">
                    <span className="theBand-mainText">{i18n.bandText}</span>
                </div>
                <div className="theBand-container theBand-wrap">
                    <div className="theBand-item theBand-width">
                        <div className="theBand-member theBand-width">
                            <span className="theBand-name">{i18n.tB}</span>
                            <img
                                className="theBand-memberPic theBand-picWidth"
                                src={ThorstenBott}
                                alt={i18n.tB}
                            ></img>
                        </div>
                    </div>
                    <div className="theBand-item theBand-width">
                        <div className="theBand-member theBand-width">
                            <span className="theBand-name">{i18n.nH}</span>
                            <img
                                className="theBand-memberPic theBand-picWidth"
                                src={NikHuber}
                                alt={i18n.nH}
                            ></img>
                        </div>
                    </div>
                    <div className="theBand-item theBand-width">
                        <div className="theBand-member theBand-width">
                            <span className="theBand-name">{i18n.gS}</span>
                            <img
                                className="theBand-memberPic theBand-picWidth"
                                src={GeroSteigerwald}
                                alt={i18n.gS}
                            ></img>
                        </div>
                    </div>
                    <div className="theBand-item theBand-width">
                        <div className="theBand-member theBand-width">
                            <span className="theBand-name">{i18n.tB}</span>
                            <img
                                className="theBand-memberPic  theBand-picWidth"
                                src={ThorstenBott}
                                alt="Thorsten Bott"
                            ></img>
                        </div>
                    </div>
                </div>
                <div id="references"></div>
            </div>
        );
    }
}

export default TheBand;
