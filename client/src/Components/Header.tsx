import React from "react";
import "./Header.css";
import { HeaderProps as Props } from "../model/types";

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
                <h1>{this.props.header}</h1>
            </div>
        );
    }
}

export default Header;
