// import Button from "react-bootstrap/Button";
import { FormGroup, TextField, FormLabel } from "@mui/material";
import "./input-text-group.scss";

function InputTextGroup({ controlId, label, type }) {
  return (
    <FormGroup className="" controleId={controlId}>
      <FormLabel>{label}</FormLabel>
      <TextField
        className="textfield"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "30ch" }}
        // label={label}
        type={type}
        variant="outlined"
        margin="normal"
      />
    </FormGroup>
  );
}

export default InputTextGroup;
