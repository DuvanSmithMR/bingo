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

const BingoTable = ({ gameMode }) => {
  // Función para crear el tablero según el modo seleccionado
  const generateBoard = () => {
    let board = [
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
    ];

    switch (gameMode) {
      case "full":
        // El modo 'fill' rellena todo el tablero
        board = board.map(row => row.map(() => "X"));
        break;

      case "line":
        // El modo 'line' selecciona la primera fila (puedes cambiarla a cualquier línea o columna)
        board[0] = ["X", "X", "X", "X", "X"];
        break;

      case "corner":
        // El modo 'corners' selecciona las esquinas
        board[0][0] = "X"; // Esquina superior izquierda
        board[0][4] = "X"; // Esquina superior derecha
        board[4][0] = "X"; // Esquina inferior izquierda
        board[4][4] = "X"; // Esquina inferior derecha
        break;

      case "cross":
        // El modo 'cross' selecciona la cruz
        board[0][0] = "X";
        board[0][4] = "X";
        board[4][0] = "X";
        board[4][4] = "X";
        board[2][2] = "X"; // Casilla central
        break;

      default:
        // Por si no se pasa un tipo válido de juego
        break;
    }

    return board;
  };

  const board = generateBoard();

  // Generar el tablero según el modo seleccionado
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <Grid container key={rowIndex} spacing={1} justifyContent="center">
        {row.map((cell, colIndex) => {
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
          Tabla de Bingo:{" "}
          {gameMode === "full" && "Relleno completo"}
          {gameMode === "line" && "Línea completa"}
          {gameMode === "corner" && "Esquinas"}
          {gameMode === "cross" && "Cruz"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {renderBoard()}
      </Grid>
    </Grid>
  );
};

export default BingoTable;