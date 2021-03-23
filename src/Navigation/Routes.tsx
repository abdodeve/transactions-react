import React from "react";
import { Route, Switch } from "react-router-dom";

import TransactionsListScreen from "./../Screens/Transactions";
import SummaryScreen from "../Screens/Transactions/SummaryScreen";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TransactionsListScreen} />
        <Route
          exact
          path="/transactions-react"
          component={TransactionsListScreen}
        />
        <Route exact path="/list" component={TransactionsListScreen} />
        <Route exact path="/summary" component={SummaryScreen} />
      </Switch>
    </div>
  );
};

export default Routes;
