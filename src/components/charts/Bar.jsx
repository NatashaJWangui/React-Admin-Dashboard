import React from 'react'
import BarCharts from '../BarCharts'
import { Box } from '@mui/material'
import Header from '../Header'

function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
      <Box height="75vh" >
        <BarCharts/>
      </Box>
    </Box>
  )
}

export default Bar