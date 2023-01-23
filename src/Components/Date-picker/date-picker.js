import * as React from "react";
import { TextField, FormLabel, Stack } from "@mui/material";
import "./date-picker.scss";

//       <div>
//         {/* <DatePicker
//           onChange={maFonction}
//           value={value}
//           className="custom-date-picker"
//         /> */}
//       </div>

export default function InputDatePicker({ label }) {
  const maFonction = (event) => {
    console.log("event date", event.target.value);
  };

  return (
    <Stack component="form" noValidate spacing={3}>
      <FormLabel>{label}</FormLabel>
      <TextField
        id="date"
        type="date"
        defaultValue={new Date()}
        sx={{ width: 267 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={maFonction}
      />
    </Stack>
  );
}
