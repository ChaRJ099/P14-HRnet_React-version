import "./modal.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SimpleBackdrop from "../Backdrop/backdrop";

function Modal({ onClick, modalVisible }) {
  if (modalVisible) {
    return (
      <>
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
        <SimpleBackdrop />
      </>
    )
  };
}
export default Modal;

