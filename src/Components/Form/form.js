// import Button from "react-bootstrap/Button";
import { FormGroup, FormControl, FormLabel } from "@mui/material";
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
        controlid={"formFirstname"}
        label={"Firstname"}
        type={"text"}
      />
      <InputTextGroup
        controlid={"formLastname"}
        label={"Lastname"}
        type={"text"}
      />
      <InputDatePicker controlid={"formBirthdate"} label={"Date of Birth"} />
      <InputDatePicker controlid={"formStartDate"} label={"Start date"} />
      <fieldset className="form-address-container">
        <legend className="text-muted">Address</legend>
        <InputTextGroup
          controlid={"formStreet"}
          label={"Street"}
          type={"text"}
        />
        <InputTextGroup controlid={"formCity"} label={"City"} type={"text"} />
        <SelectState />
        <FormGroup className="mb-3" controlid="formZipCode">
          <FormLabel>Zip Code</FormLabel>
          <FormControl type="number" placeholder="" />
        </FormGroup>
      </fieldset>
      <SelectDepartment />
    </form>
  );
}

export default CreateEmployeeForm;
