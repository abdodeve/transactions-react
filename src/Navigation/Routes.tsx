import React from "react";
import { Route, Switch } from "react-router-dom";

import TransactionsListScreen from "./../Screens/Transactions/List";

const CompTest = () => {
  return <div>Hello</div>;
};

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TransactionsListScreen} />
        <Route exact path="/foo" component={CompTest} />
        <Route exact path="/bar" component={CompTest} />
      </Switch>
    </div>
  );
};

export default Routes;
