import { Select, Box, FormLabel, MenuItem, FormControl } from "@mui/material";
import { states } from "../../Data/data-mocked";
import "./select-state.scss";

function SelectState() {
  const maFonction = (event) => {
    console.log("event state", event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} className="dropdown-container">
      <FormControl fullWidth>
        <FormLabel id="demo-simple-select-label">State</FormLabel>
        <Select
          className="select-menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="State"
          defaultValue={"state1"}
          onChange={maFonction}
        >
          {states.map((state) => {
            return (
              <MenuItem key={state.id} value={state.id}>
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
