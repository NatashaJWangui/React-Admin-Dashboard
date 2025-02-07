import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockConstantTeam } from "../../constants/mockConstant";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";


function Team() {
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
      field: "age" , headerName: "Age" , type:"number", headerAlign:"left", align:"left"
    },
    {
      field: "phone" , headerName: "Phone Number" , flex: 1 , headerAlign:"left", align:"left"
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      headerAlign:"center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="80%"
            m="0 auto" //0 top & bottom , auto : Left & Right
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[900]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.blueAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />} 
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} variant="h6">
              {access}
            </Typography>
          </Box>
        );
      },
    }, 
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Manage the Team Members"/>
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
        // "& .MuiDataGrid-footerContainer":{
        //   borderTop:"none",
        //   backgroundColor: colors.blueAccent[700],
        // }

      }}>
        <DataGrid rows={mockConstantTeam} columns={columns} checkboxSelection disableRowSelectionOnClick/>
      </Box>
    </Box>
  )
}

export default Team