import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import BingoBoard from "./components/BingoBoard";
import GameModeSelector from "./components/GameModeSelector";
import ResetButton from "./components/ResetButton";
import Header from "./components/Header";

const BingoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "800px",
  margin: "auto",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));

const App = () => {
  const initialBoard = Array(25)
    .fill()
    .map((_, i) => ({
      number: i + 1,
      marked: false,
    }));

  const [board, setBoard] = useState(() =>
    JSON.parse(localStorage.getItem("bingoBoard")) || initialBoard
  );
  const [gameMode, setGameMode] = useState(() =>
    localStorage.getItem("bingoMode") || "full"
  );

  useEffect(() => {
    localStorage.setItem("bingoBoard", JSON.stringify(board));
    localStorage.setItem("bingoMode", gameMode);
  }, [board, gameMode]);

  const toggleNumber = (index) => {
    const updatedBoard = [...board];
    updatedBoard[index].marked = !updatedBoard[index].marked;
    setBoard(updatedBoard);
  };

  const resetBoard = () => {
    setBoard(initialBoard);
  };

  return (
    <BingoContainer>
      <Header />
      <GameModeSelector gameMode={gameMode} setGameMode={setGameMode} />
      <BingoBoard board={board} toggleNumber={toggleNumber} />
      <ResetButton resetBoard={resetBoard} />
    </BingoContainer>
  );
};

export default App;