import React, { Component } from 'react';
import { connect } from 'react-redux';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { bindActionCreators } from "redux";

import { actions as cadetDetailsActions } from "reducers/cadetdetailsreducer";
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
    DropdownToggle
} from "reactstrap";

class HomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notifycollapse: true,
            indicatorscollapse : true

        };
    }

    renderList(){
        return this.props.notificationState.map((notification,index) => {
            return(
                <tr key={index} >
                   <td><b>{notification.total_ntf_cnt}</b></td>
                   <td>{notification.notify_type}</td>
                   <td>{notification.notify_message}</td>
                   <td ><a href="">{notification.nofity_details}</a></td>
                   </tr>
            )
        });
    }

    render() {
        return (
            <Container fluid  style={{width: 1024,overflow: "hidden", margin: "20px"}} >
                <div className="d-flex">
                    <Row> <Col sm="12">
                  <h4 className="text-default">Home  <i className="fa fa-arrow-circle-o-down" />    </h4>
                  <h5 className="text-primary">Welcome to the CGYCA Solution. </h5>
                   <span className="text-default">The CGYCA Solution is an all-in-one system that tracks cadets, courses and budget information.<br />
                   This home page gives you quick access notifications and key metrics, and provides you with the quick links to 
                   core functions of the system.
                   </span>
               
                   </Col>
                   </Row>
                </div>
                <Divider />
                <div>
                    <Row>
                        <Col>
                        <div>
                        <i className="fa fa-caret-down fa-lg"  onClick={() => {
                                            this.setState({ notifycollapse: !this.state.notifycollapse }); }} />
                        <span className="text-default"> Notifications </span>
                        <Badge  badgeContent={10}
                                primary={true} badgeStyle={{ top: '50%', right: 20 }}>
                                <IconButton tooltip="Notifications" onClick={() => {
                                            this.setState({ notifycollapse: !this.state.notifycollapse });
                                        }}>
                                            <NotificationsIcon />                                         
                                        </IconButton>
                                    </Badge>
                                    
                            </div>
                            <Divider />
                            <Collapse isOpen={this.state.notifycollapse}>
                            {/* <Card body>
                                <CardTitle>                                   
                                </CardTitle>
                                <CardText>         
                                                               */}
                                <br />                              
                                <Table bordered striped hover size="sm" className="border-bottom-0"> 
                                    <tbody>                               
                                    {this.renderList()}                                  
                                    </tbody>
                                </Table>
                                {/* </CardText>

                            </Card> */}
                            </Collapse>
                        </Col>
                    </Row>
                    <br/> 
                    <Row>
                        <Col>
                        <div>
                        <i className="fa fa-caret-down fa-lg"  onClick={() => {
                                            this.setState({ indicatorscollapse : !this.state.indicatorscollapse }); }} />
                        <span className="text-default"> Key Indicators</span>
                        <Divider />
                        </div>
                        <Collapse isOpen={this.state.indicatorscollapse}>
                        <a href=""><i>View Reporting Dashboard...</i></a>
                        <Table bordered striped hover size="sm" className="border-bottom-0"> 
                                    <tbody>                               
                                    {this.renderList()}                                  
                                    </tbody>
                                </Table>
                            {/* <Card body>
                                <CardTitle>                                   
                                </CardTitle>
                                <CardText>                                    */}
                              
                                {/* </CardText>

                            </Card> */}
                            </Collapse>
                        </Col>

                        </Row>
                </div>

                <div>

                </div>
            </Container>
        )
    };
}

const mapStateToProps = state => {
    return {
        notificationState : state.notificationState
    };
  };

  const mapDispatchToProps = {};

  export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent);