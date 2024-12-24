import React, { useState } from "react";
import { Grid, FormControl, Select, MenuItem } from "@mui/material";
import BingoTable from "./BingoTable";

const BingoApp = () => {
  const [bingoType, setBingoType] = useState("x");

  const handleBingoTypeChange = (event) => {
    setBingoType(event.target.value);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <FormControl variant="outlined">
          <Select value={bingoType} onChange={handleBingoTypeChange}>
            <MenuItem value="x">Bingo en X</MenuItem>
            <MenuItem value="cross">Bingo en Cruz</MenuItem>
            <MenuItem value="corners">Esquinas</MenuItem>
            <MenuItem value="line">Línea</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <BingoTable bingoType={bingoType} />
      </Grid>
    </Grid>
  );
};

export default BingoApp;