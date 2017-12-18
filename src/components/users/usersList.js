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
import { types as usersListTypes } from "reducers/usersList_reducer";
import { actions as usersListActions } from "reducers/usersList_reducer";
import clientpic from "images/cadet_generic.png";
import {
  Row,
  Col,
} from "reactstrap";


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
    this.brandTemplate = this.brandTemplate.bind(this);
    this.export = this.export.bind(this);


  }


  componentDidMount(){
    debugger
      this.props.getUsersList({
        type: usersListTypes.FETCH_REQUEST,
        payload :{}
      });
  }
  brandTemplate(rowData, column) {
        return <img src={clientpic} alt={rowData.brand}/>;
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
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="fa-file-o" iconPos="left" label="Ex" onClick={this.export}></Button></div>;

   return (
     <div>
     <Row>
     <Col sm="12">
       <div className="float-right">
         <span className="fa-stack fa-lg">
           <i className="fa fa-square-o fa-stack-2x" />
           <div style={{textAlign:'left'}}><div className="fa f fa-file-excel-o fa-stack-1x" label="" onClick={this.export}></div></div>
         </span>{" "}
         {" "}
         <span className="fa-stack fa-lg">
           <i className="fa fa-square-o fa-stack-2x" />
           <i className="fa fa-filter fa-stack-1x" />
         </span>
       </div>
     </Col>
   </Row>
     <DataTable value={this.props.usersListState.items} paginator={true} rows={5} rowsPerPageOptions={[5,10,20]} ref={(el) => { this.dt = el; }}  >
                <Column field="hv_user_id" header="User ID" body={this.brandTemplate} style={{textAlign:'center',height:'20px'}} sortable={true} filter={true}/>
                <Column field="hv_first_name" header="First Name" sortable={true} filter={true}/>
                <Column field="hv_last_name" header="Last Name" sortable={true} filter={true}/>
                <Column field="hv_is_active" header="Active" sortable={true}  filter={true} filterElement={activeFilter} filterMatchMode="in" />
            </DataTable>
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
      ...usersListActions
    },
    dispatch
  )})
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)
