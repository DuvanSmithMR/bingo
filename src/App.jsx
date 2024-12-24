import React, { useState, useEffect } from 'react';
import BingoBoard from './components/BingoBoard';
import BallSelector from './components/BallSelector';
import GameModeSelector from './components/GameModeSelector';
import ResetButton from './components/ResetButton.jsx';
import { saveToLocalStorage, getFromLocalStorage } from './utils/localStorage';

const App = () => {
  const initialNumbers = getFromLocalStorage('bingoNumbers', {
    B: Array.from({ length: 15 }, (_, i) => ({ value: i + 1, selected: false })),
    I: Array.from({ length: 15 }, (_, i) => ({ value: i + 16, selected: false })),
    N: Array.from({ length: 15 }, (_, i) => ({ value: i + 31, selected: false })),
    G: Array.from({ length: 15 }, (_, i) => ({ value: i + 46, selected: false })),
    O: Array.from({ length: 15 }, (_, i) => ({ value: i + 61, selected: false })),
  });

  const [numbers, setNumbers] = useState(initialNumbers);
  const [mode, setMode] = useState('full');

  useEffect(() => {
    saveToLocalStorage('bingoNumbers', numbers);
  }, [numbers]);

  const toggleNumber = (letter, value) => {
    setNumbers((prev) => ({
      ...prev,
      [letter]: prev[letter].map((num) =>
        num.value === value ? { ...num, selected: !num.selected } : num
      ),
    }));
  };

  const resetBoard = () => {
    setNumbers(initialNumbers);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Bingo Tradicional</h1>
      <GameModeSelector mode={mode} setMode={setMode} />
      <BingoBoard numbers={numbers} onToggle={toggleNumber} />
      <BallSelector onMark={toggleNumber} />
      <ResetButton onReset={resetBoard} />
    </div>
  );
};

export default App;