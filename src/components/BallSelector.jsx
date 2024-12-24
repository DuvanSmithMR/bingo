import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const BallSelector = ({ onMark }) => {
  const [ball, setBall] = useState('');

  const handleMark = () => {
    const letter = ball[0]?.toUpperCase();
    const number = parseInt(ball.slice(1));
    if (['B', 'I', 'N', 'G', 'O'].includes(letter) && !isNaN(number)) {
      onMark(letter, number);
    }
    setBall('');
  };

  return (
    <div>
      <TextField
        label="Balota (e.g., I5)"
        value={ball}
        onChange={(e) => setBall(e.target.value.toUpperCase())}
      />
      <Button variant="contained" onClick={handleMark}>
        Marcar
      </Button>
    </div>
  );
};

export default BallSelector;