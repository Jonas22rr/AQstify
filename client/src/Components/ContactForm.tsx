import {
    ChangeEvent,
    FormEvent,
    FunctionComponent,
    useState,
    useRef,
} from "react";
import { Button, Form } from "react-bootstrap";
import { Trans } from "react-i18next";
import emailjs from "emailjs-com";
import { ContactProps as Props, RefObject } from "../model/types";
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import ErrorDialog from "./errorDialog";

const ContactForm: FunctionComponent<Props> = () => {
    let check: Boolean = false;
    const [nameInput, setNameInput] = useState<String>("");
    const [emailInput, setEmailInput] = useState<String>("");
    const [messageInput, setMessageInput] = useState<String>("");
    const [errorText, setErrorText] = useState<string>("");
    const ref = useRef<RefObject>(null);

    async function sendEmail(event: FormEvent<HTMLFormElement>): Promise<void> {
        await checkInputs();
        let sendedMessage: boolean = await checkSendedMessages();
        event.preventDefault();
        if (check === true && sendedMessage === true) {
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
            setSendedMessage();
        } else {
            check === false ? showToast("notFilled") : showToast("noSpam");
        }
    }

    function initializeStates(): void {
        check = false;
        setNameInput("");
        setEmailInput("");
        setMessageInput("");
    }

    async function checkInputs(): Promise<void> {
        nameInput !== "" && emailInput !== "" && messageInput !== ""
            ? (check = true)
            : (check = false);
    }

    async function checkSendedMessages(): Promise<boolean> {
        let sendMessageFromStorage = sessionStorage.getItem(
            "sendMessage"
        ) as string;
        return (
            parseInt(sendMessageFromStorage) < 2 ||
            sendMessageFromStorage === null
        );
    }

    async function setSendedMessage(): Promise<void> {
        let sendMessage: number;
        let sendMessageFromStorage = sessionStorage.getItem(
            "sendMessage"
        ) as string;

        if (sendMessageFromStorage === null) {
            sendMessageFromStorage = "0";
        }

        sendMessage = parseInt(sendMessageFromStorage as string) as number;
        sessionStorage.setItem("sendMessage", (sendMessage + 1).toString());
    }

    function showToast(dialogText: string): void {
        setErrorText(dialogText);
        ref.current?.showToast();
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
            <ErrorDialog ref={ref} dialogText={errorText} />
        </div>
    );
};

export default ContactForm;
