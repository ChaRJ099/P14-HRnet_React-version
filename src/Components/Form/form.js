import {
  FormGroup,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "dayjs/locale/fr";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./form.scss";
import { useState } from "react";
import { states, departments } from "../../Data/data-mocked";
import { setEmployee } from "../../Utils/services";

function CreateEmployeeForm() {

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [birthDateValue, setBirthDateValue] = useState(null);
  const [startDateValue, setStartDateValue] = useState(null);
  const [streetValue, setStreetValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [stateValue, setStateValue] = useState();
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      birthDate: birthDateValue,
      startDate: startDateValue,
      street: streetValue,
      city: cityValue,
      state: stateValue,
      zipCode: zipCodeValue,
      department: departmentValue,
    };
    setEmployee(newEmployee);
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <FormGroup>
        <TextField
          id="outlined-name"
          name="firstname"
          label="Firstname"
          className="input-form custom-textfield"
          size="small"
          type="text"
          variant="outlined"
          margin="normal"
          value={firstNameValue}
          onChange={(e) => setFirstNameValue(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          name="lastnamename"
          label="Lastname"
          className="input-form custom-textfield"
          size="small"
          type="text"
          variant="outlined"
          margin="normal"
          value={lastNameValue}
          onChange={(e) => setLastNameValue(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DatePicker
            name="birthdate"
            label="Date of Birth"
            size="small"
            value={birthDateValue}
            onChange={(newValue) => {
              setBirthDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormGroup>
      <FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DatePicker
            name="startdate"
            label="Start date"
            size="small"
            value={startDateValue}
            onChange={(newValue) => {
              setStartDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormGroup>

      <fieldset className="form-address-container">
        <legend className="text-muted">Address</legend>
        <FormGroup>
          <TextField
            name="street"
            label="Street"
            className="input-form custom-textfield"
            size="small"
            type="text"
            variant="outlined"
            margin="normal"
            value={streetValue}
            onChange={(e) => setStreetValue(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            name="city"
            label="City"
            className="input-form custom-textfield"
            size="small"
            type="text"
            variant="outlined"
            margin="normal"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            name="state"
            className="select-menu"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="State"
            defaultValue="Alabama"
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
        <FormGroup>
          <TextField
            name="zipcode"
            label="Zip Code"
            className="input-form custom-textfield"
            size="small"
            type="number"
            variant="outlined"
            margin="normal"
            value={zipCodeValue}
            onChange={(e) => setZipCodeValue(e.target.value)}
          />
        </FormGroup>
      </fieldset>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          name="department"
          className="select-menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Department"
          defaultValue="Sales"
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
  );
}
export default CreateEmployeeForm;
