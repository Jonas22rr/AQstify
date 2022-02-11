import React from "react";
import "./LegalNotice.css";
import { Link } from "react-router-dom";

class LegalNotice extends React.Component<{}, {}> {
    render() {
        return (
            <div className="LegalNotice-Container">
                <Link to="/impressum">
                    <a className="Legal-text" href="#impressum">
                        Impressum
                    </a>
                </Link>
                <span className="Legal-bull">&bull;</span>
                <Link to="/dataPrivacy">
                    <a className="Legal-text" href="#datenschutz">
                        Datenschutz
                    </a>
                </Link>
            </div>
        );
    }
}

export default LegalNotice;
