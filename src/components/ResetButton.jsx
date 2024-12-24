import React from 'react';
import { Button } from '@mui/material';

const ResetButton = ({ onReset }) => (
  <Button variant="outlined" color="secondary" onClick={onReset}>
    Reiniciar Tablero
  </Button>
);

export default ResetButton;