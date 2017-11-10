import React, { Component } from 'react';
import cadetlogo from 'images/cadetLogoCir.gif'
import cadettitle from 'images/cadetheaderlabel.png'
import 'App.css';
import { actions as headerActions } from "reducers/cdheaderreducer";
import { types as headertypes } from "reducers/cdheaderreducer";
import { Container, Row, Col ,Alert} from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import Avatar from 'material-ui/Avatar';

 class CadetHeader extends React.Component {
  constructor(props) {
   super(props);

    this.items = [];

   this.state = {
       items: [
         {
           user:'',
           img:''
         }
       ],
         locationinfo: "3201 Oak Hill Drive, Laurel, Maryland 20724"
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
  componentDidUpdate(prevProps, prevState) {
    debugger
    console.log("componentDidUpdate");
    console.log(this.state.items[0].user);
  }
   componentWillReceiveProps(nextProps) {
     debugger
    this.state.items = nextProps.headerState.items;
    
  }

  

  componentWillMount = () => {
    debugger;
  };

  
 render() {
   debugger 
   return (
     <div>
         
        <Row>
          
            
            <Col sm="11">
            <div  >
              <img src={cadetlogo} width="60" height="60"  alt="logo"   />
                <img src={cadettitle} height="60"  alt="logoTitle" className="px-3"/>
                {/*<h3 className="d-inline align-middle">Welcome to React</h3>*/}
                </div>
          </Col>
          
        </Row>
        <Row  >
          <Col>
            <div className="float-left header-label px-4" >
            {this.state.locationinfo}
            </div>
          </Col>
          <Col>
            <div className="float-right  header-label px-2" style={{fontWeight: 'bold',color:'#102027'}} >
            Welcome, {this.state.items[0].user}
            </div>
          </Col>
        </Row>
       
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
