import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import CadetHeader from "./cadetheader";
import cadetlogo from "images/cadetlogo.png";
import cadettitle from "images/cadettitl.png";
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
  DropdownToggle,
  CardImg,
  CardSubtitle,
  CardHeader
} from "reactstrap";
import HomeComponent from "./HomeMainComponent";
import BudgetStaff from "./BudgetStaff";
import CadetsSearch from "./CadetsSearch";

import "App.css";

const FirstFunctional = props => {
  return <div onClick={() => props.showMessage("Child")}>{props.name}</div>;
};

export class ReactStrapComp extends Component {
  static propTypes = {
    //name: PropTypes.string.isRequired
  };

  showMessage(msg) {
    alert(msg);
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      collapse: false,
      status: "Closed"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {" "}
            <CadetHeader />
          </CardHeader>

          <CardBody>
            <Nav tabs className="m-0 p-0">
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  <i className="fa fa-home" /> Home
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
                  }}
                >
                  <i className="fa fa-podcast" /> Cadets
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
                  }}
                >
                  <i className="fa fa-users" /> Staff and Budget
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  <i className="fa fa-calendar" /> Course Schedule
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab === "5"
                  })}
                  onClick={() => {
                    this.toggle("5");
                  }}
                >
                  <i className="fa fa-check-circle" /> Approvals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab === "6"
                  })}
                  onClick={() => {
                    this.toggle("6");
                  }}
                >
                  <i className="fa fa-line-chart" /> Reports
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: this.state.activeTab === "7"
                  })}
                  onClick={() => {
                    this.toggle("7");
                  }}
                >
                  <i className="fa fa-cog" /> Admin
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              activeTab={this.state.activeTab}
              style={{
                height: "500px",
                width: "100%"
              }}
            >
              <div
                className="tab-content card"
                style={{
                  height: "500px",
                  overflow: "scroll"
                }}
              >
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <HomeComponent />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="11">
                      <CadetsSearch {...this.props} /> 
                    </Col>
                    <Col sm="1"></Col>
                  </Row>
                </TabPane>

                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <div className="d-flex">
                        <BudgetStaff />
                      </div>
                      <Collapse isOpen={this.state.collapse}>
                        <br />
                        <Row>
                          <Col sm="4">
                            <Card body>
                              <CardTitle>Special Title Treatment</CardTitle>
                              <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </CardText>
                              <Button>Go somewhere</Button>
                            </Card>
                          </Col>
                          <Col sm="4">
                            <Card body>
                              <CardTitle>Special Title Treatment</CardTitle>
                              <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </CardText>
                              <Button>Go somewhere</Button>
                            </Card>
                          </Col>
                          <Col sm="4">
                            <Card body>
                              <CardTitle>Special Title Treatment</CardTitle>
                              <CardText>
                                With supporting text below as a natural lead-in
                                to additional content.
                              </CardText>
                              <Button>Go somewhere</Button>
                            </Card>
                          </Col>
                        </Row>
                      </Collapse>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <Container
                        fluid
                        style={{
                          width: 1024,
                          overflow: "hidden",
                          margin: "20px"
                        }}
                      >
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12">
                              <h4 className="text-default">
                                Course Schedule{" "}
                                <i className="fa fa-arrow-circle-o-down" />{" "}
                              </h4>
                            </Col>
                          </Row>
                        </div>
                        <hr sstyle="height:1px; color:#aaa;" />
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12" />
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col sm="12">
                      <Container
                        fluid
                        style={{
                          width: 1024,
                          overflow: "hidden",
                          margin: "20px"
                        }}
                      >
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12">
                              <h4 className="text-default">
                                Approvals{" "}
                                <i className="fa fa-arrow-circle-o-down" />{" "}
                              </h4>
                            </Col>
                          </Row>
                        </div>
                        <hr sstyle="height:1px; color:#aaa;" />
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12" />
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <Row>
                    <Col sm="12">
                      <Container
                        fluid
                        style={{
                          width: 1024,
                          overflow: "hidden",
                          margin: "20px"
                        }}
                      >
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12">
                              <h4 className="text-default">
                                Reports{" "}
                                <i className="fa fa-arrow-circle-o-down" />{" "}
                              </h4>
                            </Col>
                          </Row>
                        </div>
                        <hr sstyle="height:1px; color:#aaa;" />
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12" />
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="7">
                  <Row>
                    <Col sm="12">
                      <Container
                        fluid
                        style={{
                          width: 1024,
                          overflow: "hidden",
                          margin: "20px"
                        }}
                      >
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12">
                              <h4 className="text-default">
                                Admin{" "}
                                <i className="fa fa-arrow-circle-o-down" />{" "}
                              </h4>
                            </Col>
                          </Row>
                        </div>
                        <hr sstyle="height:1px; color:#aaa;" />
                        <div className="d-flex">
                          <Row>
                            {" "}
                            <Col sm="12" />
                          </Row>
                        </div>
                      </Container>
                    </Col>
                  </Row>
                </TabPane>
              </div>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReactStrapComp);
