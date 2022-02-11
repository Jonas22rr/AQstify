import React, { ChangeEvent, FormEvent } from "react";
import "./Contact.css";
import Header from "./Header";
import emailjs from "emailjs-com";
import { ContactState as State, ContactProps as Props } from "../model/types";

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
            <div className="contactContainer">
                <Header id="contactUs" header="Kontaktiere uns" />
                <div className="contactBox">
                    <div className="contact1">
                        <div className="spanText">
                            <span>Aschaffenburg, DE</span>
                        </div>
                        <div>
                            <span>Tel: 0160/93177315</span>
                        </div>
                        <div>
                            <span>Email: aqstify.band@gmail.com</span>
                        </div>
                    </div>
                    <form className="contact2" onSubmit={this.sendEmail}>
                        <div className="inputContainer">
                            <input
                                id="nameInput"
                                name="name"
                                className="littleInput"
                                type="text"
                                placeholder="Name"
                                onChange={this.changeNameInput}
                                value={this.state.nameInput}
                            />
                            <input
                                id="emailInput"
                                name="user_email"
                                className="littleInput"
                                type="email"
                                placeholder="Email"
                                onChange={this.changeEmailInput}
                                value={this.state.emailInput}
                            />
                        </div>
                        <div className="messageContainer">
                            <textarea
                                id="messageInput"
                                name="message"
                                placeholder="Nachricht"
                                onChange={this.changeMessageInput}
                                value={this.state.messageInput}
                            />
                        </div>
                        <div className="btnContainer">
                            <button id="idBtn" type="submit">
                                senden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
