import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/Global/Navbar";
import { Dashboard } from "@mui/icons-material";
import { Route, Routes} from "react-router-dom";
import Sidebar from "./scenes/Global/Sidebar";
// import Team from  "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";
// import Bar from "./scenes/Bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/Line";
// import Pie from "./scenes/Pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/Geography";
// import Calendar from "./scenes/Calendar/Calendar";


function App() {
  const [theme, colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar/>
        <main className="content">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            {/* <Route path="/Team" element={<Team />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Invoices" element={<Invoices />} />
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
