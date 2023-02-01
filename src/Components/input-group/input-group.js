// import Button from "react-bootstrap/Button";
import { TextField } from "@mui/material";
import "./input-group.scss";

function InputGroup(props) {
  return (
    <TextField
      size="small"
      fullWidth
      required
      id="filled-basic"
      className="form-custom-textfield"
      type={props.type}
      variant="filled"
      name={props.name}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default InputGroup;
