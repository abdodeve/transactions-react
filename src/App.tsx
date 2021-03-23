import React, { useEffect } from "react";

import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";
import "react-perfect-scrollbar/dist/css/styles.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Store/rootReducer";
import { setTransactionsAction } from "./Store/TransactionData/actions";
import { transactionType } from "./Store/TransactionData/types";
import { readJson } from "./Utils/TransactionsUtil";

import theme from "./Theme";
import Main from "./Screens/Main";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  const readJsonData: transactionType[] = readJson();
  useEffect(() => {
    store.dispatch(setTransactionsAction(readJsonData));
    return () => {};
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <GlobalStyles />
            <Main />
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
