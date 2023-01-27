import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { states } from "../../Data/data-mocked";
import "./select-state.scss";

function SelectState({ name, value }) {
  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl fullWidth>
        <FormLabel id="demo-simple-select-label">State</FormLabel>
        <Select
          name={name}
          className="select-menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="State"
          defaultValue={"Alabama"}
          value={value}
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
