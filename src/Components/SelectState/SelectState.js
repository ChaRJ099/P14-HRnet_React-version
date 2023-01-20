import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { states } from "../../Data/data-mocked";

function SelectState() {
  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl fullWidth>
        <FormLabel id="demo-simple-select-label">State</FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="State"
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
    </Box>
  );
}

export default SelectState;
