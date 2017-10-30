import React, { Component } from 'react';

import cadetlogo from 'images/cadetlogo.png'
import cadettitle from 'images/cadettitl.png'
import 'App.css';

import { Container, Row, Col } from 'reactstrap';
export default class CadetHeader extends React.Component {
  constructor(props) {
   super(props);


   this.state = {
      personname: "Blackwell",
      locationinfo: "Location Name and Code, 1 Main Str, Washington DC, MD 11111"

   };
 }

 render() {
   return (
     <div>
        <Container fluid>
        <Row>
          <Col>
            <div className="float-left p-3" >

              <img src={cadetlogo} width="60" height="60"  alt="logo"   />
                <img src={cadettitle} height="60"  alt="logoTitle" className="px-3"/>
                {/*<h3 className="d-inline align-middle">Welcome to React</h3>*/}
                </div>
          </Col>
        </Row>
        <Row className="py-0">
          <Col>
            <div className="float-left header-label px-4" >
            {this.state.locationinfo}
            </div>
          </Col>
          <Col>
            <div className="float-right  header-label px-2" >
            Welcome, {this.state.personname}
            </div>
          </Col>
        </Row>
        </Container>
</div>
)
};
}
