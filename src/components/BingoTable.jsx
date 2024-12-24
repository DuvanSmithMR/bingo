import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

// Estilos para las celdas
const cellStyles = {
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  border: "1px solid #000",
  borderRadius: "4px",
  margin: "4px",
};

// Estilos para las celdas de "X", "O" y "-"
const xStyle = { ...cellStyles, backgroundColor: "#ff5722", color: "#ffffff" };
const oStyle = { ...cellStyles, backgroundColor: "#e0e0e0", color: "#000000" };
const centerStyle = { ...cellStyles, backgroundColor: "#ffffff", color: "#000000" };

const BingoTable = ({ bingoType }) => {
  // Crear el modelo del tablero de bingo
  const board = [
    ["X", "O", "O", "O", "X"],
    ["O", "X", "O", "X", "O"],
    ["O", "O", "-", "O", "O"],
    ["O", "X", "O", "X", "O"],
    ["X", "O", "O", "O", "X"],
  ];

  // Generar el tablero según el tipo de bingo seleccionado
  const renderBoard = () => {
    // Si es tipo "X", se colocan las "X" y "O" según el modelo
    return board.map((row, rowIndex) => (
      <Grid container key={rowIndex} spacing={1} justifyContent="center">
        {row.map((cell, colIndex) => {
          // Aplicar los estilos dependiendo de la casilla (X, O, -)
          let style;
          if (cell === "X") {
            style = xStyle;
          } else if (cell === "O") {
            style = oStyle;
          } else if (cell === "-") {
            style = centerStyle;
          }

          return (
            <Grid item key={colIndex}>
              <Paper style={style}>
                <Typography variant="h6">{cell}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    ));
  };

  return (
    <Grid container direction="column" spacing={2} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Tabla de Bingo: {bingoType === "x" ? "Bingo en X" : "Otro Tipo de Bingo"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {renderBoard()}
      </Grid>
    </Grid>
  );
};

export default BingoTable;