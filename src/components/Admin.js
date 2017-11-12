import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "logo.svg";
import clientlogo from "images/cadetlogo.png";
import "App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { types as forgotPWDTypes } from "reducers/forgotpwdreducer";
import { actions as forgotPWDActions } from "reducers/forgotpwdreducer";
import * as _ from "lodash";
import bgImg from "images/cgyca_staffandbdgt.PNG";
import staffImg from "images/course_cal.PNG";
import roleImg from "images/role.png";
import userImg from "images/user.png";
import secImg from "images/security.png";
import { List, ListItem } from "material-ui/List";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentSend from "material-ui/svg-icons/content/send";
import Subheader from "material-ui/Subheader";
import AttribList from "./AttribTables";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from "material-ui/Toggle";
import AppBar from 'material-ui/AppBar';
import {
  Table,
  ListGroup,
  ListGroupItem,
  Badge,
  InputGroup,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import {
  TabContent,
  TabPane,
  Card,
  CardImg,
  CardHeader,
  CardFooter,
  Collapse,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

import {
  Input,
  ButtCollapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const styles = {
  //margin: 12,
  refresh: {
    display: "inline-block",
    position: "relative"
  },

  container: {
    overflow: "hidden",
    margin: "0px",
    width: "100%",
    height: "100vh",
    padding: "1px",
    //backgroundImage: `url(${bgImg})`,
    //backgroundSize: "100%",
    //backgroundPosition: "center",
    //backgroundRepeat: "no-repeat"
  },
  absolute: { position: 'absolute' }
};

const images = [bgImg, staffImg, roleImg, userImg, secImg];

export class Admin extends Component {
  static propTypes = {};
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      isLoading: false,
      collapse: false,
      open: false,
      imgIndex: 0,
      inAttrib : false,
      slideOpen: true  ,
      smColMenu:"3",
      smColForm:"9"
      //imgSrc: "cgyca_staffandbdgt.PNG"
    };

    this.changeImg = this.changeImg.bind(this);
    this.showAttrib = this.showAttrib.bind(this);
  }

  changeImg = index => {
      debugger;
      
    this.setState({
      imgIndex: index,
      inAttrib : false
    });
  };

  showAttrib = () => {
    this.setState({
      inAttrib : true
    })
  }
  
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle = item => {
    this.setState({
      open: item.state.open
    });
  };
 handleSlideToggle = () => {
    this.setState({
      slideOpen: false
    });
    debugger
  };
 handleClose = () => {
    
debugger
        if(!this.state.slideOpen)
    {
   this.setState({
     slideOpen: true,     
      smColMenu:"3",
      smColForm:"9"
    })
    }
    else
      {
   this.setState({
     slideOpen: false,     
       smColMenu:"0",
      smColForm:"12"
    })
 }
 }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    //this.state.slideOpen=!prevState.slideOpen
  }

  render() {
    debugger
    return (
      
     <div>
     <Row>
          <Col sm="12">
             <AppBar style={{height:'50px',marginLeft:"-20px",width:'100%',  backgroundColor: 'lightgray',color:'black'
}}  onClick={this.handleClose } />
          </Col>

          </Row>
                          
          <Row>
          <Col sm={this.state.smColMenu}>
          
                   <Drawer open={this.state.slideOpen} containerStyle={styles.absolute} overlayStyle={styles.absolute}>
        
                  <List>
                    <h6>Field Maintenance </h6>
                 
                    <ListItem
                      primaryText="Academy or State Specific"
                      leftIcon={<ContentSend />}
                      onClick={() => {
                          debugger;
                        this.changeImg(0);
                      }}
                    />
                    <ListItem
                      primaryText="Drafts"
                      leftIcon={<ContentDrafts />}
                      onClick={() => {
                          debugger;
                        this.changeImg(1);
                      }}
                    />
                    <ListItem
                      primaryText="Attributes"
                      leftIcon={<ContentSend />}
                      onClick={() => {
                          debugger;
                        this.showAttrib();
                      }}
                    />
                    <ListItem
                      primaryText="Cadet and Mentor fields"
                      leftIcon={<ContentInbox />}
                      initiallyOpen={false}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Cadet Characterstics"
                          leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="Cadet Medical"
                          leftIcon={<ContentSend />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="Cadet Residential"
                          leftIcon={<ContentSend />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="Cadet Non_residential"
                          leftIcon={<ContentSend />}
                        />
                      ]}
                    />
                    <ListItem
                      primaryText="Staff and Budget fields"
                      leftIcon={<ContentInbox />}
                      initiallyOpen={true}
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <ListItem
                          key={1}
                          primaryText="Staff Members"
                          leftIcon={<ActionGrade />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="People Organization"
                          leftIcon={<ContentSend />}
                        />,
                        <ListItem
                          key={2}
                          primaryText="Budget Items"
                          leftIcon={<ContentSend />}
                        />
                      ]}
                    />
                  </List>
                  <List>
                  <ListItem
                    primaryText="Course Scheduling Fields"
                    leftIcon={<ContentDrafts />}
                  />
                  <ListItem
                    primaryText="Approvals Fields"
                    leftIcon={<ContentDrafts />}
                  />
                  </List>
                
                  <List>
                    <h6>Site and User Maintenance </h6>
                    <ListItem
                      primaryText="Site Setup and Maintenance"
                      leftIcon={<ContentSend />}
                      onClick={() => {
                        debugger;
                      this.changeImg(4);
                    }}
                    />
                    <ListItem
                      primaryText="Role Maintenance"
                      leftIcon={<ContentDrafts />}
                      onClick={() => {
                        debugger;
                      this.changeImg(2);
                    }}
                    />
                    <ListItem
                      primaryText="User Maintenance"
                      leftIcon={<ContentDrafts />}
                      onClick={() => {
                        debugger;
                      this.changeImg(3);
                    }}
                    />
                  </List>
        </Drawer>
                  
                
               </Col>   
            {/* 
            <Col sm="3">
              <div>
                <i
                  className="fa fa-caret-down fa-lg"
                  onClick={() => {
                    this.setState({
                      collapse: !this.state.collapse
                    });
                  }}
                />
                <span> Field Maintenance </span>
              </div>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <CardText>
                      Enter in your email address and we'll send you a link to
                      reset your password
                    </CardText>
                  </CardBody>
                </Card>{" "}
              </Collapse>
            </Col>
            */}
          <Col sm={this.state.smColForm}>
            
              <Card style={{ width: "100%", overflow: "hidden", marginLeft: "2px" }}>
                {/*
                <CardImg                  
                  width="100%"
                  height="100%"
                  src={this.state.imgSrc}
                  //src={`${"images/" + this.state.imgSrc + ".PNG"}`}
                  alt="Card image cap"
                />
                */}
                
                {!this.state.inAttrib ?
                <img
                  width="100%"
                  height="100%"
                  src={images[this.state.imgIndex]}
                  alt="Card image cap"
                /> :
                <AttribList {...this.props} />
                }
              </Card>
          </Col>
          </Row>
         </div>
     
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
