import { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { ContactProps as Props } from "../model/types";
import "./Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rgbToHex } from "@mui/material";

const ContactForm: FunctionComponent<Props> = () => {
    let check: Boolean = false;
    const [nameInput, setNameInput] = useState<String>("");
    const [emailInput, setEmailInput] = useState<String>("");
    const [messageInput, setMessageInput] = useState<String>("");
    const { t } = useTranslation();

    async function sendEmail(event: FormEvent<HTMLFormElement>) {
        await checkInputs();
        event.preventDefault();
        if (check === true) {
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

            initializeStates();
        }
    }

    function initializeStates(): void {
        check = false;
        setNameInput("");
        setEmailInput("");
        setMessageInput("");
    }

    async function checkInputs() {
        if (nameInput !== "" && emailInput !== "" && messageInput !== "") {
            check = true;
        } else {
            showToast();
        }
    }

    function showToast(): void {
        toast.error(t("notFilled"), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function changeInput(event: ChangeEvent<HTMLInputElement>): void {
        switch (event.target.name) {
            case "name":
                setNameInput(event.target.value);
                break;
            case "user_email":
                setEmailInput(event.target.value);
                break;
            case "message":
                setMessageInput(event.target.value);
                break;
        }
    }

    return (
        <div className="Contact-item Contact-noPaddingImportant">
            <Form onSubmit={sendEmail}>
                <div className="Contact-container Contact-wrap Contact-noPaddingImportant">
                    <div className="Contact-nameInput">
                        <Form.Label>
                            <Trans i18nKey={"lableContactName"} />
                        </Form.Label>
                        <Form.Control
                            id="nameInput"
                            name="name"
                            type="text"
                            onChange={changeInput}
                            value={nameInput as string}
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
                            onChange={changeInput}
                            value={emailInput as string}
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
                        onChange={changeInput}
                        value={messageInput as string}
                    />
                </div>
                <div className="Contact-containerBtn">
                    <Button id="idBtn" type="submit" variant="primary">
                        <Trans i18nKey={"send"} />
                    </Button>
                </div>
            </Form>
            <ToastContainer
                toastStyle={{
                    backgroundColor: "rgb(25, 25, 25)",
                    border: "2px solid rgb(105, 105, 105)",
                }}
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ContactForm;
