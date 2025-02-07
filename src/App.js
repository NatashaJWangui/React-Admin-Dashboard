import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/Global/Navbar";
import Dashboard from "./scenes/Dashboard/Dashboard";
import { Route, Routes} from "react-router-dom";
import Sidesection from "./scenes/Global/Sidesection";
import { useState } from "react";
import Team from  "./scenes/Team/Team";
import Contacts from "./scenes/Contacts/Contacts";
// import Invoices from "./scenes/Invoices/Invoices";
// import Bar from "./scenes/Bar/Bar";
// import Form from "./scenes/Form/Form";
// import Line from "./scenes/Line/Line";
// import Pie from "./scenes/Pie/Pie";
// import FAQ from "./scenes/FAQ/FAQ";
// import Geography from "./scenes/Geography/Geography";
// import Calendar from "./scenes/Calendar/Calendar";


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
