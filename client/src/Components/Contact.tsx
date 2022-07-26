import { FunctionComponent } from "react";
import { ContactProps as Props } from "../model/types";
import ContactInfo from "./ContactInfo";
import Header from "./Header";
import ContactForm from "./ContactForm";

const Contact: FunctionComponent<Props> = () => {
    return (
        <div className="Contact-bg">
            <div className="Contact-spacer"></div>
            <Header id="contactUs" />
            <div className="Contact-container Contact-wrap ">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
