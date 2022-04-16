import React from "react";
import { TextField } from "@mui/material";

export const Search = (props) => {
  const setDigimon = props.setDigimon


  return (
    <TextField id="filled-basic" label="Digite o Nome" variant="filled"
      onBlur={(e) => {
        setDigimon(e.target.value)
      }}
    />
  )

}
