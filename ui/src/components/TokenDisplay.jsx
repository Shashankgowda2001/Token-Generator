import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const TokenDisplay = ({ tokens }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Generated Tokens:</Typography>
      <Grid container spacing={2} justifyContent="center">
        {tokens.map((tokenRow, index) => (
          <Grid item xs={12} key={index}>
            <Grid container spacing={2} justifyContent="center">
              {tokenRow.map((item, i) => (
                <Grid item key={i}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: item.color,
                      color: 'white',
                      borderRadius: '4px',
                      border: '2px solid black',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      '&:hover': {
                        backgroundColor: item.color === 'blue' ? 'darkblue' : 'darkred',
                        cursor: 'pointer',
                      }
                    }}
                  >
                    {item.token}
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
