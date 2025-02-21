import React from 'react';
import PieCharts from '../PieCharts';
import { Box } from '@mui/material';
import Header from '../Header';


function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle=" A Simple Pie Chart"/>
      <Box height="75vh">
        <PieCharts/>
      </Box>
    </Box>
  )
}

export default Pie