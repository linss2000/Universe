import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import { createStore, applyMiddleware, compose } from "redux";
//import { all, actionChannel, call, put, take, takeEvery, takeLatest, select, cancel, cancelled, fork, race, apply } from 'redux-saga/effects'
//import { delay, buffers, eventChannel, END } from 'redux-saga'
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// Needed for onTouchTap
import injectTapEventPlugin from "react-tap-event-plugin";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createSagaMiddleware from "redux-saga";
import configureStore from "./store/configureStore";
import ErrorBoundary from "./ErrorComponent"
/*
import ToComponent from "./components/To";
import ItemList from "./components/ItemList";
import GridList from "./components/grid";
*/
//import mySaga from './actions/sagas'
import rootSaga from "./sagas/index";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

//import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
injectTapEventPlugin();

const extraProps = { color: "red" };

// create middlewares
// create the saga middleware
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

//const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);
//const font = "tahoma";
/*
<BrowserRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/to" component={ToComponent} />
          <Route
            path="/grid"
            render={props => <GridList {...props} data={extraProps} />}
          />
        </div>
      </BrowserRouter>
      */

const store = configureStore({}, sagaMiddleware, routerMiddleware(history));

const AppComp = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <MuiThemeProvider>
        <App history={history} />
      </MuiThemeProvider>
    </Provider>
  </ErrorBoundary>
);

// then run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(<AppComp />, document.getElementById("root"));
registerServiceWorker();
