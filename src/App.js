import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import Main from "./Main";
import Login from "./components/login";
import Attributes from "./components/AttribTables";
import AttribTable from "./components/AttribTable";
import AppNavigation from "./components/NavBar";
import ListItems from "./components/ListItems";
import ShowData from "./components/showdata";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import ReactStrapComp from "./components/ReactStrap";
import CadetsSearch from "./components/CadetsSearch";
import CadetInlineSearch from "./components/CadetInlineSearch";
import Admin from "./components/Admin";
import UserComponent from './components/Users/MaintainUsers';
import CadetDetails from "./components/CadetDetails";
import logo from "./logo.svg";

import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import CadetHeader from "./components/cadetheader";
import MainNavList from "./components/MainNavList";
import HomeComponent from "./components/HomeMainComponent";
// Import primereact 
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import "./App.css";
import UsersList from "./components/Users/usersList";
import Roles from "./components/Roles";
import Calendar from "./components/Calendar";

const Root = props => <div {...props} />;


const HeaderBar = props => (
  <div
    style={{
      width: "100vw",
      height: "20vh",
      overflow: "none"
    }}
    {...props}
  />
);
const MainDiv = props => <div {...props} />;

const App = props => {
  const { history } = props;

  return (
    <MainDiv>
      <Container fluid>
        <Row>
          <Col>
            <ConnectedRouter history={history}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/forgotpwd" component={ForgotPassword} />
                <Route path="/changepwd/:secToken" render={props => <ChangePassword {...props} /> } />
                <Route path="/changepwd" component={ChangePassword} />
                <Route path="/listitems" component={ListItems} />
                <Route path="/cadet" component={CadetsSearch} />
                <Route path="/cadetinline" component={CadetInlineSearch} />
                <Route path="/admin" component={Admin} />

                <Route path="/calendar" component={Calendar} />


                <Route
                  path="/cadetdetails"
                  render={props => <CadetDetails {...props} />}
                />
                <Route
                  path="/attribtable"
                  render={match => <AttribTable {...match} />}
                />
                <Route path="/test" component={ShowData} />
                <Route
                  path="/tabs"
                  render={props => <ReactStrapComp {...props} />}
                />
                <Route
                  path="/users"
                  render={props => <UserComponent {...props} />}
                />
                <Route
                  path="/homes"
                  render={props => <HomeComponent {...props} />}
                />
                <Route
                  path="/userslist"
                  render={props => <UsersList {...props} />}
                />
                <Route path="/" component={Main} />
              </Switch>
            </ConnectedRouter>
          </Col>
        </Row>
      </Container>
    </MainDiv>
  );
};

export default App;
