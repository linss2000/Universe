import React, { Component } from 'react';
import ReportsImg from 'images/reportsnew.png'

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

export default class Reports extends Component {

    render() {
        return(
            <Container fluid style={{ width: 1024, overflow: "hidden", margin: "20px" }} >
               <div style={{height : '30px'}}></div>
            <div className="d-flex">
               
                <Row> <Col sm="12">
                <Card style={{ width: '1000px'} }>
                 <CardImg
                
                style={{width:"100%",height:"100%"}}
                    src={ReportsImg}                
              />
            </Card>
                </Col>

                </Row>
            </div>
            </Container>
        )
    }

}