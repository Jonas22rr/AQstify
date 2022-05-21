import React from "react";
import "./LegalNotice.css";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";

class LegalNotice extends React.Component<{}, {}> {
    render() {
        return (
            <div className="LegalNotice-Container">
                <Link to="/impressum" className="Legal-text">
                    <Trans i18nKey={"imprint"} />
                </Link>
                <span className="Legal-bull">&bull;</span>
                <Link to="/dataPrivacy" className="Legal-text">
                    <Trans i18nKey={"dataPrivacy"} />
                </Link>
            </div>
        );
    }
}

export default LegalNotice;
