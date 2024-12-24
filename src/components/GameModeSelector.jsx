import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const GameModeSelector = ({ mode, setMode }) => (
  <FormControl fullWidth>
    <InputLabel>Modo de Juego</InputLabel>
    <Select value={mode} onChange={(e) => setMode(e.target.value)}>
      <MenuItem value="full">Cartón lleno</MenuItem>
      <MenuItem value="horizontal">Línea horizontal</MenuItem>
      <MenuItem value="vertical">Línea vertical</MenuItem>
      <MenuItem value="diagonal">Diagonal</MenuItem>
    </Select>
  </FormControl>
);

export default GameModeSelector;