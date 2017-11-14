import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import cadetlogo from "images/cadetlogo.png";
import cadettitle from "images/cadettitl.png";
import CadetHeader from "./cadetheader";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Avatar from "material-ui/Avatar";
import FileFolder from "material-ui/svg-icons/file/folder";
import FontIcon from "material-ui/FontIcon";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import { Tabs, Tab } from "material-ui/Tabs";

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500
} from "material-ui/styles/colors";
import Paper from "material-ui/Paper";

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
import Admin from "./Admin";

import CadetsSearch from "./CadetsSearch";
import AttribList from "./AttribTables";

import "App.css";
 
const tabStyles = {
   // backgroundColor: "#D3D3D3",
 //   color:"black",
 default_tab:{
      color: "#000000",
      backgroundColor: "#D3D3D3",
      fontWeight: 400,
    },
    active_tab:{
      color: "#D3D3D3",
    }
};

const styles = {
  margin: 12,
  refresh: {
    display: "inline-block",
    position: "relative"
  },

  container: {
    overflowX: "hidden",
    overflowY: "scroll",
    margin: "0px",
    width: "100vw",
    height: "99vh",
    padding: "1px"
    //backgroundImage: `url(${bgImg})`,
    // backgroundSize: "100%",
    // backgroundPosition:"center",
    // backgroundRepeat:"no-repeat",
    // backgroundColor: "#51b8e1"
  }
};
const paperStyle = {
  height: "80px",
  width: "99.2%",
  margin: 5,
  backgroundColor:'#ecf0f6'
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
console.log("************")
console.log(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      collapse: false,
      status: "Closed",
      cadetName: "",
      activeTab: "0"
    };

    this.cadetSearch = this.cadetSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleActive(tab) {
    alert(
      `A tab with this route property ${tab.props["data-route"]} was activated.`
    );
  }

  cadetSearch(cadet) {
    //alert(cadet.hv_cadet_name);
    this.setState({
      cadetName: cadet.hv_cadet_name
    });
    this.setState({
      activeTab: "1"
    });
  }

  handleChange = value => {
    debugger
    // alert(value)
    this.setState({
      activeTab: value
    });
    
  };

  render() {
   
    return (
      <div style={styles.container}>
        <Card style={{ height: "100%", width: "100%" }}>
          <Paper style={paperStyle} zDepth={1}>
            <CadetHeader name={this.props.name}/>
          </Paper>

          <Tabs
            value={this.state.activeTab}
            onChange={this.handleChange}
            style={{ height: "100%", width: "100%" }}
          >
            <Tab inkBarStyle={{background: 'blue'}}
              style={tabStyles.default_tab}
              label="Home"
              value="0"
              icon={<FontIcon className="fa fa-home" style={{color:"darkgrey" }}/>}
            >
              <HomeComponent callParentSearch={this.cadetSearch} />
            </Tab>
            <Tab
              style={tabStyles.default_tab}
              label="Cadets"
              value="1"
              icon={<FontIcon className="fa fa-home" style={{color:"darkgrey" }} />}
            >
              <div style={{ height: "100%", width: "100%" }}>
                <CadetsSearch cadetName={this.state.cadetName} />
              </div>
            </Tab>
            <Tab
              style={tabStyles.default_tab}
              label="Staff and Budget"
              value="2"
              icon={<FontIcon className="fa fa-users" style={{color:"darkgrey" }}/>}
            >
              <BudgetStaff />
            </Tab>
            <Tab
              style={tabStyles.default_tab}
              label="Course Schedule"
              value="3"
              icon={<FontIcon className="fa fa-calendar" style={{color:"darkgrey" }}/>}
            >
              <Course />
            </Tab>
            <Tab
              style={tabStyles.default_tab}
              label="Approvals"
              value="4"
              icon={<FontIcon className="fa fa-check-circle" style={{color:"darkgrey" }}/>}
            >
              <ApprovalsTab />
            </Tab>{" "}
            <Tab
              style={tabStyles.default_tab}
              label="Reports"
              value="5"
              icon={<FontIcon className="fa fa-line-chart" style={{color:"darkgrey" }}/>}
            >
              <Reports />
            </Tab>{" "}
            <Tab
              style={tabStyles.default_tab}
              label="Admin"
              value="6"
              icon={<FontIcon className="fa fa-cog" style={{color:"darkgrey" }}/>}
            >
              <Row className="m-0 p-0">
                <Col sm="12">
                  <Container
                    fluid
                    style={{
                      overflow: "hidden",
                      margin: "2px",
                      position: "relative"
                    }}
                  >
                    
                    <Row>
                      {" "}
                      <Col sm="12">
                        <Admin/>
                        
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

const mapStateToProps = state => {
  //debugger;
  //alert(state.authState.name)
  return {    
    name: state.authState.name
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReactStrapComp);
