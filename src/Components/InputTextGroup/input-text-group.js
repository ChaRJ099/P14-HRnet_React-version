// import Button from "react-bootstrap/Button";
import { FormGroup, TextField, FormLabel } from "@mui/material";
import "./input-text-group.scss";

function InputTextGroup({ controlid, label, type }) {
  const maFonction = (event) => {
    console.log("event text", event.target.value);
  };
  return (
    <FormGroup className="" controleid={controlid}>
      <FormLabel>{label}</FormLabel>
      <TextField
        className="input-form custom-textfield"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "30ch" }}
        type={type}
        variant="outlined"
        margin="normal"
        onChange={maFonction}
      />
    </FormGroup>
  );
}

export default InputTextGroup;
