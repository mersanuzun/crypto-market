import React from "react";
import "./Error.css";

export default (props) => {
    return (
        <div className="error-container">
            {props.message}
        </div>
    );
}