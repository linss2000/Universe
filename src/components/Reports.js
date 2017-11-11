import React, { Component } from 'react';
import reportDashboard from 'images/reportsDashboard.png'
import reportsLibrary from 'images/reportsLibrary.png'
import reportsAdHoc from 'images/reportsAdHoc.png'

import {
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Collapse,
    CardBody,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    Label,
    CardImg
} from "reactstrap";
import Divider from 'material-ui/Divider';
import classnames from "classnames";
const tabStyles = {
    backgroundColor: '#1b3039'

}
export default class Reports extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: "1"

        };
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    render() {
        return (
            <div>
                <Container
                    fluid
                    style={{
                        overflow: "hidden",
                        marginTop: "20px",
                        marginLeft: "-10px",
                        marginRight: "20px",  
                    }}
                    >
                    <Nav tabs className="m-0 p-0">

                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "1"
                                })}
                                onClick={() => {
                                    this.toggle("1");
                                } }
                                >
                                Dashboard
                </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "2"
                                })}
                                onClick={() => {
                                    this.toggle("2");
                                } }
                                >
                                Report Library
                </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                    active: this.state.activeTab === "3"
                                })}
                                onClick={() => {
                                    this.toggle("3");
                                } }
                                >
                                Ad Hoc Reports
                </NavLink>
                        </NavItem>

                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row className="">
                                <Col sm="12">
                                <br/>
                                    <CardImg style={{ width: "100%", height: "100%" }} src={reportDashboard} />
                                </Col>
                            </Row>

                        </TabPane>
                        <TabPane tabId="2">
                                <br/>
                        
                        <Row>
                    <span className="header-label" style={{ marginLeft:'20px' }}>
             The Reports library, provides real time report date in on Excel format.<br/>
Click on a report to export the report date to Excel.
            </span>
                        </Row>
                                <br/>
                        
                            <Row>
                                <Col sm="12">
                                    <CardImg style={{ width: "100%", height: "100%" }} src={reportsLibrary} />

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                        <Row>
                    <span className="header-label" style={{ marginLeft:'20px' }}>
                                <br/>
                    
             Ad Hoc reports allows user to create their own reports by selecting fields and defining filter criteria.<br/>
Select the fields and criteria for your report and click on a report to export the report date to Excel.
            </span>
                        </Row>
                                <br/>
                        
                            <Row>
                                <Col sm="12">
                                    <CardImg style={{ width: "100%", height: "100%" }} src={reportsAdHoc} />

                                </Col>
                            </Row>

                        </TabPane>
                    </TabContent>

                </Container>
            </div>

        )
    }

}