import React, { FunctionComponent } from "react";
import { MemberDialogProps, Memberinfos } from "../model/types.js";
import "./MemberDialog.css";
import i18n from "../i18n/i18n.json";
import { MemberInfos } from "../i18n/memberInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "gray",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const MemberDialog: FunctionComponent<MemberDialogProps> = (props) => {
    const member = MemberInfos.find(
        (e: { id: string }) => e.id === props.member
    ) as Memberinfos;

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
                        {member?.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {member?.infoText}
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
                        {i18n.errorMessage}
                    </Typography>
                </Box>
            </Modal>
        );
    }
};

export default MemberDialog;
