import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";

function CustomSelect(props) {
  return (
    <FormControl required fullWidth size="small">
      <InputLabel id="demo-select-small">{props.name}</InputLabel>
      <Select
        size="small"
        name={props.name}
        className="select-menu"
        labelId="demo-select-small"
        id="demo-select-small"
        label={props.name}
        variant="filled"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
