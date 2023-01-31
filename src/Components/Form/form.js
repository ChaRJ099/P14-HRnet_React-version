import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./form.scss";
import { useState } from "react";
import { states, departments } from "../../Data/data-mocked";
import * as employeeService from "../../services/employee-services";
import { useSelector } from "react-redux";
import Modal from "../Modal/modal";


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

    const newEmployee = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      birthdate: birthDateValue,
      startdate: startDateValue,
      street: streetValue,
      city: cityValue,
      state: stateValue,
      zipcode: zipCodeValue,
      department: departmentValue,
    };

    employees.push(newEmployee);
    employeeService.setEmployee(employees);
    toogleModal();
    console.log(modalVisible);
  }

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <h1 className="home-title">Create Employee</h1>
        <div className="names-container">
          <TextField
            // error
            size="small"
            fullWidth
            required
            id="filled-basic"
            name="firstname"
            label="Firstname"
            className="form-custom-textfield"
            type="text"
            variant="filled"
            value={firstNameValue}
            onChange={(e) => setFirstNameValue(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            required
            name="lastname"
            label="Lastname"
            className="input-form custom-textfield"
            type="text"
            variant="filled"
            value={lastNameValue}
            onChange={(e) => setLastNameValue(e.target.value)}
          />
        </div>
        <div className="dates-container">
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
              <DatePicker
                name="birthdate"
                label="Date of Birth"
                value={birthDateValue}
                onChange={(newValue) => {
                  setBirthDateValue(newValue);
                }}
                renderInput={(params) => <TextField variant="filled" size="small" required {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
              <DatePicker
                name="startdate"
                label="Start date"
                value={startDateValue}
                onChange={(newValue) => {
                  setStartDateValue(newValue);
                }}
                renderInput={(params) => <TextField variant="filled" size="small" required {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
        </div>
        <fieldset className="form-address-container">
          <legend className="text-muted">Address</legend>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <TextField
                size="small"
                fullWidth
                required
                name="street"
                label="Street"
                className="input-form custom-textfield"
                type="text"
                variant="filled"
                value={streetValue}
                onChange={(e) => setStreetValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                fullWidth
                required
                name="city"
                label="City"
                className="input-form custom-textfield"
                type="text"
                variant="filled"
                value={cityValue}
                onChange={(e) => setCityValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl required fullWidth size="small">
                <InputLabel id="demo-select-small">State</InputLabel>
                <Select
                  name="state"
                  className="select-menu"
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="State"
                  variant="filled"
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                >
                  {states.map((state) => {
                    return (
                      <MenuItem key={state.id} value={state.name}>
                        {state.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                required
                name="zipcode"
                label="Zip Code"
                className="input-form custom-textfield"
                type="number"
                variant="filled"
                value={zipCodeValue}
                onChange={(e) => setZipCodeValue(e.target.value)}
              />
            </Grid>
          </Grid>
        </fieldset>
        <FormControl required fullWidth size="small">
          <InputLabel id="demo-select-small">Department</InputLabel>
          <Select
            variant="filled"
            name="department"
            className="select-menu"
            labelId="demo-select-small"
            id="demo-select-small"
            label="Department"
            value={departmentValue}
            onChange={(e) => setDepartmentValue(e.target.value)}
          >
            {departments.map((department) => {
              return (
                <MenuItem key={department.id} value={department.name}>
                  {department.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <Modal onClick={toogleModal} modalVisible={modalVisible} />
    </>
  );
}
export default CreateEmployeeForm;
