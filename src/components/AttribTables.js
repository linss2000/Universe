import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "reactstrap";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

//import { itemsFetchData, itemUpdateData, itemDeleteData } from '../actions/items';
/*
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
*/
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

import CircularProgress from "material-ui/CircularProgress";
import * as _ from "lodash";
import { bindActionCreators } from "redux";
import { types as attribTypes } from "reducers/attribreducer";
import { actions as attribActions } from "reducers/attribreducer";
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
  Button
} from "reactstrap";

const Styles = {
  propContainer: {
    width: 400,
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

class AttribList extends Component {
  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    debugger;

    return true;
    /*
        if (this.props.isLoading !== nextProps.isLoading) {
            return true;
        }
        if (this.state.items !== nextState.items) {
            return true;
        }
        return true;
        */
  }

  componentDidMount() {
    debugger;
    if (this.props) {
      this.props.getAttribTables({
        type: attribTypes.FETCH_TABLES_REQUEST,
        payload: {}
      });
    }
  }

  constructor(props) {
    super(props);
  }

  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: "300px",
    items: [],
    mode: undefined,
    itemsHasErrored: false,
    itemsIsLoading: false,
    
  };

  _handleTouchTap = (row, edit) => {
    debugger;
    //console.log(e);
    //alert(e.target)
    //alert(e.target.outerHTML)
    //alert(e.target.name)
    if (edit === "E") {
      this.props.updateData({ type: attribTypes.UPDATE_REQUEST, payload: row });
      //this.props.updateData(row);
    } else {
      this.props.deleteData({ type: attribTypes.DELETE_REQUEST, payload: row });
    }
    //e.preventDefault();
    //this.forceUpdate();
    //alert(row);
  };

  itemClick = row => {
    debugger;
    console.log(row);
    this.props.history.push('/attribtable', { params : row });
  };
  render() {
    /*
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        style={{
                    cursor: "pointer",
                    height: "28px",
                    padding:"2px",
                    lineHeight: "1"
                  }}
        */

    return (
      <Container fluid>
        <Row noGutters>
          <h3>Attribute Tables</h3>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem
                style={{
                    cursor: "pointer",              
                  }}
                  
                  key={index}
                  className="justify-content-between"
                  onClick={() => {
                    this.itemClick(row);
                  }}
                >
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              {this.props.attribState.items.map((row, index) => (
                <ListGroupItem key={index} className="justify-content-between">
                  {row.hv_table_name}
                  <Badge pill>14</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      /*
            <ul>
                {this.props.items.map((item,index) => (
                    <li key={index}>
                        {item.gs_pr_name}
                    </li>
                ))}
            </ul>
            */
    );
  }
}

//AttribList.defaultProps = {};

/*
AttribList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};
*/

const mapStateToProps = state => {
  return {
    attribState: state.attribState
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...attribActions
    },
    dispatch
  )
});

/*
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSagaData: (data) => dispatch(data)
    };  
};
*/
export default connect(mapStateToProps, mapDispatchToProps)(AttribList);
