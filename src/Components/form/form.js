import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import CustomSelect from "../custom-select/custom-select";
import InputDatePicker from "../date-picker/date-picker";
import InputGroup from "../input-group/input-group";
import { LightModal } from "light-modal-test4/dist/light-modal";
import * as employeeService from "../../services/employee-services";
import { states, departments } from "../../Data/data-mocked";
import "./form.scss";

function CreateEmployeeForm() {
  const [modalVisible, setModalVisible] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [birthDateValue, setBirthDateValue] = useState(null);
  const [startDateValue, setStartDateValue] = useState(null);
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState("");

  const employees = useSelector(state => state.employees);

  const toogleModal = () => {
    setModalVisible(!modalVisible);
  };

  /**
   * On submit:
   * Format dates,
   * Create newEmployee object with properties corresponding to the inputs,
   * Update newEmployee properties states with the values ​​entered in the inputs,
   * Push the newEmployee to the employees array,
   * Update employees state with the updated array,
   * launch toogleModal().
   * @param {*} e
   */

  const submitForm = (e) => {
    e.preventDefault();

    const birthDateValueFormated = new Date(birthDateValue).toLocaleDateString();
    const startDateValueFormated = new Date(startDateValue).toLocaleDateString();
    const newEmployee = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      birthdate: birthDateValueFormated,
      startdate: startDateValueFormated,
      street: streetValue,
      city: cityValue,
      state: stateValue,
      zipcode: zipCodeValue,
      department: departmentValue,
    };

    employees.push(newEmployee);
    employeeService.setEmployee(employees);
    toogleModal();
  }

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <div className="names-container">
          <InputGroup type="text" name="firstname" label="Firstname" value={firstNameValue} onChange={(e) => setFirstNameValue(e.target.value)} />
          <InputGroup type="text" name="lastname" label="Lastname" value={lastNameValue} onChange={(e) => setLastNameValue(e.target.value)} />
        </div>
        <div className="dates-container">
          <InputDatePicker name="birthdate" label="Date of Birth" value={birthDateValue} onChange={(newValue) => {
            setBirthDateValue(newValue);
          }} />
          <InputDatePicker name="startdate" label="Start date" value={startDateValue} onChange={(newValue) => {
            setStartDateValue(newValue);
          }} />
        </div>
        <fieldset className="form-address-container">
          <legend className="text-muted">Address</legend>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <InputGroup type="text" name="street" label="Street" value={streetValue} onChange={(e) => setStreetValue(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <InputGroup type="text" name="city" label="City" value={cityValue} onChange={(e) => setCityValue(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <CustomSelect value={stateValue} name={"State"} options={states} onChange={(e) => setStateValue(e.target.value)} />
            </Grid>
            <Grid item xs={6}>
              <InputGroup type="number" name="zipcode" label="Zip Code" value={zipCodeValue} onChange={(e) => setZipCodeValue(e.target.value)} />
            </Grid>
          </Grid>
        </fieldset>
        <CustomSelect value={departmentValue} name={"Department"} options={departments} onChange={(e) => setDepartmentValue(e.target.value)} />
        <Button className="button--green" type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <LightModal onClick={toogleModal} modalVisible={modalVisible} text={"Employee created!"} />
    </>
  );
}

export default CreateEmployeeForm;
