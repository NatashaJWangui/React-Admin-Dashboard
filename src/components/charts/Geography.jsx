import React from 'react';
import GeographyCharts from '../GeographyCharts';
import { Box } from '@mui/material';
import Header from '../Header'
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle=" A Simple Geography Chart"/>
      <Box height="75vh" border={`2px solid ${colors.grey[100]}`} borderRadius="30px">
        <GeographyCharts/>
      </Box>
    </Box>
  )
}

export default Geography