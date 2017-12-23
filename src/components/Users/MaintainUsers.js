import React , {Component} from 'react';


import Paper  from "material-ui/Paper";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import {Button} from 'primereact/components/button/Button';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {InputMask} from 'primereact/components/inputmask/InputMask';
import Dropzone from 'react-dropzone';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as _ from "lodash";
import {
  Container,
  Card,
  Table,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import {FormWithConstraints , FieldFeedbacks,FieldFeedback} from 'react-form-with-constraints';

import { types as ManageUserTypes } from "reducers/Users/manageusersreducer";
import { actions as ManageUserActions } from "reducers/Users/manageusersreducer";

const paperStyle = {
  height: "auto",
  width: "100%",
  padding: "5px"
  // display: "flex"
};

export class UserComponent extends Component {
  constructor (props){
    super(props);
    form : null;
    this.state = {
      firstName : "",
      lastName : "",
      userId : "",
      password : "",
      emailId :"",
      isActive : 'true',
      userImage : null,
      uploadedImg : null,
      displayMsgdiv : "block",
      pwdexpiryDt :null,
      mobileNo : "",
      homeNo : "",
      otherNo :"",
      isMobileNo : 'false',
      isHomeNo : 'false',
      isOtherNo : 'false',
      btndisabled : false
      
          
    }
    
    this.insertUserDetails = this.insertUserDetails.bind(this);
    this.checkNumberSelected = this.checkNumberSelected.bind(this);
    this.bindHomeNumber = this.bindHomeNumber.bind(this);
    this.bindOtherNumber = this.bindOtherNumber.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
   this.handleChange = this.handleChange.bind(this); 
    this.onActiveChange = this.onActiveChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.userState.message.val == 2){   
      debugger    
    alert(this.props.userState.message.statusMsg[0].ReturnMessage);
      this.props.resetMessage({
        type: ManageUserTypes.MESSAGE,
        message: { val: 0, statusMsg: "" }
      });
    }
  }

  insertUserDetails(){
debugger
if(!this.state.isMobileNo)
    this.setState({mobileNo : "0"});
if(!this.state.isOtherNo)
this.setState({otherNo : "0"});
if(!this.state.isHomeNo)
  this.setState({homeNo : "0"});

    this.props.insertUserDetails({
      type: ManageUserTypes.INSERT_REQUEST,
      user : {
      hv_first_name: _.trim(this.firstName.getValue()),
      hv_last_name: _.trim(this.lastName.getValue()),
      hv_user_id: _.trim(this.userId.getValue()),
      hv_pwd: _.trim(this.password.getValue()),
      hv_email : _.trim(this.emailId.getValue()),
      hv_isactive : this.state.isActive == true ? 'Y' : 'N',
      hv_mobile_no : this.state.isMobileNo == true ? this.state.mobileNo : "0",
      hv_home_no : this.state.isHomeNo == true ? this.state.homeNo : "0",
      hv_other_no : this.state.isOtherNo == true ? this.state.otherNo : "0",
      hv_image : this.state.userImage ? this.state.userImage : null
      }
    });
  }

  onActiveChange(e) {
    debugger
    this.setState({isActive : e.checked});
}


onImageDrop(files) {
  debugger
  var fileasBinary , imageType ;
  files.forEach(function(file) {
    debugger
    const reader = new FileReader();    
    reader.onload = () => {
      debugger
       fileasBinary = btoa(reader.result);
       let base64data = 'data:' + imageType + ';base64,' + fileasBinary;
       this.setState({
        userImage :  base64data})      
    }
  imageType = file.type;
  reader.readAsBinaryString(file);
   }, this);  
  this.setState({
        uploadedImg : files[0],
       displayMsgdiv : "none"
     });

}

handleUserChange(e) {
  debugger
  this.form.validateFields(e.target);
  this.handleChange(e);
  this.setState({userId : e.target.value});
}

handlePasswordChange(e) {
  this.form.validateFields(e.target);
  this.handleChange(e);
  this.setState({password : e.target.value});
} 

bindOtherNumber(e){
  this.setState({ isOtherNo: e.target.checked });
}

handleChange(e) {
  const target = e.currentTarget;
  this.form.validateFields(target);
  this.setState({
     btndisabled: !this.form.isValid()
  });
}

bindHomeNumber(e){
  this.setState({ isHomeNo: e.target.checked });
}

checkNumberSelected(e){
  this.setState({ isMobileNo: e.target.checked });
}

submitForm(e)
{
  e.preventDefault();
  this.form.validateFields();
  this.setState({ btndisabled: !this.form.isValid() });
  if(this.form.isValid())
      // alert("Form is valid");
    this.insertUserDetails();
  
}


  render() {
    return (
      <FormWithConstraints ref={formwithConstraints => this.form = formwithConstraints} onSubmit={this.submitForm} noValidate>
      <div className="container" id="divUsers" >
        <div className="row">
        <div className="FileUpload auto">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
            activeClassName='active-dropzone'>
            <div style={{display :this.state.displayMsgdiv}}>Drop an image or click to select a file to upload.</div>
            {this.state.uploadedImg === null ? null :
          <div>
            <img src={this.state.uploadedImg.preview} style={{width:"190px",height : "190px"}} />
          </div>}
          </Dropzone>
        </div>
          <div className="col-sm-9">
            <div className="box box-info">
              <div className='box-body pad' style={{minHeight: "400px"}}>              
                <div className="row" style={{borderCollapse: "separate",borderSpacing: "5px 5px", width:"100%" }}  >
                  <div className="col-sm-auto labelWidth alignCenter" >
                    <label id="lblEmployeeId" runat="server"  className="labelfont">
                     Employee Id
                    </label>                   
                  </div>
                  <div className="col-sm-auto ">
                      <TextField  id="txtEmployeeId"                      
                          className="font11"                     
                          hintText="Employee Id" style={{width:"75%"}} />   
                      <i className="fa fa-search" onClick= { e => {
                        alert("tdfdfg");
                      }}/>
                  </div>
                  <div className="col-sm-auto labelWidth alignCenter" >
                  {/* <Checkbox  label="test" onChange={this.onActiveChange}    
                   checked={this.state.isActive}></Checkbox> */}
                    <label id="lblUserId" runat="server"  className="labelfont">
                     Active
                    </label>                   
                  </div>
                  <div  className="col-sm-auto alignCenter" >
                   <input type="checkbox" style={{ marginLeft: "5px", verticalAlign: "top"}} 
                      checked={this.state.isActive}
                      onChange={this.onActiveChange}
                    />
                  </div>
                  </div>
                  <Paper style={paperStyle} zDepth={1} >   
                    <Row>
                      <Col sm="6">
                    <Row>
                      <Col sm="auto" className="labelWidth alignCenter">
                        <span className="text-left labelfont">First Name</span>   
                      </Col>                   
                      <Col sm="3">
                       <TextField  id="txtFirstName"   name="txtFirstName"                      
                          className="font11" required
                          ref={element => (this.firstName = element)}
                          value={this.state.firstName}
                          onChange={(e) =>{
                            this.form.validateFields(e.target);
                            this.handleChange(e);
                            this.setState({ firstName: e.target.value })} }               
                          hintText="First Name"/>
                          <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtFirstName">
                            <FieldFeedback when="valueMissing">First Name required.</FieldFeedback>
                         </FieldFeedbacks>

                      </Col>
                    </Row>      
                    <Row>
                      <Col sm="auto" className="labelWidth alignCenter">
                      <span className="text-left labelfont">
                          Last Name</span>
                      </Col>
                      <Col sm="3">
                       <TextField  id="txtLastName"  name="txtLastName"                    
                          className="font11"                 
                          ref={element => (this.lastName = element)}
                          value={this.state.lastName} required
                          onChange={(e) =>{
                            this.form.validateFields(e.target);
                            this.handleChange(e);
                            this.setState({ lastName: e.target.value })}  }     
                          hintText="Last Name"  />
                          <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtLastName">
                            <FieldFeedback when="valueMissing">Last Name required.</FieldFeedback>
                         </FieldFeedbacks>
                      </Col>
                    </Row>           
                    <Row>
                      <Col sm="auto" style={{width:"93px"}} className="labelWidth alignCenter">
                      <span className="text-left labelfont required">
                          User Id</span>
                      </Col>
                      <Col sm="3">
                       <TextField  id="txtUserId"  name="txtUserId"                 
                          className="font11"   required            
                          ref={element => (this.userId = element)}
                          value={this.state.userId}
                          onChange={this.handleUserChange}     
                          hintText="User Id" minLength={3}/>
                          <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtUserId">
                            <FieldFeedback when="valueMissing">Must enter User Id.</FieldFeedback>
                            <FieldFeedback when="tooShort">UserId must contain atleast 3 characters. </FieldFeedback>
                          </FieldFeedbacks>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="auto"  className="labelWidth alignCenter">
                      <span className="text-left labelfont required">
                       Password</span>
                      </Col>
                      <Col sm="3">
                      <TextField
                      id="txtPassword" name="txtPassword"
                      ref={element => (this.password = element)}
                          value={this.state.password} required
                          onChange={this.handlePasswordChange}   
                      type="password" minLength={8}/>
                      <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtPassword" show="all">
                            <FieldFeedback when="valueMissing">Password is required</FieldFeedback>
                            <FieldFeedback when="tooShort">Password must of atleast 8 length.</FieldFeedback>
                            <FieldFeedback when={value =>!/\d/ .test(value)}>Should contain atleast 1 number. </FieldFeedback>
                            <FieldFeedback when={value =>!/\W/ .test(value)}>Should contain atleast 1 special character. </FieldFeedback>
                            <FieldFeedback when={value =>!/[a-z]/ .test(value)}>Should contain atleast 1 character. </FieldFeedback>
                          </FieldFeedbacks>
                      </Col>
                    </Row>            
                    <Row>
                      <Col sm="auto" style={{width:"93px"}}  className="labelWidth alignCenter">
                      <span className="text-left labelfont">
                          Email Id</span>
                      </Col>
                      <Col sm="3">
                      <TextField type="email" name="txtEmailId"
                      id="txtEmailId" required
                      placeholder="abc@test.com"
                      ref={element => (this.emailId = element)}
                          value={this.state.emailId}
                          onChange={(e) =>{
                            this.form.validateFields(e.target);
                            this.handleChange(e);
                            this.setState({ emailId: e.target.value })}   
                          }
                       />
                       <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtEmailId">
                            <FieldFeedback when="valueMissing">Email Id is required.</FieldFeedback>
                            <FieldFeedback when="*" />
                            </FieldFeedbacks>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="6">
                    <Row>
                    <Col sm="2" className="labelWidth alignCenter">
                        <span className="text-left labelfont">Password Expiry</span>   
                      </Col>                   
                      <Col sm="4">
                        <Calendar showIcon="true" value={this.state.pwdexpiryDt} 
                        onChange= {(e) =>this.setState({pwdexpiryDt : e.value})} style={{marginLeft:"11px",background:"lightslategrey"}}></Calendar>                      
                      </Col>
                      </Row>
                      <Row>
                    <Col sm="2" className="labelWidth alignCenter">
                      <span className="text-left labelfont">
                          Phone Number(s)</span>
                      </Col>
                      <Col  sm="4">
                            <Table>
                             <tbody>
                                <tr>
                                    <td>
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkMobileNo" 
                                        onChange={this.checkNumberSelected}
                                         aria-label="Mobile" />
                                        Mobile
                                        </InputGroupAddon>                                        
                                        <InputMask mask ="(999)-999-9999" unmask="true" id="txtMobileNo" value={this.state.mobileNo} placeholder="Enter Mobile Number"
                                            onChange={e =>
                                                this.setState({ mobileNo: e.value })}/>                                        
                                      </InputGroup>
                                   <br/>
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkHomeNo"
                                         aria-label="Home"
                                         onChange={this.bindHomeNumber}  />
                                        Home
                                        </InputGroupAddon>
                                        <InputMask mask ="(999)-999-9999" unmask="true" id="txtHomeNo" placeholder="Enter Home Number"
                                        value={this.state.homeNo} style={{width:'100%'}}
                                      onChange={e =>
                                         this.setState({ homeNo: e.value })}
                                />                                        
                                      </InputGroup >
                                    <br/>
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkOtherNo" 
                                         aria-label="Other" 
                                       onChange ={this.bindOtherNumber} />
                                        Other
                                        </InputGroupAddon>
                                        <InputMask mask ="(999)-999-9999" unmask="true" id="txtOtherNo" placeholder="Enter Other Number"
                                        value={this.state.otherNo} style={{width:'100%'}}
                                      onChange={(e) =>
                                          this.setState({ otherNo: e.value })}/>                                        
                                      </InputGroup>
                                    </td>
                                  </tr>
                              </tbody>
                            </Table>
                       {/* <TextField  id="txtLastName"                      
                          className="font11"                 
                          ref={element => (this.lastName = element)}
                          value={this.state.lastName}
                          onChange={e =>
                            this.setState({ lastName: e.target.value })}       
                          hintText="Last Name" style={{width:"90%"}} /> */}
                      </Col>
                    </Row>
                  </Col>
                  </Row>
                  </Paper>
                  <Row>
                    <Col sm="12" style={{float:"right", margin:"5px"}}>
                      <Button label ="Cancel" style={{float:"right",background:"lightslategray",borderColor :"lightslategray"}}/>
                      <Button label ="Save" style={{float:"right",background:"grey",borderColor :"grey"}} 
                      disabled={this.state.btndisabled}
                       />
                    </Col>
                  </Row>
            </div>
      </div>
      </div>
      </div>
      </div>
     </FormWithConstraints>

    )
  }

}

const mapStateToProps = state => {
  return {
    userState: state.ManageUserState
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...ManageUserActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);


{/* <table
                        style={{ width: "100%",borderTop:"0px" }} className="borderless w-75">
                      <tbody>
                        <tr className="borderless">
                          <td className="text-left labelfont" >
                          First Name</td>
                          <td>
                          <TextField  id="txtFirstName"                      
                          className="font11"                     
                          hintText="First Name" />
                          </td>
                        </tr>
                        <tr style={{ width: "100%" }} className="borderless">
                          <td className="text-left labelfont" style={{verticalAlign:"middle"}} >
                          Last Name</td>
                          <td>
                          <TextField    
                          id="txtLastName"                      
                          className="font11"                     
                          hintText="Last Name" />
                          </td>
                        </tr>
                      </tbody>
                      </table>                 */}