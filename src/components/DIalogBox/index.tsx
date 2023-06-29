import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "@mui/material";

type DialogBoxProps = {
    isOpen: boolean;
    onClose: () => void;
}

const DialogBox: FC<DialogBoxProps> = ({ isOpen, onClose }) => {
    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="dialog-box"
            unmountOnExit
        >
            <div style={{
                position: 'fixed',
                inset: 0,
                left: '50%',
                zIndex: 50,
                width: '200px',
                height: '200px',
                background: 'green',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                textAlign: 'center'
            }}>
                <h2>Dialog Box Content</h2>
                <Button
                    color={'inherit'}
                    onClick={onClose}
                >
                    Close
                </Button>
            </div>
        </CSSTransition>
    );
};

export default DialogBox;