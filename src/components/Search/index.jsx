import React from "react";
import { TextField } from "@mui/material";

export const Search = (props) => {

  return (
    <TextField id="filled-basic" label="Digite o Nome" variant="filled"
      onBlur={props.onblur}
    />
  )

}
