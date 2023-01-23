// import React, { useState } from "react";
import "./modal.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Modal({ onClick }) {
  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <span className="modal-text">Employee created!</span>
        </div>
        <CloseRoundedIcon
          className="close-button"
          type="button"
          aria-label="Close"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Modal;
