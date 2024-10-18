import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const TokenDisplay = ({ tokens }) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Generated Tokens:</Typography>
      <Grid container spacing={2} justifyContent="center">
        {tokens.map((tokenRow, index) => (
          <Grid item xs={12} key={index}>
            <Grid container spacing={2} justifyContent="center">
              {tokenRow.map((token, i) => (
                <Grid item key={i}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: token.startsWith('A') ? 'blue' : 'red',
                      color: 'white',
                      borderRadius: '4px',
                      border: '2px solid black',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      '&:hover': {
                        backgroundColor: token.startsWith('A') ? 'darkblue' : 'darkred',
                        cursor: 'pointer',
                      }
                    }}
                  >
                    {token}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TokenDisplay;
