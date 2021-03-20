import React from "react";

import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";
import "react-perfect-scrollbar/dist/css/styles.css";

import theme from "./Theme";
import Main from "./Screens/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Main />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
