import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import * as _ from 'lodash'
import { bindActionCreators } from 'redux'

import { types as authTypes } from 'reducers/auth';
import { actions as authActions } from 'reducers/auth';

//import { actions as messageActions } from 'ducks/message'

const style = {
  margin: 12,
};

const paperStyle = {
  height: 300,
  width: 600,
  margin: 20,
  marginTop: 60,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
};

const font11 = {
  color: '#0b4981',
  fontFamily: 'Roboto,sans-serif',
  fontSize: '14px',
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: false,
      error: null,
      items:[],
      message:""
    };
  }

  handleChange = (event, index, value) => this.setState({ value });

  fetchData(url) {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response;
      })
      .then((response) => response.json())
      .then((items) => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }));
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (this.props.message == "ok") {
      //this.context.router.history.push('/grid', ...this.state);
      alert("token: " + sessionStorage.getItem('token'))
      this.context.router.history.push('/to', ...this.state);
    } else {
      if (_.trim(this.props.message) != "" && this.props.message != "ok") {        
        alert(this.props.message);
      }
    }
  }

  componentDidMount() {
    //this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }

  _handleTouchTap = () => {
    //console.log(this.refs)
    //alert(this.refs["txtUser"].getValue())
    //alert(this.txtPwd.getValue())

    //ReactDOM.findDOMNode(this.refs["txtUser"]).focus()
    if (this.refs["txtUser"].getValue() == "") {
      alert("Please Enter User ID");
      this.refs["txtUser"].focus();
      return false;
    }

    if (this.txtPwd.getValue() == "") {
      alert("Please Enter Password");
      this.txtPwd.focus();
      return false;
    }
    debugger;
    this.props.login({ type: authTypes.LOGIN_REQUEST, payload: { user: this.refs["txtUser"].getValue(), password: this.txtPwd.getValue() } });
    //this.context.router.history.push('/grid');     
  }

  render() {

    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    /*
    return (      
    )
    
    {this.props.message == "ok" ? (<div style={font11}> Log on Succesfull </div>) : this.props.message}
    */

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HVS</h2>
        </div>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Paper style={paperStyle} zDepth={5} >
            <table style={{ cellSpacing: '20px' }}>
              <tbody>
                <tr>
                  <td style={font11} >User ID:</td>
                  <td style={font11}><TextField ref="txtUser" style={font11} hintText="Enter User ID" /></td>
                </tr>
                <tr>
                  <td style={font11}>Password:</td>
                  <td style={font11}><TextField type='password' ref={element => (this.txtPwd = element)} style={font11} hintText="Enter Password" /></td>
                </tr>
                <tr>
                  <td style={font11}>Application:</td>
                  <td>
                    <SelectField
                      //floatingLabelText="Application"
                      value={1}
                      onChange={this.handleChange}
                      style={{ textAlign: 'left' }}
                    >
                      <MenuItem value={1} primaryText="Case Management" />
                      <MenuItem value={2} primaryText="Budgeting" />
                      <MenuItem value={3} primaryText="InstaBooks" />
                    </SelectField>
                  </td>
                </tr>
                <tr>
                  <td><RaisedButton label="Login" primary={true} style={style} onTouchTap={() => this._handleTouchTap()} /></td>
                  <td><RaisedButton label="Register" primary={true} style={style} onTouchTap={() => this._handleTouchTap()} /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    {this.props.isLoading ? (
                      <div style={{ display: 'block' }}>
                        <span>Loading...</span> <CircularProgress />
                      </div>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </div>
      </div>

    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
};


App.defaultProps = {};


//App.propTypes = {    
//};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    //items: state.items,
    //message: state.message,
    //hasErrored: state.itemsHasErrored,
    //isLoading: state.itemsIsLoading
  };
};

/*
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (action) => dispatch(action),
  };
};
*/

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...authActions
    //...messageActions,
    //...navigationActions
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;
