import React, { forwardRef, useImperativeHandle, Ref } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { RefObject, ErrorDialogProps } from "../types/types";

const ErrorDialog = forwardRef(
    (props: ErrorDialogProps, ref: Ref<RefObject>) => {
        const { t } = useTranslation();

        useImperativeHandle(ref, () => ({
            showToast(): void {
                toast.error(t(props.dialogText), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
        }));

        return (
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
        );
    }
);

export default ErrorDialog;
