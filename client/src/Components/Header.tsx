import React from "react";
import "./Header.css";
import { HeaderProps as Props } from "../types/types";
import { Trans } from "react-i18next";

//Vorlage (für breite usw) um in den anderen Containern zu verwenden

class Header extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className="Header">
                <div id={this.props.id} className="anker">
                    &nbsp;
                </div>
                <h1>
                    <Trans i18nKey={this.props.id} />
                </h1>
            </div>
        );
    }
}

export default Header;
