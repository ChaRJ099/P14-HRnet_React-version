// import React, { useState } from "react";
import "./modal.scss";

function Modal({ onClick }) {
  return (
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <button
          type="button"
          className="btn-secondary btn-close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onClick}
        />
        <div className="modal-body">Employee created!</div>
      </div>
    </div>
  );
}

export default Modal;
