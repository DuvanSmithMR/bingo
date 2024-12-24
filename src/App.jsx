import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import BingoBoard from "./components/BingoBoard";
import GameModeSelector from "./components/GameModeSelector";
import ResetButton from "./components/ResetButton";
import Header from "./components/Header";
import BingoTable from "./components/BingoTable";  // Importar BingoTable en lugar de BingoApp

const BingoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "100%",
  margin: "auto",
  backgroundColor: "#fafafa",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
}));

const getFromLocalStorage = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

const saveToLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const App = () => {
  const initialNumbers = getFromLocalStorage("bingoNumbers", {
    B: Array.from({ length: 15 }, (_, i) => ({ value: i + 1, selected: false })),
    I: Array.from({ length: 15 }, (_, i) => ({ value: i + 16, selected: false })),
    N: Array.from({ length: 15 }, (_, i) => ({ value: i + 31, selected: false })),
    G: Array.from({ length: 15 }, (_, i) => ({ value: i + 46, selected: false })),
    O: Array.from({ length: 15 }, (_, i) => ({ value: i + 61, selected: false })),
  });

  const [numbers, setNumbers] = useState(initialNumbers);
  const [gameMode, setGameMode] = useState(() =>
    getFromLocalStorage("bingoMode", "full")
  );

  useEffect(() => {
    saveToLocalStorage("bingoNumbers", numbers);
    saveToLocalStorage("bingoMode", gameMode);
  }, [numbers, gameMode]);

  const toggleNumber = (letter, index) => {
    const updatedNumbers = { ...numbers };
    updatedNumbers[letter][index].selected = !updatedNumbers[letter][index].selected;
    setNumbers(updatedNumbers);
  };

  const resetBoard = () => {
    const resetNumbers = {
      B: Array.from({ length: 15 }, (_, i) => ({ value: i + 1, selected: false })),
      I: Array.from({ length: 15 }, (_, i) => ({ value: i + 16, selected: false })),
      N: Array.from({ length: 15 }, (_, i) => ({ value: i + 31, selected: false })),
      G: Array.from({ length: 15 }, (_, i) => ({ value: i + 46, selected: false })),
      O: Array.from({ length: 15 }, (_, i) => ({ value: i + 61, selected: false })),
    };
    setNumbers(resetNumbers);
  };

  return (
    <BingoContainer>
      <Header />
      <GameModeSelector gameMode={gameMode} setGameMode={setGameMode} />
      <BingoBoard numbers={numbers} toggleNumber={toggleNumber} />
      <ResetButton resetBoard={resetBoard} />
      {/* Pasa el gameMode a BingoTable */}
      <BingoTable gameMode={gameMode} />
    </BingoContainer>
  );
};

export default App;