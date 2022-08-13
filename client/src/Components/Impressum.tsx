import React, { FunctionComponent } from "react";
import "./Impressum.css";
import { useTranslation } from "react-i18next";
interface ImpressumProps {}

const Impressum: FunctionComponent<ImpressumProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="Impressum-style">
            <h1>{t("imprint.imprint")}</h1>
            <br />
            <p>
                <span>{t("imprint.text1")}</span>
                <br />
                <span>{t("imprint.text2")}</span>
                <br />
                <span>{t("imprint.text3")}</span>
                <br />
                <span>{t("imprint.text4")}</span>
                <br />
                <span>{t("imprint.text5")}</span>
                <br />
                <span>{t("imprint.text6")}</span>
                <br />
                <span>{t("imprint.text7")}</span>
                <br />
                <a
                    href="https://aqstify.netlify.app"
                    className="Impressum-HomepageLink"
                >
                    <span>{t("imprint.text8")}</span>
                </a>
                <br />
                <span>{t("imprint.text9")}</span>
                <br />
                <span>{t("imprint.text10")}</span>
            </p>
            <br />
            <br />
            <br />
            <p>
                <h1>{t("imprint.contactHeader")}</h1>
                <br />
                <span>{t("imprint.contact.text1")}</span>
                <br />
                <span>{t("imprint.contact.text2")}</span>
                <br />
                <span>{t("imprint.contact.text3")}</span>
                <br />
                <span>{t("imprint.contact.text4")}</span>
                <br />
                <span>{t("imprint.contact.text5")}</span>
            </p>
        </div>
    );
};

export default Impressum;
