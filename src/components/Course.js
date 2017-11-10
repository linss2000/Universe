import React, { Component } from 'react';
import CourseImg from 'images/course.PNG'

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

export default class Course extends Component {

    render() {
        return(
            <Container fluid style={{ width: 1024, overflow: "hidden", margin: "20px" }} >
                   <div className="d-flex" >
                  
                        <Row> <Col sm="12">
                            <h4 className="text-default">Course Schedule <i className="fa fa-arrow-circle-o-down" /></h4><br />
                        </Col>
                        </Row>
                    </div>
                    <Divider />
                <div style={{height : '50px'}}></div>
            <div className="d-flex">
               
                <Row> <Col sm="12">
                <Card style={{ width: '1000px'} }>
                 <CardImg
                
                style={{width:"100%",height:"100%"}}
                    src={CourseImg}                
              />
            </Card>
                </Col>

                </Row>
            </div>
            </Container>
        )
    }

}