import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { Button } from 'primereact/components/button/Button';
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Dropdown } from 'primereact/components/dropdown/Dropdown';
import { MultiSelect } from 'primereact/components/multiselect/MultiSelect';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { types as UsersListTypes } from "reducers/usersList_reducer";
import { actions as UsersListActions } from "reducers/usersList_reducer";
import clientpic from "images/cadet_generic.png";
import {
  Row,
  Col,
} from "reactstrap";
import MaintainUser from './MaintainUsers'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export class UsersList extends Component {
  static propTypes = {
    //name: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.onActiveChange = this.onActiveChange.bind(this);
    this.viewTemplate = this.viewTemplate.bind(this);
    this.imageTemplate = this.imageTemplate.bind(this);
    this.actionTemplate = this.actionTemplate.bind(this);
    this.export = this.export.bind(this);
    this.addNew = this.addNew.bind(this);
    this.editRow = this.editRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.onHideDialog = this.onHideDialog.bind(this);

    this.state = {
      usersCount: 0,
      dialogTitle: "Add User",
      displayDialog: false,
      currectSelectedUser: [],
      isNewUser: true,
      displayFilter: 'none',
      filters: {}

    }

  }

  renderUsersList() {
    this.props.getUsersList({
      type: UsersListTypes.FETCH_REQUEST,
      payload: {}
    });
  }

  componentDidMount() {
    //  debugger
    this.renderUsersList()
    //alert(this.props.usersListState.message);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.usersListState.message.msg == 'deleted') {
      alert('User deleted successfully');
      this.props.resetMessage({
        type: UsersListTypes.MESSAGE,
        message: { val: 0, msg: "" }
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ usersCount: nextProps.usersListState.items.length });

  }
  actionTemplate(rowData, column) {
    return <div>
      <i
        className="fa fa-pencil fa-fw"
        onClick={() => this.editRow(rowData)}
        />{" "}
      <i
        className="fa fa-trash fa-fw"
        onClick={() => this.deleteRow(rowData)}
        />

    </div>;
  }


  viewTemplate(rowData, column) {
    return <div>
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
        >
        <MenuItem primaryText="Edit" onClick={() => this.editRow(rowData)} />
        <MenuItem primaryText="Delete" onClick={() => this.deleteRow(rowData)} />
      </IconMenu>
    </div>;
  }
  imageTemplate(rowData, column) {

    return <img src={rowData.hv_photo} style={{ display: "block", width: "50px", height: "  50px" }} />;
  }
  activeTemplate = (rowData, column) => {
    debugger
    if (rowData.hv_is_active !== null) {
      if (rowData.hv_is_active == 'Y') {
        return <span>
          Yes
          </span>;
      }
      if (rowData.hv_is_active == 'N') {
        return <span>
          No
          </span>;
      }
    }
  }

  onActiveChange = (e) => {
    debugger
    let filters = this.state.filters;
    let ds = [];
    e.value.map(val => {
      ds.push({ value: val })

    })
    filters['hv_is_active'] = { value: e.value }
    this.setState({ filters: filters });
  }
  onfilterChange = (e) => {
    debugger
    let filters = this.state.filters;
    switch (e.target.id) {
      case 'hv_user_id':
        filters['hv_user_id'] = { value: e.target.value };
        break;
      case 'hv_first_name':
        filters['hv_first_name'] = { value: e.target.value };
        break;
      case 'hv_last_name':
        filters['hv_last_name'] = { value: e.target.value };
        break;
      case 'hv_role_name':
        filters['hv_role_name'] = { value: e.target.value };
        break;
    }
    this.setState({ filters: filters });
  }

  onFilter = (e) => {
    debugger
    this.setState({ filters: e.filters });
  }

  onHideDialog() {
    this.setState({ displayDialog: false, isNewUser: false })
    this.renderUsersList()

  }
  onShowFilter = () => {
    this.dt.getColumns().map(col => {
      col.props
    })
    if (this.state.displayFilter !== 'inline-table')
      this.setState({ displayFilter: 'inline-table' })
    else
      this.setState({ displayFilter: 'none' })
  }
  onClearFilter = () => {
    let filters = this.state.filters;
    filters = {}
    this.setState({ filters: filters })
  }
  export() {
    this.dt.exportCSV();
  }


  addNew() {


    this.setState({
      displayDialog: true,
      dialogTitle: 'Add User',
      currectSelectedUser: null,
      isNewUser: true
    });
  }
  deleteRow(row) {

    if (window.confirm("Are you sure to delete this User?")) {
      this.props.deleteUser({
        type: UsersListTypes.DELETE_REQUEST,
        payload: row
      });
    } else {
      return;
    }


  }
  editRow(row, e) {
    this.setState({
      displayDialog: true,
      dialogTitle: 'Edit Details',
      currectSelectedUser: Object.assign({}, row),
      isNewUser: false
    });
  }


  render() {


    let userIDFilter = <input style={{ display: this.state.displayFilter }} type="text" id="hv_user_id" className="" value={this.state.filters.hv_user_id ? this.state.filters.hv_user_id.value : ''} onChange={this.onfilterChange} />
    let FNFilter = <input style={{ display: this.state.displayFilter }} type="text" id="hv_first_name" className="" value={this.state.filters.hv_first_name ? this.state.filters.hv_first_name.value : ''} onChange={this.onfilterChange} />
    let LNFilter = <input style={{ display: this.state.displayFilter }} type="text" id="hv_last_name" className="" value={this.state.filters.hv_last_name ? this.state.filters.hv_last_name.value : ''} onChange={this.onfilterChange} />
    let roleFilter = <input style={{ display: this.state.displayFilter }} type="text" id="hv_role_name" className="" value={this.state.filters.hv_role_name ? this.state.filters.hv_role_name.value : ''} onChange={this.onfilterChange} />    
    let active = [
      { label: 'Yes', value: 'Y' },
      { label: 'No', value: 'N' },
    ];
    let activeFilter =
      <MultiSelect style={{ width: '10px', display: this.state.displayFilter }} className="" value={this.state.filters.hv_is_active ? this.state.filters.hv_is_active.value : null} options={active} onChange={this.onActiveChange} />
    //<Dropdown style={{width:'100%',visibility:this.state.displayFilter}} className="ui-column-filter" value={this.state.filters.hv_is_active ? this.state.filters.hv_is_active.value: 'N'} options={active} onChange={this.onActiveChange}/>

    var header = <Row style={{ "backgroundColor": "white" }}>
      <Col sm="10">
        <div className="float-left">
          <span className="text-primary" style={{ 'fontSize': '14px' }}>User Security</span>
          <br></br>
          <span className="text-primary" style={{ 'fontSize': '12px' }}>Manage the user that can access the system by adding new users, or modifying the access of exisiting user.</span>

        </div>
      </Col>
      <Col sm="2">
        <span>{this.state.usersCount}User Accounts</span>
        <div className="float-right">
          <span className="fa-stack fa-lg">
            <i className="fa fa-square-o fa-stack-2x" />
            <div style={{ textAlign: 'left' }}><div className="fa f fa-file-excel-o fa-stack-1x" label="" onClick={this.export}></div></div>
          </span>{" "}
          {" "}
        </div>
      </Col>
    </Row>


    let customHeaderAction = <div>      <span className="fa-stack fa-md">
      <i className="fa fa-square-o fa-stack-2x" />
      <i className="fa fa-plus-circle fa-stack-1x" onClick={this.addNew} />
    </span>{" "}Add</div>

    let filter =
      <div>
        <span className="fa-stack fa-md">
          <i className="fa fa-filter fa-stack-1x" onClick={() => { this.onShowFilter() } } />
        </span>
        {" "}
        <span className="fa-stack fa-md">

          <i className="fa fa-close" onClick={() => { this.onClearFilter() } } />
        </span>

      </div>


    let maintainUser = null;
    //debugger
    if (this.state.displayDialog) {
      maintainUser = <Dialog visible={this.state.displayDialog} header={this.state.dialogTitle} modal={true} onHide={this.onHideDialog} width='1200px'>
        <MaintainUser userObject={this.state} onDialogClose={this.onHideDialog} /></Dialog>
    }
    else {
      {
        maintainUser = ''
      }
    }
    return (
      <div>
        <DataTable id="dataTable" value={this.props.usersListState.items} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}
          ref={(el) => { this.dt = el; } } header={header} onFilter={this.onFilter} filters={this.state.filters}>
          <Column field="" header={filter} body={this.viewTemplate} style={{ textAlign: 'left', width: '2%' }} sortable={false} filter={false} />
          <Column field="hv_user_id" header="User ID" style={{ textAlign: 'center', width: '5%', height: '1px' }} sortable={true} filter={true} filterElement={userIDFilter} filterMatchMode="contains" />
          <Column field="hv_first_name" header="First Name" sortable={true} style={{ textAlign: 'center', width: '8%' }} sortable={true} filter={true} filterElement={FNFilter} filterMatchMode="contains" />
          <Column field="hv_last_name" header="Last Name" sortable={true} style={{ textAlign: 'center', width: '8%' }} sortable={true} filter={true} filterElement={LNFilter} filterMatchMode="contains" />
          <Column field="hv_role_name" header="Role(s)" sortable={true} style={{ textAlign: 'center', width: '8%' }} sortable={true} filter={true} filterElement={roleFilter} filterMatchMode="contains" />          
          <Column field="hv_is_active" body={this.activeTemplate} style={{ textAlign: 'center', width: '4%' }} header="Active" sortable={true} filter={true} filterElement={activeFilter} filterMatchMode="in" />
          <Column body={this.actionTemplate} header={customHeaderAction} style={{ textAlign: 'center', width: '2%' }} />
        </DataTable>
        {maintainUser}
      </div>

    )
  }
}
function mapStateToProps(state) {
  debugger;
  return {
    usersListState: state.usersListState
  };
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(
  {
        ...UsersListActions
      },
  dispatch
)})
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
