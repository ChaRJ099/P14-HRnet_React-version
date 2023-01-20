// import Button from "react-bootstrap/Button";
import {
  FormGroup,
  FormControl,
  FormLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import InputTextGroup from "../InputTextGroup/input-text-group";
import "./form.scss";
import SelectState from "../SelectState/SelectState";
import SelectDepartment from "../SelectDepartment/SelectDepartment";
import InputDatePicker from "../Date-picker/date-picker";
// import { useState } from "react";

function CreateEmployeeForm() {
  return (
    <form>
      <InputTextGroup
        controlId={"formFirstname"}
        label={"Firstname"}
        type={"text"}
      />
      <InputTextGroup
        controlId={"formLastname"}
        label={"Lastname"}
        type={"text"}
      />
      <InputDatePicker controlId={"formBirthdate"} label={"Date of Birth"} />
      <InputDatePicker controlId={"formStartDate"} label={"Start date"} />
      <fieldset className="form-address-container">
        <legend className="text-muted">Address</legend>

        <FormGroup className="" controleId="formStreet">
          <FormLabel>Street</FormLabel>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            // label="Street"
            type="text"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </FormGroup>
        <FormGroup className="" controleId="formCity">
          <FormLabel>City</FormLabel>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            // label="Street"
            type="text"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start"></InputAdornment>
              ),
            }}
          />
        </FormGroup>
        <SelectState />
        <FormGroup className="mb-3" controlId="formZipCode">
          <FormLabel>Zip Code</FormLabel>
          <FormControl type="number" placeholder="" />
        </FormGroup>
      </fieldset>
      <SelectDepartment />
    </form>
  );
}

export default CreateEmployeeForm;
