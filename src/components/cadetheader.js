import React, { Component } from 'react';
import cadetlogo from 'images/cadetlogo.png'
import cadettitle from 'images/cadettitl.png'
import 'App.css';
import { actions as headerActions } from "reducers/cdheaderreducer";
import { types as headertypes } from "reducers/cdheaderreducer";
import { Container, Row, Col } from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
 class CadetHeader extends React.Component {
  constructor(props) {
   super(props);

    this.items = [];

   this.state = {
       items: []
   };
 }

   componentDidMount() {
    debugger;
    //alert(this.props.location.state.params.hv_table_i)

    this.props.renderHeader({
      type: headerActions.renderHeader,
      loadheader: { 
          userid:"sv"      
      }
    });
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
const mapStateToProps = state => {
  return {
    headerState: state.headerState
  };
};


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...headerActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CadetHeader);

