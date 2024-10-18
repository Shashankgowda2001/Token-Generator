import React, { useState } from 'react';
import TokenForm from './TokenForm';
import TokenDisplay from './TokenDisplay';
import { Container, Typography } from '@mui/material';

function Route() {
  const [tokens, setTokens] = useState([]);

  const handleGenerate = ({ blueTokens, bluePrefix, bluePerRow, redTokens, redPrefix, redPerRow }) => {
    const blueTokenArray = [];
    const redTokenArray = [];

    let blueRow = [];
    for (let i = 1; i <= blueTokens; i++) {
      blueRow.push(`${bluePrefix}${i}`);
      if (i % bluePerRow === 0 || i === blueTokens) {
        blueTokenArray.push(blueRow);
        blueRow = [];
      }
    }

    let redRow = [];
    for (let i = 1; i <= redTokens; i++) {
      redRow.push(`${redPrefix}${i}`);
      if (i % redPerRow === 0 || i === redTokens) {
        redTokenArray.push(redRow);
        redRow = [];
      }
    }

    setTokens([...blueTokenArray, ...redTokenArray]);
  };

  const handleClear = () => {
    setTokens([]);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 4, textAlign: 'center' }}>Token Generator</Typography>
      <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
      <TokenDisplay tokens={tokens} />
    </Container>
  );
}

export default Route;
