import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import {Button} from 'primereact/components/button/Button';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Dialog} from 'primereact/components/dialog/Dialog';
import { types as UsersListTypes } from "reducers/usersList_reducer";
import { actions as UsersListActions } from "reducers/usersList_reducer";
import clientpic from "images/cadet_generic.png";
import {
  Row,
  Col,
} from "reactstrap";
import Test from './Test'

export class UsersList extends Component{
  static propTypes = {
    //name: PropTypes.string.isRequired
  };

  constructor(props)
  {
    super(props);
    this.state = {
            filters: {}
        };
    this.onRoleChange = this.onRoleChange.bind(this);
    this.onActiveChange = this.onActiveChange.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.imageTemplate = this.imageTemplate.bind(this);
    this.actionTemplate = this.actionTemplate.bind(this);
    this.export = this.export.bind(this);
    this.addNew = this.addNew.bind(this);
    this.editRow = this.editRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);



    this.state={
      usersCount:0,
      filters:'',
      displayDialog:false,
      car:[]
    }
  }


  componentDidMount(){
    debugger
      this.props.getUsersList({
        type: UsersListTypes.FETCH_REQUEST,
        payload :{}
      });

  }
  componentWillReceiveProps(nextProps){
  this.setState({usersCount: nextProps.usersListState.items.length});
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
    viewTemplate(rowData,column){
      return <div>
      <i className="fa fa-ellipsis-v fa-fw" />

      </div>;
    }
  imageTemplate(rowData, column) {
    debugger
        return <img src={rowData.hv_photo}  style={{display:"block", width:"50px" ,height:"  50px"}}/>;
    }
    activeTemplate(rowData,column){
      if(rowData.hv_is_active!==null)
      {
      if(rowData.hv_is_active=='Y')
      {
        return <span>
            Yes
        </span>;
      }
      if(rowData.hv_is_active=='N')
      {
        return <span>
            No
        </span>;
      }
    }
    }

  onRoleChange(e) {
      let filters = this.state.filters;
      filters['roles'] = {value: e.value};
      this.setState({filters: filters});
  }
  onActiveChange(e) {
      let filters = this.state.filters;
      filters['active'] = {value: e.value};
      this.setState({filters: filters});
  }
  onFilter(e) {
      this.setState({filters: e.filters});
  }
  export() {
        this.dt.exportCSV();
    }
    addNew() {

           this.setState({
               car: {vin:'', year: '', brand: '', color: ''},
               displayDialog: true
           });
       }
       deleteRow(row) {
        debugger

          }
          editRow(row) {

                     this.setState({
                         car: {vin:'', year: '', brand: '', color: ''},
                         displayDialog: true
                     });
                 }
 render(){

        let active = [
                {label: 'Action', value: 0},
                {label: 'InActive', value: 1},

            ];
        let activeFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter" value={this.state.filters.active ? this.state.filters.active.value: null} options={active} onChange={this.onActiveChange}/>

        let roles = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},

        ];

        let roleIDFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter" value={this.state.filters.roles ? this.state.filters.roles.value: null} options={roles} onChange={this.onRoleChange}/>
        var header =      <Row>

             <Col sm="12">
             <span>{this.state.usersCount} User Accounts</span>

             <span className="fa-stack fa-lg float-right">
             <i className="fa fa-square-o fa-stack-2x" />
             <i className="fa fa-plus-circle fa-stack-1x" onClick={this.addNew} />
           </span>
               <div className="float-right">
                 <span className="fa-stack fa-lg">
                   <i className="fa fa-square-o fa-stack-2x" />
                   <div style={{textAlign:'left'}}><div className="fa f fa-file-excel-o fa-stack-1x" label="" onClick={this.export}></div></div>
                 </span>{" "}
                 {" "}
               </div>
             </Col>
           </Row>


   return (
     <div>
     <DataTable value={this.props.usersListState.items} paginator={true} rows={5} rowsPerPageOptions={[5,10,20]} ref={(el) => { this.dt = el; }} header={header} >
      <Column body={this.viewTemplate} style={{textAlign:'center',width:"1%"}}/>
                <Column field="hv_user_id" header="User ID" body={this.imageTemplate} style={{textAlign:'center',width:'3%'}} sortable={true} filter={true}/>
                <Column field="hv_first_name" header="First Name" sortable={true} filter={true} style={{textAlign:'center',width:'5%'}}/>
                <Column field="hv_last_name" header="Last Name" sortable={true} filter={true} style={{textAlign:'center',width:'5%'}}/>
                <Column body={this.activeTemplate} style={{textAlign:'center', width: '3%'}} header="Active"  sortable={true}  filter={true} filterElement={activeFilter} filterMatchMode="in" />
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '5%'}}/>
            </DataTable>
            <Dialog visible={this.state.displayDialog} header="Add User" modal={true} onHide={() => this.setState({displayDialog: false})}>

                        <Test/>

                    </Dialog>
            </div>
)
 }
}
function mapStateToProps(state)
{
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
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)
