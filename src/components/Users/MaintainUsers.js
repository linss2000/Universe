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
      UId : "",
      uPassword : "",
      emailId :"",
      isActive : true,
      userImage : null,
      uploadedImg : null,
      displayMsgdiv : "block",
      pwdexpiryDt :null,
      mobileNo : "",
      homeNo : "",
      otherNo :"",
      isMobileNo : false,
      isHomeNo : false,
      isOtherNo : false,
      btndisabled : false,
      isReadOnly : false


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
    this.CloseDialog = this.CloseDialog.bind(this);
  }

  componentDidMount(){
//debugger
// this.state.uPassword = "";
    if (this.props.userObject != null){
      if (!this.props.userObject.isNewUser) 
        this.setState({isReadOnly : true});
      if (this.props.userObject.currectSelectedUser != null){
        this.props.getUserDetails({
            type: ManageUserTypes.FETCH_USER_REQUEST,
            user : {
            hv_user_id: this.props.userObject.currectSelectedUser.hv_user_id
            }
          });
      }
      
    }
 
    // this.props.insertUserDetails({
    //   type: ManageUserTypes.INSERT_REQUEST,
    //   user : {
    //   hv_first_name: _.trim(this.firstName.getValue()),
    //   hv_last_name: _.trim(this.lastName.getValue()),
    //   hv_user_id: _.trim(this.user_id.getValue()),
    //   hv_pwd: _.trim(this.uPassword.getValue()),
    //   hv_email : _.trim(this.emailId.getValue()),
    //   hv_isactive : this.state.isActive == true ? 'Y' : 'N',
    //   hv_mobile_no : this.state.isMobileNo == true ? this.state.mobileNo : "0",
    //   hv_home_no : this.state.isHomeNo == true ? this.state.homeNo : "0",
    //   hv_other_no : this.state.isOtherNo == true ? this.state.otherNo : "0",
    //   hv_image : this.state.userImage ? this.state.userImage : null
    //   }
    // });

  }

  componentWillReceiveProps(nextProps){
    if (nextProps.userState.items) {
      //debugger
      var user = nextProps.userState.items[0];
        this.setState({
          firstName : user.hv_first_name,
          lastName : user.hv_last_name,
          UId : user.hv_user_id,
          uPassword : user.hv_pwd,
          emailId :user.hv_email,
          isActive : user.hv_is_active == 'Y' ? true : false ,
          userImage : user.hv_photo == "" ? null : user.hv_photo,
          uploadedImg : user.hv_photo == "" ? null : user.hv_photo,
          displayMsgdiv : user.hv_photo ? 'none' : 'block',
          mobileNo : user.mobile_no == "0" ? "" : user.mobile_no ,
          homeNo : user.home_no == "0" ? "" : user.home_no,
          otherNo : user.other_no == "0" ? "" : user.other_no,
          isMobileNo : user.mobile_no != "0" ? true : false,
          isHomeNo : user.home_no != "0" ? true : false,
          isOtherNo : user.other_no != "0" ? true : false
        })
      }
    }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.userState.message.val == 2){
   //   debugger
    alert(this.props.userState.message.statusMsg[0].ReturnMessage);
      this.props.resetMessage({
        type: ManageUserTypes.MESSAGE,
        message: { val: 0, statusMsg: "" }
      });
      this.props.onDialogClose();
    }
    
  }

  insertUserDetails(){
//debugger
// if(!this.state.isMobileNo)
//     this.setState({mobileNo : "0"});
// if(!this.state.isOtherNo)
// this.setState({otherNo : "0"});
// if(!this.state.isHomeNo)
//   this.setState({homeNo : "0"});
//debugger
    this.props.insertUserDetails({
      type: ManageUserTypes.INSERT_REQUEST,
      user : {
      hv_first_name: _.trim(this.firstName.getValue()),
      hv_last_name: _.trim(this.lastName.getValue()),
      hv_user_id: _.trim(this.UId.getValue()),
      hv_pwd: _.trim(this.uPassword.getValue()),
      hv_email : _.trim(this.emailId.getValue()),
      hv_isactive : this.state.isActive == true ? 'Y' : 'N',
      hv_mobile_no : this.state.isMobileNo == true ? this.state.mobileNo : "0",
      hv_home_no : this.state.isHomeNo == true ? this.state.homeNo : "0",
      hv_other_no : this.state.isOtherNo == true ? this.state.otherNo : "0",
      hv_image : this.state.userImage ? this.state.userImage : null
      }
    });
  }

  updateUserDetails(){
   // debugger
    // if(!this.state.isMobileNo)
    //     this.setState({mobileNo : "0"});
    // if(!this.state.isOtherNo)
    // this.setState({otherNo : "0"});
    // if(!this.state.isHomeNo)
    //   this.setState({homeNo : "0"});
 debugger
        this.props.updateUserDetails({
          type: ManageUserTypes.UPDATE_USER_REQUEST,
          user : {
          hv_first_name: _.trim(this.firstName.getValue()),
          hv_last_name: _.trim(this.lastName.getValue()),
          hv_user_id: _.trim(this.UId.getValue()),
          hv_pwd: _.trim(this.uPassword.getValue()),
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
   // debugger
    this.setState({isActive : e.checked});
}

CloseDialog(e) {
    e.preventDefault();
    if (this.props){
    this.props.onDialogClose();
   }
  }

onImageDrop(files) {
 // debugger
  var fileasBinary , imageType ;
  files.forEach(function(file) {
   // debugger
    const reader = new FileReader();
    reader.onload = () => {
     // debugger
       fileasBinary = reader.result;
      // let base64data = 'data:' + imageType + ';base64,' + fileasBinary;
       this.setState({
        userImage :  fileasBinary})
    }
  imageType = file.type;
  reader.readAsDataURL(file);
   }, this);
  this.setState({
        uploadedImg : files[0],
       displayMsgdiv : "none"
     });

}

handleUserChange(e) {
 // debugger
  this.form.validateFields(e.target);
  this.handleChange(e);
  this.setState({UId : e.target.value});
}

handlePasswordChange(e) {
  this.form.validateFields(e.target);
  this.handleChange(e);
  this.setState({uPassword : e.target.value});
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
  if(this.form.isValid()) {
      // alert("Form is valid");
     // debugger
      if (this.props.userObject.isNewUser)
          this.insertUserDetails();
      else
        this.updateUserDetails();
}
}


  render() {
    return (
      
      <FormWithConstraints ref={formwithConstraints => this.form = formwithConstraints}  noValidate>
      <div className="" id="divUsers" >
        <div className="row">
        <div className="FileUpload auto">
        <Paper style={{width:"190px",height : "190px"}} zDepth={2} >
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
            activeClassName='active-dropzone' style={{borderStyle:'solid',borderWidth:'0px'}}>
            <div style={{display :this.state.displayMsgdiv}}>Drop an image or click to select a file to upload.</div>
            {(this.state.uploadedImg == null) || (this.state.uploadedImg == '') ? null :
          <div>
            <img src={this.state.uploadedImg.preview ? this.state.uploadedImg.preview : this.state.uploadedImg } style={{width:"190px",height : "190px"}} />
          </div>}
          </Dropzone>
          </Paper>
        </div>
          <div className="col-sm-9">
            <div className="box box-info">  
              <div className='box-body' style={{minHeight: "400px",width:'100%'}}>
                <div className="row"  >
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
                  <Paper style={paperStyle} zDepth={2} >
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
                       <TextField  id="txtUId"
                          ref={element => (this.UId = element)}
                          className="font11"   required
                          value={this.state.UId}
                          readOnly={this.state.isReadOnly}
                          onChange={this.handleUserChange}
                          hintText="User Id" minLength={3}/>
                          <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtUId">
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
                      id="txtUPassword" name="txtUPassword"
                      ref={element => (this.uPassword = element)}
                      value={this.state.uPassword} required
                          onChange={this.handlePasswordChange}
                      hintText="Password"
                      type="password" minLength={8}/>
                      <FieldFeedbacks style={{width:"256px", color:"red"}} for="txtUPassword" show="all">
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
                    <Col sm="auto" className="labelWidth alignCenter">
                        <span className="text-left labelfont">Password Expiry</span>
                      </Col>
                      <Col sm="4">
                        <Calendar showIcon="true" value={this.state.pwdexpiryDt}
                        onChange= {(e) =>this.setState({pwdexpiryDt : e.value})} style={{marginLeft:"11px",background:"lightslategrey"}}></Calendar>
                      </Col>
                      </Row>
                      <Row>
                    <Col sm="auto" className="labelWidth alignCenter">
                      <span className="text-left labelfont">
                          Phone Number(s)</span>
                      </Col>
                      <Col  sm="4">
                      <br/>
                       {/* <Table>
                             <tbody>
                                <tr>
                                    <td> */}
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkMobileNo"
                                        checked={this.state.isMobileNo}
                                        onChange={this.checkNumberSelected}
                                         aria-label="Mobile" />
                                        Mobile
                                        </InputGroupAddon>
                                        <input type="text"  value={this.state.mobileNo} placeholder="Mobile number"
                                            onChange={e =>
                                                this.setState({ mobileNo: e.target.value })} />
                                        {/* <InputMask mask="(999) 999-9999" unmask='true' value='1112223333' placeholder="(999) 999-9999"></InputMask>
                                        <InputMask mask ="(999) 999-9999" unmask="true" id="txtMobileNo" 
                                        value="{this.mobileNo.getValue()}" placeholder="(999) 999-9999"
                                            onChange={e =>
                                                this.setState({ mobileNo: e.value })} ></InputMask> */}
                                      </InputGroup>
                                   <br/>
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkHomeNo"
                                        checked={this.state.isHomeNo}
                                         aria-label="Home"
                                         onChange={this.bindHomeNumber}  />
                                        Home&nbsp;
                                        </InputGroupAddon>
                                        <input type="text"  value={this.state.homeNo} placeholder="Enter home number"
                                            onChange={e =>
                                                this.setState({ homeNo: e.target.value })} />
                                        {/* <InputMask mask ="(999)-999-9999" unmask="true" id="txtHomeNo" placeholder="Enter Home Number"
                                        value={this.state.homeNo} style={{width:'100%'}}
                                      onChange={e =>
                                         this.setState({ homeNo: e.value })}
                                /> */}
                                      </InputGroup >
                                    <br/>
                                      <InputGroup style={{height:"30px"}}>
                                        <InputGroupAddon>
                                        <Input addon type="checkbox" id="chkOtherNo"
                                        checked={this.state.isOtherNo}
                                         aria-label="Other"
                                       onChange ={this.bindOtherNumber} />
                                        Other&nbsp;&nbsp;
                                        </InputGroupAddon>
                                        <input type="text"  value={this.state.otherNo} placeholder="Enter other if any"
                                            onChange={e =>
                                                this.setState({ otherNo: e.target.value })} />
                                        {/* <InputMask mask ="(999)-999-9999" unmask="true" id="txtOtherNo" placeholder="Enter Other Number"
                                        value={this.state.otherNo} style={{width:'100%'}}
                                      onChange={(e) =>
                                          this.setState({ otherNo: e.value })}/> */}
                                      </InputGroup>
                                    {/* </td>
                                  </tr>
                              </tbody>
                            </Table> */}
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
                      <Button label ="Cancel" style={{float:"right",background:"lightslategray",borderColor :"lightslategray"}}
                      onClick={this.CloseDialog}
                      />
                      <Button label ="Save" style={{float:"right",background:"grey",borderColor :"grey"}}
                      disabled={this.state.btndisabled} onClick={this.submitForm}
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