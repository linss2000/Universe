import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import cadetlogo from "images/cadetlogo.png";
import cadettitle from "images/cadettitl.png";
import CadetHeader from "./cadetheader"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Tabs, Tab } from 'material-ui/Tabs';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
 
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Collapse,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  DropdownToggle,
  CardImg,
  CardSubtitle,
  CardHeader
} from "reactstrap";
import HomeComponent from "./HomeMainComponent";
import ApprovalsTab from "./Approvals";
import BudgetStaff from "./BudgetStaff";
import Reports from "./Reports";
import Course from "./Course";


import CadetsSearch from "./CadetsSearch";
import AttribList from "./AttribTables";

import "App.css";
 
const tabStyles = {
  backgroundColor:'#1b3039'
   
};
 

const paperStyle = {
  height: "100px",
  width: "98%",
  margin: 15,
  // textAlign: "left",
  // display: "flex",
  // justifyContent: "left"
};
const FirstFunctional = props => {
  return <div onClick={() => props.showMessage("Child")}>{props.name}</div>;
};

export class ReactStrapComp extends Component {
  
  static propTypes = {
    //name: PropTypes.string.isRequired
  };

  showMessage(msg) {
    alert(msg);
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      collapse: false,
      status: "Closed"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  render() {
    return (
      <div>
       
        <Card>

          <Paper style={paperStyle} zDepth={5} >
            <CadetHeader></CadetHeader>
          </Paper>
          
            <Tabs >
              <Tab style={tabStyles} label="Home" icon={<FontIcon className='fa fa-home'/>}   >

                <div>

                  <p>
                    <HomeComponent></HomeComponent>
                  </p>


                </div>
              </Tab>
              <Tab style={tabStyles} label="Cadets" icon={<FontIcon className='fa fa-home'/>}   >
                <div>

                  <p>
  <CadetsSearch {...this.props} />
                  </p>
                </div>
              </Tab>
              <Tab  style={tabStyles}  label="Staff and Budget" icon={<FontIcon className='fa fa-users'/>} >
                <div>

                  <p>
<BudgetStaff></BudgetStaff>
                  </p>
                </div>
              </Tab>

              <Tab  style={tabStyles}  label="Course Schedule" icon={<FontIcon className='fa fa-calendar'/>} >
                <div>

                  <p>
<Course></Course>
                  </p>
                </div>
              </Tab>


              <Tab  style={tabStyles}  label="Approvals" icon={<FontIcon className='fa fa-check-circle'/>}>
                <div>

                  <p>
                    <ApprovalsTab></ApprovalsTab>
                  </p>
                </div>
              </Tab> <Tab  style={tabStyles}  label="Reports" icon={<FontIcon className='fa fa-line-chart'/>}>
                <div>

                  <p>
<Reports></Reports>
                  </p>
                </div>
              </Tab> <Tab  style={tabStyles}  label="Admin" icon={<FontIcon className='fa fa-cog'/>}>
              <Row className="m-0 p-0">
              <Col sm="12">
                <Container
                  fluid
                  style={{
                    overflow: "hidden",
                    margin: "2px"
                  }}
                >
                  <Row className="m-0 p-0">                            
                    <Col sm="12">
                      <h4 className="text-default">
                        Admin{" "}
                        <i className="fa fa-arrow-circle-o-down" />{" "}
                      </h4>
                    </Col>
                  </Row>
                  <Row className="m-0 p-0">
                    {" "}
                    <Col sm="12">
                    <AttribList {...this.props} />
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
              </Tab>
            </Tabs>

          
        </Card>


      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReactStrapComp);

 