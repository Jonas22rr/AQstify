import React, { FunctionComponent as FC } from "react";
import Header from "./Header";
import "./theBand.css";
import ThorstenBott from "./pictures/Thorsten_Bott.jpeg";
import NikHuber from "./pictures/Nik_Huber.jpg";
import GeroSteigerwald from "./pictures/Gero_Steigerwald.jpg";
import i18n from "../i18n/i18n.json";
import MemberDialog from "./MemberDialog";
import { Trans } from "react-i18next";

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
                <div className="theBand-item theBand-width">
                    <div className="theBand-member theBand-width">
                        <span className="theBand-name">{i18n.tB}</span>
                        <img
                            className="theBand-memberPic theBand-picWidth"
                            src={ThorstenBott}
                            alt={i18n.tB}
                            onClick={() => {
                                setModalShow(true);
                                setMember("tb");
                            }}
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
                            onClick={() => {
                                setModalShow(true);
                                setMember("nh");
                            }}
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
                            onClick={() => {
                                setModalShow(true);
                                setMember("gs");
                            }}
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
                            onClick={() => {
                                setModalShow(true);
                                setMember("tb");
                            }}
                        ></img>
                    </div>
                </div>
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
