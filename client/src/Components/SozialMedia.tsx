import React from "react";
import "./SozialMedia.css";
import Instagram from "./icons/Instagram.png";
import YouTube from "./icons/YouTube.png";

class SozialMedia extends React.Component<{}, {}> {
    render() {
        return (
            <div className="SozialMedia-Container">
                <a
                    className="Insta-Btn SozialMedia-Style SozialMedia-TextWidth"
                    id="idInsta"
                    href="https://instagram.com/aq.stify?utm_medium=copy_link"
                >
                    <img id="Insta" alt="instagram" src={Instagram} />
                    Instagram
                </a>
                <div className="SozialMedia-Spacer"></div>
                <a
                    className="YouTube-Btn SozialMedia-Style SozialMedia-TextWidth"
                    href="https://instagram.com/aq.stify?utm_medium=copy_link"
                >
                    <img id="YouTube" alt="youTube" src={YouTube} />
                    YouTube
                </a>
            </div>
        );
    }
}

export default SozialMedia;
