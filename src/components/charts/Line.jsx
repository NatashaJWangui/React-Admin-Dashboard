import React from 'react'
import LineCharts from '../LineCharts'
import { Box } from '@mui/material'
import Header from '../Header'

function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle=" A Simple Line Chart"/>
      <Box height="75vh">
        <LineCharts/>
      </Box>
    </Box>
  )
}

export default Line