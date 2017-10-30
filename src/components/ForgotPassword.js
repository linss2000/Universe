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

export class ForgotPassword extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
        isLoading : false
    }
    this.reqPassword = this.reqPassword.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (this.props.forgotPWDState.message.val != "0") {
       
      alert(this.props.forgotPWDState.message.msg);      
      this.setState({isLoading: false});
      this.props.resetMessage({
        type: forgotPWDTypes.MESSAGE,
        message: {val:0, msg:""}
      });

      if (this.props.forgotPWDState.message.val == 1) {
        this.props.history.push("/login");
      }
      //this.props.history.push("/logon", ...this.state);
      //this.props.history.push('/test', ...this.state);
    } else {
    }
  }

  reqPassword = () => {
    debugger;
    if (
      this.textInput.value == "" ||
      !this.textInput.value.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      )
    ) {
      alert("Please Enter Valid Email Address");
      this.textInput.focus();
      return false;
    }

    this.setState({isLoading: true});

    this.props.checkEmail({
      type: forgotPWDTypes.CHECK_EMAIL_REQUEST,
      email: _.trim(this.textInput.value)
    });
    //sendEmail
  };

  render() {
    return (
      <div className="App" style={{ height: "100vh" }}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cadet Systems</h2>
        </div>
        <img src={clientlogo} className="mx-auto my-2" />
        <Container
          fluid
          style={{ width: "400px", height: "600px" }}
          className="d-flex align-items-start"
        >
          <Card>
            <CardHeader>Password Recovery</CardHeader>
            <CardBody>
              <CardText>
                Enter in your email address and we'll send you a link to reset
                your password
              </CardText>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input
                  placeholder="Email"
                  innerRef={input => {
                    this.textInput = input;
                  }}
                />
              </InputGroup>
              <br />
              <Button color="primary" block onClick={this.reqPassword}>
                {" "}
                Request new password
              </Button>
              {this.state.isLoading ? (
                <div className="py-2 mx-auto">
                  <i class="fa fa-spinner fa-spin fa-2x fa-fw" />
                </div>
              ) : null}
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return {
    forgotPWDState: state.forgotPWDState
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...forgotPWDActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
