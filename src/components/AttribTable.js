import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "reactstrap";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

import CircularProgress from "material-ui/CircularProgress";
import * as _ from "lodash";
import { bindActionCreators } from "redux";
import { types as attribTabTypes } from "reducers/attribtable";
import { actions as attribTabActions } from "reducers/attribtable";

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

import HVSTextControl from "customComponents/tdInputText";

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

const httpTaskCallback = task => {
  console.log(task);
  /*
    request.post(`/api/task/${this.state.id}`)
      .send(task)
      .end((err, res) => {
        if (!err) return this.setState({ ...task })
        // Handle HTTP error
      })
      */
};

//let newAttribVal = "Test";

class AttribTable extends Component {
  componentWillReceiveProps(nextProps) {
    console.log("nextProps ");
    //debugger;
    console.log(nextProps);
    //this.forceUpdate();
  }

  //shouldComponentUpdate(nextProps, nextState) {
  //debugger;
  //return true;
  /*
        if (this.props.isLoading !== nextProps.isLoading) {
            return true;
        }
        if (this.state.items !== nextState.items) {
            return true;
        }
        return true;
        */
  //}

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(this.state.attribTableState);
  }

  componentDidMount() {
    debugger;
    //alert(this.props.location.state.params.hv_table_i)
    //if (this.props) {
    this.props.getAttribTable({
      type: attribTabTypes.FETCH_TABLE_REQUEST,
      payload: {
        hv_table_i: this.props.location.state.params.hv_table_i
      }
    });

    this.tableID = this.props.location.state.params.hv_table_i;
    //}
  }

  constructor(props) {
    super(props);
    this.tableID = 0;
    this.newUpdateValue = "";

    this.insertRow = this.insertRow.bind(this);
    //this.newAttribVal = "";
  }

  saveAttribVal = event => {
    debugger;
    this.setState({
      attribValue : event.target.value
    })
    //newAttribVal = event.target.value;
  };

  state = {
    height: "300px",
    items: [],
    mode: undefined,
    itemsHasErrored: false,
    itemsIsLoading: false,
    attribTableState: {},
    selectedRowID: -1,
    modal: false,
    attribValue: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      attribValue : ""
    });
  };

  itemClick = row => {
    debugger;
    console.log(row);
    this.props.history.push("/attribtable", { params: row });
  };

  updateRow = row => {
    debugger;
    this.props.updateAttribTable({
      type: attribTabTypes.UPDATE_REQUEST,
      payload: {
        rowID: row.hv_universal_i,
        tableID: row.hv_table_i,
        value: this.newUpdateValue
      }
    });
  };

  updateRowVal = rowObj => {
    debugger;
    this.newUpdateValue = rowObj.value;
    /*
    this.props.updateAttribTable({
      type: attribTabTypes.UPDATE_REQUEST,
      payload: {
        rowID: rowObj.rowID,
        tableID : rowObj.tableID,
        value: rowObj.value
      }
    });
    
    //this.setState({
    //  newUpdateValue: rowObj.value
    //})
    */
    /*
    this.props.updateAttribTableStore({
      type: attribTabTypes.UPDATE_REQUEST,
      payload: {
        rowID: row.hv_universal_i,
        tableID : row.hv_table_i
      }
    });
    */
  };

  deleteRow = row => {
    this.props.deleteAttribTable({
      type: attribTabTypes.DELETE_REQUEST,
      payload: {
        rowID: row.hv_universal_i,
        tableID: row.hv_table_i
      }
    });
  };

  cancelRow = row => {
    this.props.cancelAttribTable({
      type: attribTabTypes.CANCEL_REQUEST,
      payload: {
        rowID: row.hv_universal_i,
        value: row.hv_universal_name
      }
    });
  };

  editRow = row => {
    debugger;

    if (this.props.attribTableState.rowID != -1) {
      alert("Please Save the current row");
      return false;
    }

    this.props.makeRowEditable({
      type: attribTabTypes.MAKE_ROW_EDITABLE,
      payload: {
        rowID: row.hv_universal_i
      }
    });
  };

  insertRow = () => {
    debugger;

    this.setState({
      modal: !this.state.modal
    });

    //alert(this.refs["txtValue"].getValue());
    this.props.insertAttribTable({
      type: attribTabTypes.INSERT_REQUEST,
      payload: {
        tableID: this.tableID,
        value: this.state.attribValue
      }
    });

    
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
        <Row>
          <h3>Attribute Table</h3>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.toggle} size="sm" color="primary">
              Add New
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped hover size="md" style={Styles.propContainer}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Univesal ID</th>
                  <th>Universal Name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.attribTableState.items.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      height: "20px",
                      padding: "2px",
                      lineHeight: "0.75"
                    }}
                  >
                    <th scope="row">{index}</th>
                    <td>{row.hv_universal_i}</td>
                    <td>
                      <HVSTextControl
                        selectedRowID={this.props.attribTableState.rowID}
                        value={row.hv_universal_name}
                        placeHolder={""}
                        clientWidth={"100px"}
                        rowID={row.hv_universal_i}
                        tableID={row.hv_table_i}
                        updateRowVal={this.updateRowVal}
                      />
                    </td>
                    <td>
                      {this.props.attribTableState.rowID !=
                      row.hv_universal_i ? (
                        <div>
                          <Button
                            color="primary"
                            size="sm"
                            onClick={() => this.editRow(row)}
                          >
                            Edit
                          </Button>{" "}
                          {" "}
                          <Button
                            color="warning"
                            size="sm"
                            onClick={() => this.deleteRow(row)}
                          >
                            Delete
                          </Button>
                        </div>
                      ) : (
                        <div>
                          <Button
                            color="primary"
                            size="sm"
                            onClick={() => this.updateRow(row)}
                          >
                            Save
                          </Button>{" "}
                          {" "}
                          <Button
                            color="warning"
                            size="sm"
                            onClick={() => this.cancelRow(row)}
                          >
                            Cancel
                          </Button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Attribue</ModalHeader>
          <ModalBody>
            <Container fluid>
              <Row>
                <Col>Attribute Name:</Col>
                <Col>
                  <Input
                    type="text"
                    style={{ width: "250px", lineHeight: "0", padding: "0px" }}
                    placeholder={"Please enter value"}
                    onChange={this.saveAttribVal}
                    value={this.state.attribValue}
                    ref="txtValue"
                  />
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.insertRow}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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

//AttribTable.defaultProps = {};

/*
AttribTable.propTypes = {
    fetchData: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    deleteData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};
*/

const mapStateToProps = state => {
  debugger;
  return {
    attribTableState: state.attribTableState
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...attribTabActions
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
export default connect(mapStateToProps, mapDispatchToProps)(AttribTable);
