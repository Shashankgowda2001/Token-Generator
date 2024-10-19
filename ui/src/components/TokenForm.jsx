import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueTokens, setBlueTokens] = useState('');
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState('');
  const [redTokens, setRedTokens] = useState('');
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState('');
  const [error, setError] = useState(null);

  const handleGenerate = () => {
    if(!blueTokens || !bluePrefix || !bluePerRow || !redTokens || !redPrefix || !redPerRow){
      setError('Please Fill all the Fields');
      return false;
    }

    if(blueTokens < 0 || bluePerRow < 0 || redTokens < 0 || redPerRow < 0){
      setError('Enter Valid Numbers');
      return false;
    }

    onGenerate({
      blueTokens: Number(blueTokens),
      bluePrefix,
      bluePerRow: Number(bluePerRow),
      redTokens: Number(redTokens),
      redPrefix,
      redPerRow: Number(redPerRow),
    });
  };

  const handleClear = () => {
    setBlueTokens('');
    setBluePrefix('');
    setBluePerRow('');
    setRedTokens('');
    setRedPrefix('');
    setRedPerRow('');
    onClear();
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={12}>
            <TextField label="Number of Blue Tokens" fullWidth value={blueTokens} type="number" variant="outlined"
              onChange={(e) => setBlueTokens(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Prefix for Blue Tokens" fullWidth value={bluePrefix} variant="outlined"
              onChange={(e) => setBluePrefix(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Blue Tokens Per Row" fullWidth value={bluePerRow} type="number" variant="outlined"
              onChange={(e) => setBluePerRow(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item container xs={12} md={6} spacing={2}>
          <Grid item xs={12}>
            <TextField label="Number of Red Tokens" fullWidth value={redTokens} type="number" variant="outlined"
              onChange={(e) => setRedTokens(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Prefix for Red Tokens" fullWidth value={redPrefix} variant="outlined"
              onChange={(e) => setRedPrefix(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Red Tokens Per Row" fullWidth value={redPerRow} type="number" variant="outlined"
              onChange={(e) => setRedPerRow(e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} marginTop={1}>
        {error && <span style={{ fontWeight: 'bold', color: 'red' }}>{error}</span>}
      </Grid>
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ marginRight: 2 }}>
          Generate
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default TokenForm;
