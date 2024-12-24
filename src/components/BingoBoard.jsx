import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const BingoNumber = styled(Button)(({ selected }) => ({
  width: "60px",
  height: "60px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "8px",
  margin: "4px",
  backgroundColor: selected ? "#ff5722" : "#e0e0e0",
  color: selected ? "#ffffff" : "#000000",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    backgroundColor: selected ? "#ff7043" : "#d6d6d6",
    transform: "scale(1.1)",
  },
}));

const BingoBoard = ({ numbers, toggleNumber }) => (
  <Grid container direction="column" spacing={2} alignItems="center">
    {["B", "I", "N", "G", "O"].map((letter) => (
      <Grid item key={letter}>
        <Grid container alignItems="center" spacing={1}>
          {/* Encabezado */}
          <Grid item>
            <Typography variant="h6" align="center" gutterBottom>
              {letter}
            </Typography>
          </Grid>
          {/* Números Horizontales */}
          {numbers[letter].map((num, index) => (
            <Grid item key={`${letter}-${index}`}>
              <BingoNumber
                selected={num.selected}
                onClick={() => toggleNumber(letter, index)}
              >
                {num.value}
              </BingoNumber>
            </Grid>
          ))}
        </Grid>
      </Grid>
    ))}
  </Grid>
);

export default BingoBoard;