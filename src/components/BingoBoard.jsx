import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';

const BingoBoard = ({ numbers, onToggle }) => {
  return (
    <Grid container spacing={1}>
      {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
        <Grid item xs={2} key={letter}>
          <Typography variant="h6" align="center">{letter}</Typography>
          {numbers[letter].map((number) => (
            <Box
              key={number}
              onClick={() => onToggle(letter, number)}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                cursor: 'pointer',
                backgroundColor: number.selected ? 'red' : 'white',
                border: '1px solid black',
              }}
            >
              {number.value}
            </Box>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default BingoBoard;