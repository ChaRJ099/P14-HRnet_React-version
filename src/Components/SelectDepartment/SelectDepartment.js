import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { departments } from "../../Data/data-mocked";

function SelectState() {
  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl fullWidth>
        <FormLabel id="demo-simple-select-label">Department</FormLabel>
        <Select
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
