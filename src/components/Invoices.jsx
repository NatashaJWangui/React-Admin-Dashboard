import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockConstantInvoices } from '../constants/mockConstant';
import Header from './Header';

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // Array of the data fields as represented in the constants
    {
      field: "id" , headerName: "ID"
    },
    {
      field: "name" , headerName: "Name" , flex: 1, cellClassName: "name-column--cell", headerAlign:"left", align:"left"
    },
    {
      field: "email" , headerName: "Email" , flex: 1, cellClassName: "email-column--cell" , headerAlign:"left", align:"left"
    },
    {
      field: "phone" , headerName: "Phone Number" , flex: 1 , headerAlign:"left", align:"left"
    },
    {
      field: "cost" , headerName: "Cost" , flex: 1, renderCell: (params)=>{
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      }
    },
    {
      field: "date" , headerName: "Date" , flex: 1 , headerAlign:"left", align:"left"
    },
  ]

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="Manage the Invoices"/>
      <Box m="40px 0 0 0" height="75vh" sx={{
        //Remove border outline
        "& .MuiDataGrid-root": {
          border:"none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom:"none",
          fontSize:theme.typography.h7,
        },
        "& .name-column--cell": {
          color:colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: colors.blueAccent[800],
          borderBottom:"none",
          fontSize:theme.typography.h7,
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
        // Footer Rows Per page
        "& .MuiTablePagination-selectLabel" : {
          fontSize:theme.typography.h7,
        },
        // Footer page count
        "& .MuiInputBase-root" : {
          fontSize:theme.typography.h7,
        },
        //Footer Pagination
        "& .MuiTablePagination-displayedRows" :{
          fontSize:theme.typography.h7,
        },
        //Footer Pagination Actions
        "& .MuiTablePagination-actions" :{
          fontSize:theme.typography.h7,
        },
      }}>
        <DataGrid rows={mockConstantInvoices} columns={columns} checkboxSelection disableRowSelectionOnClick/>
      </Box>
    </Box>
  )
}

export default Invoices