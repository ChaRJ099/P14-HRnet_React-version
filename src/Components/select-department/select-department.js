import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { departments } from "../../Data/data-mocked";

function SelectDepartment(props) {
  return (
    <FormControl required fullWidth size="small">
      <InputLabel id="demo-select-small">Department</InputLabel>
      <Select
        variant="filled"
        name="department"
        className="select-menu"
        labelId="demo-select-small"
        id="demo-select-small"
        label="Department"
        value={props.value}
        onChange={props.onChange}
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
  );
}

export default SelectDepartment;
