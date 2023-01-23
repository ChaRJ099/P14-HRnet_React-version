import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { departments } from "../../Data/data-mocked";
import "./select-department.scss";

function SelectState() {
  const maFonction = (event) => {
    console.log("event department", event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl fullWidth>
        <FormLabel id="demo-simple-select-label">Department</FormLabel>
        <Select
          className="select-menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Department"
          defaultValue={"dep0"}
          onChange={maFonction}
        >
          {departments.map((department) => {
            return (
              <MenuItem key={department.id} value={department.id}>
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
