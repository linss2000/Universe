import React, { Component } from 'react';
import Staffandbdgt from 'images/Staffandbdgt.PNG'
import RaisedButton from "material-ui/RaisedButton";
import {
    Container,
    TabContent,
    TabPane,
    Card,
    Table,
    Collapse,
    CardBody,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    CardImg
    
} from "reactstrap";
import Divider from 'material-ui/Divider';

export default class ApprovalsTab extends Component {

    render() {
        return(
                <Container fluid >
                {/* <div style={{height : '50px'}}></div> */}
            <div  >
                           
                 <CardImg
                
                style={{width:"100%",height:"60%"}}
                    src={Staffandbdgt}                
              />

             
                
                <Row>
                 <Col sm="8">
                 </Col>
                 
                <Col sm="4" style={{justifyContent:"right", alignItems: 'right'}}>

               
                <a 
                                                                 href={"http://hvs.selfip.net:3003/cadetexcel"}
                                                                 download={"test.xlsx"}
                                                                 > <RaisedButton style={{justifyContent:"right"}} label="Standard Budget/Accounting Report" primary={true}/></a>
                                                                
                
                 </Col>

                </Row>
            
            </div>
            </Container>
        )
    }

}