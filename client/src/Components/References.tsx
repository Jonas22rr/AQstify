import React from "react";
import "./References.css";
import Header from "./Header";

class References extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header id="references" header="Referenzen" />
                <div className="Ref-container"></div>
            </div>
        );
    }
}

export default References;
