import { FunctionComponent } from "react";
import { Trans } from "react-i18next";
import Instagram from "../assets/icons/Instagram.png";
import YouTube from "../assets/icons/YouTube.png";
import Email from "../assets/icons/Email.png";
import Phone from "../assets/icons/Telephone.png";
import Location from "../assets/icons/Location.png";
import Facebook from "../assets/icons/Facebook.png";
import links from "../i18n/Links.json";
import "./Contact.css";

interface ContactInfoProps {}

const ContactInfo: FunctionComponent<ContactInfoProps> = (props) => {
    return (
        <div className="Contact-item " style={{ textAlign: "center" }}>
            <h3>
                <Trans i18nKey={"contactInfo"} />
            </h3>
            <p>
                <img src={Location} alt="Location" />
                &nbsp;
                <Trans i18nKey={"location"} />
            </p>
            <p>
                <img src={Phone} alt="Phone" />
                &nbsp;
                <Trans i18nKey={"phoneNumber"} />
            </p>
            <p>
                <img src={Email} alt="Email" />
                &nbsp; <Trans i18nKey={"email"} />
            </p>
            <div className="Contact-container">
                <div className="Contact-item">
                    <a href={links.instagramLink}>
                        <img
                            className="Contact-insta"
                            alt="instagram"
                            src={Instagram}
                        />
                    </a>
                </div>
                <div className="Contact-item">
                    <a href="https://instagram.com/aq.stify?utm_medium=copy_link">
                        <img
                            className="Contact-youTube"
                            alt="YouTube"
                            src={YouTube}
                        />
                    </a>
                </div>
                <div className="Contact-item">
                    <a href="https://instagram.com/aq.stify?utm_medium=copy_link">
                        <img
                            className="Contact-facebook"
                            alt="Facebook"
                            src={Facebook}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
