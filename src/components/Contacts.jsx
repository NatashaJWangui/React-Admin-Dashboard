import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../theme';
import { mockConstantContacts } from '../constants/mockConstant';
import Header from './Header';


//Grid Tool Bar Layout

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // Array of the data fields as represented in the constants
    {
      field: "id" , headerName: "ID" , flex:0.5
    },

    {
      field: "registrarId" , headerName: "Registrar ID" 
    },

    {
      field: "name" , headerName: "Name" , flex: 1, cellClassName: "name-column--cell", headerAlign:"left", align:"left"
    },

    {
      field: "email" , headerName: "Email" , flex: 1, cellClassName: "email-column--cell" , headerAlign:"left", align:"left"
    },

    {
      field: "age" , headerName: "Age" , type:"number", headerAlign:"left", align:"left"
    },

    {
      field: "phone" , headerName: "Phone Number" , flex: 1 , headerAlign:"left", align:"left"
    },

    {
      field: "address" , headerName: "Address" , flex: 1 , headerAlign:"left", align:"left"
    },

    {
      field: "city" , headerName: "Phone Number" , flex: 1 , headerAlign:"left", align:"left"
    },

    {
      field: "zipCode" , headerName: "Zip Code" , flex: 1 , headerAlign:"left", align:"left"
    },

  ]

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts"/>
      <Box m="40px 0 0 0" height="75vh" sx={{
        //Remove border outline
        "& .MuiDataGrid-root": {
          border:"none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom:"none",
          fontSize:theme.typography.h6,
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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": { 
          color: `${colors.grey[100]} !important`,
          fontSize:theme.typography.h8,
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
        // "& .MuiDataGrid-footerContainer":{
        //   borderTop:"none",
        //   backgroundColor: colors.blueAccent[700],
        // }

      }}>
        <DataGrid rows={mockConstantContacts} columns={columns} checkboxSelection disableRowSelectionOnClick slots={{ toolbar: GridToolbar }}/>
      </Box>
    </Box>
  )
}

export default Contacts