import React, { ChangeEvent, FormEvent } from "react";
import "./Contact.css";
import Header from "./Header";
import emailjs from "emailjs-com";
import { ContactState as State, ContactProps as Props } from "../model/types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Instagram from "./icons/Instagram.png";
import YouTube from "./icons/YouTube.png";
import Email from "./icons/Email.png";
import Phone from "./icons/Telephone.png";
import Location from "./icons/Location.png";
import Facebook from "./icons/Facebook.png";
import i18n from "../i18n/i18n.json";

// wenn Props oder State der Klasse leer ist muss es mit einem leeren Object gefüllt werden -> <{}, State>

class Contact extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            check: false,
            nameInput: "",
            emailInput: "",
            messageInput: "",
        } as State;

        this.sendEmail = this.sendEmail.bind(this);
        this.changeNameInput = this.changeNameInput.bind(this);
        this.changeEmailInput = this.changeEmailInput.bind(this);
        this.changeMessageInput = this.changeMessageInput.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    public async sendEmail(event: FormEvent<HTMLFormElement>) {
        await this.checkInputs();
        event.preventDefault();
        if (this.state.check === true) {
            emailjs
                .sendForm(
                    "service_u4pnvsh",
                    "template_ximmgkf",
                    event.target as any,
                    "user_FDfNlipmRYOQDPvG3tjF7"
                )
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });

            this.setState({
                check: false,
                nameInput: "",
                emailInput: "",
                messageInput: "",
            });
        }
    }

    checkInputs() {
        if (
            this.state.nameInput !== "" &&
            this.state.emailInput !== "" &&
            this.state.messageInput !== ""
        ) {
            this.setState({
                check: true,
            });
        } else {
            alert("Bitte füllen sie zuerst alle Felder aus!");
        }
    }

    changeNameInput(event: ChangeEvent<HTMLInputElement>): void {
        let input = event.target.value as any;
        this.setState({
            nameInput: input,
        });
    }

    changeEmailInput(event: ChangeEvent<HTMLInputElement>): void {
        let input = event.target.value;
        this.setState({
            emailInput: input,
        });
    }

    changeMessageInput(event: ChangeEvent<HTMLTextAreaElement>): void {
        let input = event.target.value;
        this.setState({
            messageInput: input,
        });
    }

    setInput() {}

    render() {
        return (
            <div className="Contact-bg">
                <div className="Contact-spacer"></div>
                <Header id="contactUs" header="Kontaktiere uns" />
                <div className="Contact-container Contact-wrap ">
                    <div
                        className="Contact-item "
                        style={{ textAlign: "center" }}
                    >
                        <h3>{i18n.contactInfo}</h3>
                        <p>
                            <img src={Location} alt="Location" />
                            &nbsp;{i18n.location}
                        </p>
                        <p>
                            <img src={Phone} alt="Phone" />
                            &nbsp;{i18n.phoneNumber}
                        </p>
                        <p>
                            <img src={Email} alt="Email" />
                            &nbsp; {i18n.email}
                        </p>
                        <div className="Contact-container">
                            <div className="Contact-item">
                                <a href={i18n.instagramLink}>
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
                    <div className="Contact-item Contact-noPaddingImportant">
                        <Form onSubmit={this.sendEmail}>
                            <div className="Contact-container Contact-wrap Contact-noPaddingImportant">
                                <div className="Contact-nameInput">
                                    <Form.Control
                                        id="nameInput"
                                        name="name"
                                        type="text"
                                        placeholder={i18n.phContactName}
                                        onChange={this.changeNameInput}
                                        value={this.state.nameInput}
                                    />
                                </div>
                                <div className="Contact-emailInput">
                                    <Form.Control
                                        id="emailInput"
                                        name="user_email"
                                        type="email"
                                        placeholder={i18n.phEmail}
                                        onChange={this.changeEmailInput}
                                        value={this.state.emailInput}
                                    />
                                </div>
                            </div>
                            <div className="Contact-container Contact-textArea">
                                <Form.Control
                                    id="messageInput"
                                    name="message"
                                    as="textarea"
                                    rows={3}
                                    placeholder={i18n.phMessage}
                                    onChange={this.changeMessageInput}
                                    value={this.state.messageInput}
                                />
                            </div>
                            <div className="Contact-container Contact-textArea">
                                <Button
                                    id="idBtn"
                                    type="submit"
                                    variant="primary"
                                >
                                    {i18n.send}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
