import { Button, Grid } from "@mui/material";
import { useState } from "react";
import * as employeeService from "../../services/employee-services";
import { useSelector } from "react-redux";
import Modal from "../Modal/modal";
import InputGroup from "../input-group/input-group";
import InputDatePicker from "../Date-picker/date-picker";
import SelectDepartment from "../select-department/select-department";
import SelectState from "../select-state/select-state";
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
    // console.log("birthDateValue", new Date(birthDateValue).toLocaleDateString());
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
      <Modal onClick={toogleModal} modalVisible={modalVisible}>
        <span>HELLO</span>
      </Modal>
    </>
  );
}
export default CreateEmployeeForm;
