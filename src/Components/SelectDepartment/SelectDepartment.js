import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { departments } from "../../Data/data-mocked";
import "./select-department.scss";

function SelectState({ name }) {
  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl>
        <FormLabel id="demo-simple-select-label">Department</FormLabel>
        <Select
          name={name}
          defaultValue={"Sales"}
          className="select-menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Department"
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
    </Box>
  );
}

export default SelectState;
