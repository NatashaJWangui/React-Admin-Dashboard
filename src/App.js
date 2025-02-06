import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./sections/nav/Navbar";
import Dashboard from "./sections/dashboard/Dashboard";
import { Route, Routes} from "react-router-dom";
import Sidesection from "./sections/nav/Sidesection";
import { useState } from "react";
import Team from  "./sections/team/Team";
import Contacts from "./sections/contacts/Contacts";
// import Invoices from "./sections/invoices/Invoices";
// import Bar from "./sections/charts/Bar";
// import Form from "./sections/form/Form";
// import Line from "./sections/charts/Line";
// import Pie from "./sections/charts/Pie";
// import FAQ from "./sections/faq/FAQ";
// import Geography from "./sections/geography/Geography";
// import Calendar from "./sections/calendar/Calendar";


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
            {/* <Route path="/Invoices" element={<Invoices />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Bar" element={<Bar />} />
            <Route path="/Pie" element={<Pie />} />
            <Route path="/Line" element={<Line />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Geography" element={<Geography />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>  
  </ColorModeContext.Provider>
    
  );
}

export default App;
