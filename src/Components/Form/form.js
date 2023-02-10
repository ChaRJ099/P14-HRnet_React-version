import React, { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import * as employeeService from "../../services/employee-services";
import { LightModal } from "../../../node_modules/light-modal-test4/dist/light-modal/index";
import "./form.scss";
const SelectState = lazy(() => import('../select-state/select-state'));
const SelectDepartment = lazy(() => import('../select-department/select-department'));
const InputDatePicker = lazy(() => import('../Date-picker/date-picker'));
const InputGroup = lazy(() => import('../input-group/input-group'));


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


  // toogle Form display true or false
  const toogleModal = () => {
    setModalVisible(!modalVisible);
  };

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
      <Suspense fallback={<div>Loading...</div>}>

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
                <SelectState value={stateValue} onChange={(e) => setStateValue(e.target.value)} />
              </Grid>
              <Grid item xs={6}>
                <InputGroup type="number" name="zipcode" label="Zip Code" value={zipCodeValue} onChange={(e) => setZipCodeValue(e.target.value)} />
              </Grid>
            </Grid>
          </fieldset>
          <SelectDepartment value={departmentValue} onChange={(e) => setDepartmentValue(e.target.value)} />
          <Button className="button--green" type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <LightModal onClick={toogleModal} modalVisible={modalVisible} text={"Employee created!"} />
      </Suspense>
    </>
  );
}
export default CreateEmployeeForm;
