import React from "react";
import { Button } from "@mui/material";

const ResetButton = ({ resetBoard }) => (
  <Button variant="contained" color="secondary" onClick={resetBoard} sx={{ mt: 3 }}>
    Reiniciar Tablero
  </Button>
);

export default ResetButton;