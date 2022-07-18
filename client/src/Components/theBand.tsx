import React, { FunctionComponent as FC } from "react";
import Header from "./Header";
import "./theBand.css";
import MemberDialog from "./MemberDialog";
import { Trans } from "react-i18next";
import { memberInfos } from "../i18n/memberInfo";

const TheBand: FC = () => {
    const [modalShow, setModalShow] = React.useState<boolean>(false);
    const [member, setMember] = React.useState<string>("");

    return (
        <div>
            <Header id="theBand" />
            <div className="theBand-container">
                <span className="theBand-mainText">
                    <Trans i18nKey="bandText" />
                </span>
            </div>
            <div className="theBand-container theBand-wrap">
                {memberInfos.map((member) => {
                    let pictureSrc: string = require("./pictures/" +
                        member.firstName +
                        "_" +
                        member.lastName +
                        ".jpg");
                    return (
                        <div
                            className="theBand-item theBand-width"
                            key={member.id}
                        >
                            <div className="theBand-member theBand-width">
                                <span className="theBand-name">
                                    <Trans i18nKey={member.id} />
                                </span>
                                <img
                                    className="theBand-memberPic theBand-picWidth"
                                    src={pictureSrc}
                                    alt={
                                        member.firstName + " " + member.lastName
                                    }
                                    onClick={() => {
                                        setModalShow(true);
                                        setMember(member.id);
                                    }}
                                ></img>
                            </div>
                        </div>
                    );
                })}
            </div>
            <MemberDialog
                //@ts-ignore
                show={modalShow}
                onClose={(modalShow: React.SetStateAction<boolean>) =>
                    setModalShow(modalShow)
                }
                member={member}
            />
        </div>
    );
};
export default TheBand;
