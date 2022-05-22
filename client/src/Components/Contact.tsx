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
import links from "../i18n/Links.json";
import { Trans } from "react-i18next";

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
            //TODO: es wird [Object] alerted
            let value = <Trans i18nKey="notFilled" />;
            alert(value);
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
                <Header id="contactUs" />
                <div className="Contact-container Contact-wrap ">
                    <div
                        className="Contact-item "
                        style={{ textAlign: "center" }}
                    >
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
                    <div className="Contact-item Contact-noPaddingImportant">
                        <Form onSubmit={this.sendEmail}>
                            <div className="Contact-container Contact-wrap Contact-noPaddingImportant">
                                <div className="Contact-nameInput">
                                    <Form.Label>
                                        <Trans i18nKey={"lableContactName"} />
                                    </Form.Label>
                                    <Form.Control
                                        id="nameInput"
                                        name="name"
                                        type="text"
                                        onChange={this.changeNameInput}
                                        value={this.state.nameInput}
                                    />
                                </div>
                                <div className="Contact-emailInput">
                                    <Form.Label>
                                        <Trans i18nKey={"lableEmail"} />
                                    </Form.Label>
                                    <Form.Control
                                        id="emailInput"
                                        name="user_email"
                                        type="email"
                                        onChange={this.changeEmailInput}
                                        value={this.state.emailInput}
                                    />
                                </div>
                            </div>
                            <div className="Contact-container Contact-textArea">
                                <Form.Label>
                                    <Trans i18nKey={"lableMessage"} />
                                </Form.Label>
                                <Form.Control
                                    id="messageInput"
                                    name="message"
                                    as="textarea"
                                    rows={3}
                                    onChange={this.changeMessageInput}
                                    value={this.state.messageInput}
                                />
                            </div>
                            <div className="Contact-container">
                                <Button
                                    id="idBtn"
                                    type="submit"
                                    variant="primary"
                                >
                                    <Trans i18nKey={"send"} />
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
