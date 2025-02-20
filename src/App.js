import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import { Route, Routes} from "react-router-dom";
import Sidesection from "./components/nav/Sidesection";
import { useState } from "react";
import Team from "./components/Team";
import Contacts from "./components/Contacts";
import Invoices from "./components/Invoices";
import Form from "./components/Form";
import Calendar from "./components/Calendar";
import FAQ from "./components/FAQ";
import Bar from "./components/charts/Bar";
// import Line from "./components/charts/Line";
// import Pie from "./components/charts/Pie";
// import Geography from "./components/Geography";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidesection isSidebar={isSidebar}/>
        <main className="content">
          <Navbar setIsSidebar={setIsSidebar}/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Team" element={<Team />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Invoices" element={<Invoices />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Bar" element={<Bar />} />
            {/* <Route path="/Pie" element={<Pie />} />
            <Route path="/Line" element={<Line />} />
            <Route path="/Geography" element={<Geography />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>  
  </ColorModeContext.Provider>
    
  );
}

export default App;
