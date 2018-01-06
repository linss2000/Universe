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
  import MaintainUser from './MaintainUsers'

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
      this.imageTemplate = this.imageTemplate.bind(this);
      this.actionTemplate = this.actionTemplate.bind(this);
      this.export = this.export.bind(this);
      this.addNew = this.addNew.bind(this);
      this.editRow = this.editRow.bind(this);
      this.deleteRow = this.deleteRow.bind(this);
      this.onHideDialog = this.onHideDialog.bind(this);

      this.state={
        usersCount:0,
        filters:'',
        dialogTitle : "Add User",
        displayDialog:false,
        currectSelectedUser:[],
        isNewUser:true
      }

    }

  renderUsersList(){
    this.props.getUsersList({
      type: UsersListTypes.FETCH_REQUEST,
      payload :{}
    });
  }

    componentDidMount(){
    //  debugger
     this.renderUsersList()
    //alert(this.props.usersListState.message);
    }
    componentDidUpdate(prevProps,prevState){
     if(this.props.usersListState.message.msg=='deleted')
     {
       alert('User deleted successfully');
       this.props.resetMessage({
         type: UsersListTypes.MESSAGE,
         message: { val: 0, msg: "" }
       });
     }
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
      debugger
      let filters = this.state.filters;
      filters= ({ 'active':''})


         filters['active'] = {value: e.value[0]};
         this.setState({filters: filters});
    }

    onHideDialog()
    {
      this.setState({displayDialog: false,isNewUser:false})
      this.renderUsersList()

    }
    export() {
          this.dt.exportCSV();
      }


      addNew() {


             this.setState({
               displayDialog:true,
               dialogTitle : 'Add User',
               currectSelectedUser:null,
               isNewUser:true
             });
         }
         deleteRow(row) {
           
 if (window.confirm("Are you sure to delete this User?") ) {
   this.props.deleteUser({
     type: UsersListTypes.DELETE_REQUEST,
     payload :row
   });
 } else {
     return;
 }


          }
            editRow(row,e) {
              this.setState({
                  displayDialog:true,
                  dialogTitle : 'Edit Details',
                  currectSelectedUser: Object.assign({}, row),
                  isNewUser:false
              });
              }


   render(){


          let arr={
            ...this.props.usersListState.items
          }
          let active=Object.keys(arr)
          .map(igKey=>{
            let lbl=arr[igKey].hv_is_active=='Y'?'Active':'InActive'
           return ({ label:lbl, value:arr[igKey].hv_is_active})
         })
         .filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });




          let activeFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter" value={this.state.filters.active ? this.state.filters.active.value: null} options={active} onChange={this.onActiveChange}/>

          let roles = [
              {label: 'White', value: 'White'},
              {label: 'Green', value: 'Green'},

          ];

          let roleIDFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter" value={this.state.filters.roles ? this.state.filters.roles.value: null} options={roles} onChange={this.onRoleChange}/>
          var header =      <Row style={{"backgroundColor":"white"}}>
          <Col sm="10">
            <div className="float-left">
            <span className="text-primary" style={{'fontSize':'14px'}}>User Security</span>
           <br></br>
            <span className="text-primary" style={{'fontSize':'12px'}}>Manage the user that can access the system by adding new users, or modifying the access of exisiting user.</span>

            </div>
          </Col>
               <Col sm="2">
               <span>{this.state.usersCount} User Accounts</span>
                 <div className="float-right">
                   <span className="fa-stack fa-lg">
                     <i className="fa fa-square-o fa-stack-2x" />
                     <div style={{textAlign:'left'}}><div className="fa f fa-file-excel-o fa-stack-1x" label="" onClick={this.export}></div></div>
                   </span>{" "}
                   {" "}
                 </div>
               </Col>
             </Row>


             let customHeader=  <div>      <span className="fa-stack fa-md">
                     <i className="fa fa-square-o fa-stack-2x" />
                     <i className="fa fa-plus-circle fa-stack-1x" onClick={this.addNew}/>
                   </span>{" "}Add</div>
           let maintainUser=null;
           debugger
             if(this.state.displayDialog){
              maintainUser=             <Dialog visible={this.state.displayDialog} header= {this.state.dialogTitle} modal={true} onHide={this.onHideDialog}>
              <MaintainUser userObject={this.state} onDialogClose={this.onHideDialog}/>

                                  </Dialog>
             }
             else {
               {
                 maintainUser=''
               }
             }
     return (
       <div>
       <DataTable value={this.props.usersListState.items} paginator={true} rows={10} rowsPerPageOptions={[5,10,20]} ref={(el) => { this.dt = el; }} header={header} >
       <Column field="" header="" body={this.viewTemplate} style={{textAlign:'center',width:'1%'}} sortable={false} filter={false}/>

        <Column field="" header="" body={this.imageTemplate} style={{textAlign:'center',width:'3%'}} sortable={false} filter={false}/>

                  <Column field="hv_user_id" header="User ID"  style={{textAlign:'center',width:'3%'}} sortable={true} filter={true}/>
                  <Column field="hv_first_name" header="First Name" sortable={true} filter={true} style={{textAlign:'center',width:'5%'}}/>
                  <Column field="hv_last_name" header="Last Name" sortable={true} filter={true} style={{textAlign:'center',width:'5%'}}/>
                  <Column body={this.activeTemplate}  style={{textAlign:'center', width: '3%'}} header="Active"  sortable={true}  filter={false} filterElement={activeFilter} filterMatchMode="in" />
                  <Column body={this.actionTemplate}   header={customHeader}  style={{textAlign:'center', width: '5%'}}/>
              </DataTable>
  {maintainUser}
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
