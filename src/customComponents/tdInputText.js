import React, { Component } from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

import {
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
  Input
} from "reactstrap";

const Styles = {
  propContainer: {
    width: 800,
    overflow: "hidden",
    margin: "20px"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  },
  radioButton: {
    marginTop: 16
  }
};

class HVSTextControl extends React.Component {
  //const value = ""
  constructor(props) {
    //debugger;
    super(props);
    
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      rowID: 0,
      selectedRowID: -1,
      value: "",
      placeHolder: "",
      clientWidth: "150px",
      value: ""
    };
    
  }

  componentWillUnmount = () => {};

  componentDidUpdate = (prevProps, prevState) => {
    //debugger;
    console.log(this.props.selectedRowID)
  };

  componentWillReceiveProps(nextProps) {
    //debugger;
    if(this.props != nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }

  componentDidMount = () => {
  //debugger;
    this.setState({
      rowID: this.props.rowID,
      tableID: this.props.tableID,
      selectedRowID: this.props.selectedRowID,
      value: this.props.value,
      placeHolder: this.props.placeHolder,
      clientWidth: this.props.clientWidth
    });

    /*
    this.setState((prevState, props) => {
      return {counter: prevState.counter + props.step};
    });
    */
  };

  handleChange = event => {
    //this.value = event.target.value;
    //_.debounce(() => {
      //this.props.updateRow(event.target.value);
    //debugger;
    this.setState({
      value: event.target.value
    });
    
    const rowObj = {
      rowID:this.props.rowID,
      tableID:this.props.tableID,
      value:event.target.value
    }
    //debugger;
    this.props.updateRowVal(rowObj);
    //},250);
  };

  handleLogoutClick() {
    //this.setState({ isLoggedIn: false });
  }

  render() {
    //debugger;
    console.log(this.props.selectedRowID)
    const {
      selectedRowID,
      placeHolder,
      clientWidth,
      rowID,
      tableID
    } = this.props;

    //this.setState({value : this.props.value});
    //const value = this.state.value == "" ?  this.props.value : this.state.value ;
     
    let control = null;
    if (selectedRowID == rowID) {
      control = (
        <Input
          type="text"
          style={{ width: clientWidth,lineHeight:"0.85"}}
          placeholder={placeHolder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      );
    } else {
      control = (
        <div
          className="form-control-static align-middle"          
        >
          {this.state.value}
        </div>
      );
    }

    return [control];
  }
}

export default HVSTextControl;
