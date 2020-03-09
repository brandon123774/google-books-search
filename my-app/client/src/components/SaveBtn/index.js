import React, { useState } from "react";
import { Button } from "react-bootstrap";

// need to be able to save books
function SaveBtn({ type = "default", className, children, onClick }) {

    const [show, setShow] = useState(false);

    // handles closing of modal
    const handleClose = () => setShow(false);
    // handles showing of modal
    const handleShow = () => setShow(true);

    // saves book to db and shows modal
    const click = () => {
        handleShow()
        onClick()
    };

    return (
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

    );
};