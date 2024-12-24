import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const GameModeSelector = ({ gameMode, setGameMode }) => {
  const handleGameModeChange = (_, newMode) => {
    if (newMode) {
      setGameMode(newMode);
    }
  };

  return (
    <ToggleButtonGroup
      value={gameMode}
      exclusive
      onChange={handleGameModeChange}
      aria-label="Modo de Juego"
      sx={{ mb: 3 }}
    >
      <ToggleButton value="full" aria-label="Completo">
        Tablero Completo
      </ToggleButton>
      <ToggleButton value="line" aria-label="Línea">
        Línea
      </ToggleButton>
      <ToggleButton value="corner" aria-label="Esquinas">
        Esquinas
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default GameModeSelector;