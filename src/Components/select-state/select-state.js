import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { states } from "../../Data/data-mocked";
import "./select-state.scss";

function SelectState(props) {
  return (
    <FormControl required fullWidth size="small">
      <InputLabel id="demo-select-small">State</InputLabel>
      <Select
        name="state"
        className="select-menu"
        labelId="demo-select-small"
        id="demo-select-small"
        label="State"
        variant="filled"
        value={props.value}
        onChange={props.onChange}
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
  );
}

export default SelectState;
