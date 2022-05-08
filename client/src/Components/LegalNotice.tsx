import React from "react";
import "./LegalNotice.css";
import { Link } from "react-router-dom";
import i18n from "../i18n/i18n.json";

class LegalNotice extends React.Component<{}, {}> {
    render() {
        return (
            <div className="LegalNotice-Container">
                <Link to="/impressum" className="Legal-text">
                    {i18n.impressum}
                </Link>
                <span className="Legal-bull">&bull;</span>
                <Link to="/dataPrivacy" className="Legal-text">
                    {i18n.dataPrivacy}
                </Link>
            </div>
        );
    }
}

export default LegalNotice;
