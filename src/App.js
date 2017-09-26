import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import Main from "Main";
import Login from "./components/login";
import Attributes from "./components/AttribTables";
import AttribTable from "./components/AttribTable";

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/attrib" component={Attributes} />        
        <Route path="/attribtable" render= { match => 
          <AttribTable {...match}/> 
          }/>
        <Route path="/" component={Main} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
