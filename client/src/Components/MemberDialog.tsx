import React, { FunctionComponent } from "react";
import { MemberDialogProps, MemberInfos } from "../model/types.js";
import "./MemberDialog.css";
import { memberInfos } from "../i18n/memberInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Trans } from "react-i18next";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "gray",
    border: "2px solid #ffffff",
    textdecoration: "none",
    boxShadow: 0,
    p: 4,
};

const MemberDialog: FunctionComponent<MemberDialogProps> = (props) => {
    const member = memberInfos.find(
        (e: { id: string }) => e.id === props.member
    ) as MemberInfos;

    const [showDialog, setShowDialog] = React.useState(props.show);

    React.useEffect(() => {
        setShowDialog(props.show);
    }, [props.show]);

    function onCloseDialog() {
        props.onClose(false);
        setShowDialog(false);
    }

    if (member) {
        return (
            <Modal
                disableEnforceFocus
                open={showDialog}
                onClose={onCloseDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        <Trans i18nKey={member?.id} />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Trans i18nKey={member?.infoText} />
                    </Typography>
                </Box>
            </Modal>
        );
    } else {
        return (
            <Modal
                open={showDialog}
                onClose={onCloseDialog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        <Trans i18nKey={"errorMessage"} />
                    </Typography>
                </Box>
            </Modal>
        );
    }
};

export default MemberDialog;
