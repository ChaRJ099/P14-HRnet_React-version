import "./modal.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Modal({ onClick, modalVisible }) {
  if (modalVisible) {
    return (
      <>
        <div className="modal-container">
          <div className="modal-backdrop"></div>
          <div className="modal-wrapper">
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
        </div>
      </>
    )
  };
}
export default Modal;

