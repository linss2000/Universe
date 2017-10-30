import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import * as _ from "lodash";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

var typeRoot = null;

class TypeAhead extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    debugger;
    typeRoot = document.getElementById(this.props.container);
    typeRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    typeRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default TypeAhead;
