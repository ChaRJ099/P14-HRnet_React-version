// import Button from "react-bootstrap/Button";
import { FormGroup, TextField, FormLabel } from "@mui/material";
import "./input-text-group.scss";

function InputTextGroup({ controlid, label, type, value, onChange, name }) {
  return (
    <FormGroup className="" controleid={controlid}>
      <FormLabel>{label}</FormLabel>
      <TextField
        name={name}
        className="input-form custom-textfield"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "30ch" }}
        type={type}
        variant="outlined"
        margin="normal"
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
}

export default InputTextGroup;
