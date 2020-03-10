import React from "react";
import { Button } from "react-bootstrap";

// need to be able to save books
function SaveBtn({ type = "default", className, children, onClick }) {

    // saves book to db and shows modal
    const click = () => {
        onClick()
    };

    return (
            <button onClick={click} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
                {children}
            </button>

    );
};