import * as React from "react";
import { FormControl, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/fr";
import "./date-picker.scss";

export default function InputDatePicker(props) {
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <DatePicker
          name={props.name}
          label={props.label}
          value={props.value}
          onChange={props.onChange}
          renderInput={(params) => <TextField variant="filled" size="small" required {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
