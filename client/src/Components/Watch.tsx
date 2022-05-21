import React, { FunctionComponent as FC } from "react";
import Header from "./Header";
import i18n from "../i18n/i18n.json";

const Watch: FC = () => {
    return (
        <div>
            <Header id="watch" header={i18n.watch} />
        </div>
    );
};

export default Watch;
