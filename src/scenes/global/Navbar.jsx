import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    // Main NavBar Box with Search and Icons
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Section */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="16px">
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search Here">
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon />
        </IconButton>
        </InputBase>
      </Box>

      {/* Settings Section */}
      <Box display="flex">
        {/* Light and Dark Mode */} 
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon/>
          ) : (
            <LightModeOutlinedIcon/>
          )}  
        </IconButton>
        {/* Notifications */}
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        {/* Settings */}
        <IconButton>
          <SettingsOutlinedIcon/>    
        </IconButton>
        {/* Profile */}
        <IconButton>
          <PersonOutlineOutlinedIcon/>
        </IconButton>

      </Box>

      <IconButton></IconButton>

    </Box>
  )
}

export default Navbar