import React, { FunctionComponent } from "react";
import Modal from "react-bootstrap/Modal";
import { MemberDialogProps, Memberinfos } from "../model/types.js";
import "./MemberDialog.css";
import i18n from "../i18n/i18n.json";
import { MemberInfos } from "../i18n/memberInfo";

const MemberDialog: FunctionComponent<MemberDialogProps> = (props) => {
    const member = MemberInfos.find(
        (e: { id: string }) => e.id === props.member
    ) as Memberinfos;

    if (member) {
        return (
            <Modal
                {...props}
                style={{ color: "black" }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        className="MemberDialog-fontColor"
                    >
                        {member?.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="MemberDialog-fontColor">{member?.infoText}</p>
                </Modal.Body>
            </Modal>
        );
    } else {
        return (
            <Modal
                {...props}
                style={{ color: "black" }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        className="MemberDialog-fontColor"
                    >
                        {i18n.errorMessage}
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        );
    }
};

export default MemberDialog;
