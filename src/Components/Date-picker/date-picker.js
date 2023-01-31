import * as React from "react";
import { FormGroup, TextField, FormLabel } from "@mui/material";
import "./date-picker.scss";

export default function InputDatePicker({ label, value, name }) {
  return (
    <FormGroup noValidate spacing={3}>
      <FormLabel>{label}</FormLabel>
      <TextField
        name={name}
        id="date"
        type="date"
        value={value}
        InputLabelProps={{
          shrink: true,
        }}
        className="custom-date-picker"
      />
    </FormGroup>
  );
}
