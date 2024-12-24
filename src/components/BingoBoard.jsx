import React from "react";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

const BingoNumber = styled(Button)(({ marked }) => ({
  width: "70px",
  height: "70px",
  fontSize: "1.5rem",
  fontWeight: "bold",
  borderRadius: "8px",
  margin: "5px",
  backgroundColor: marked ? "#ff5722" : "#e0e0e0",
  color: marked ? "#ffffff" : "#000000",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    backgroundColor: marked ? "#ff7043" : "#d6d6d6",
    transform: "scale(1.1)",
  },
}));

const BingoBoard = ({ board, toggleNumber }) => (
  <Grid container spacing={2} justifyContent="center">
    {board.map((cell, index) => (
      <Grid item key={index}>
        <BingoNumber marked={cell.marked} onClick={() => toggleNumber(index)}>
          {cell.number}
        </BingoNumber>
      </Grid>
    ))}
  </Grid>
);

export default BingoBoard;