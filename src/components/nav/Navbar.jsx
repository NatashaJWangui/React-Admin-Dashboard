import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1,
          "& .MuiInputBase-input": {
            color: colors.grey[100], // Text color
            fontWeight: "bold",
            fontSize: theme.typography.h5,
            "&::placeholder": {
              color: colors.grey[300], // Placeholder text color
              opacity: 1, // Ensure it's fully visible
            },
          },
        }} 
          placeholder="Search Here" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* PROFILE ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ fontSize: "24px" }} />
          ) : (
            <LightModeOutlinedIcon sx={{ fontSize: "24px" }} />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ fontSize: "24px" }}/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon sx={{ fontSize: "24px" }}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;