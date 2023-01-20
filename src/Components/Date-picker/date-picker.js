import React from "react";
import { FormGroup, FormLabel } from "@mui/material";
import "./date-picker.scss";

import { useState } from "react";
// import { format } from "date-fns";
import DatePicker from "react-date-picker";
// import "react-day-picker/dist/style.css";

function InputDatePicker({ controlId, label }) {
  const [value, onChange] = useState(new Date());

  return (
    <FormGroup className="date-picker-container" controleId={controlId}>
      <FormLabel>{label}</FormLabel>
      <div>
        <DatePicker
          onChange={onChange}
          value={value}
          className="custom-date-picker"
        />
      </div>
    </FormGroup>
  );
}

export default InputDatePicker;
