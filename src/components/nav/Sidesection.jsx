import { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected, variant ="h6" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
      <MenuItem
        component={<Link to={to} style={{ textDecoration: 'none' }}/>}
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => {
          setSelected(title);
          localStorage.setItem("selectedMenuItem", title); // Store in localStorage
        }}
        icon={icon}
      >
        <Typography variant={variant}>{title}</Typography>
      </MenuItem>
  );
};

const Sidesection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation(); // Get current route

  // Load selected item from localStorage or default to "Dashboard"
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedMenuItem") || "Dashboard"
  );

  useEffect(() => {
    const savedSelected = localStorage.getItem("selectedMenuItem");
  
    // Get the current route from location.pathname
    const currentPath = location.pathname;
  
    // Define a mapping from paths to menu titles
    const pathToTitle = {
      "/": "Dashboard",
      "/Team": "Manage Team",
      "/Contacts": "Contact Information",
      "/Invoices": "Invoices",
      "/Form": "Profile Form",
      "/Calendar": "Calendar",
      "/FAQ": "FAQ",
      "/Bar": "Bar Chart",
      "/Pie": "Pie Chart",
      "/Line": "Line Chart",
      "/Geography": "Geography Chart",
    };
  
    // If there's a saved selection, use it, but sync with the current path
    if (savedSelected && pathToTitle[currentPath] === savedSelected) {
      setSelected(savedSelected);
    } else {
      // If the app restarted and the path doesn't match, use the correct mapping
      const defaultSelection = pathToTitle[currentPath] || "Dashboard";
      setSelected(defaultSelection);
      localStorage.setItem("selectedMenuItem", defaultSelection);
    }
  }, [location.pathname]); // Run whenever the route changes

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          width: isCollapsed ? "80px" : "280px", // Adjust width based on state
          transition: "width 0.3s ease", // Smooth transition effect
        },
        "& .ps-sidebar-root":{
          width: isCollapsed ? "80px" : "280px", // Adjust width based on state
          transition: "width 0.3s ease", // Smooth transition effect
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px 5px 10px !important", 
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important", 
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important", //blue text hover
        },
        "& .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.blueAccent[500]} >
                  NJW APP
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} sx={{color: colors.blueAccent[500],}}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User section */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="user-profile"
                  width="100px"
                  height="100px"
                  src={`../../assets/mylogoblack.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Claire Scott
                </Typography>
                <Typography variant="h4" color={colors.greenAccent[500]}>
                   Senior Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}

            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Admin
            </Typography>
            <Item
              title="Manage Team"
              to="/Team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              to="/Contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/Invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              User
            </Typography>
            <Item
              title="Profile Form"
              to="/Form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/FAQ"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/Bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/Pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/Line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/Geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidesection;