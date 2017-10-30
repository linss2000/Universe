import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
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
  DropdownToggle
} from "reactstrap";

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
        <FirstFunctional name="Kolli" showMessage={this.showMessage} />
        <Container
          fluid
          style={{
            width: 1024,
            overflow: "hidden",
            margin: "20px"
          }}
        >
          <Nav tabs size="md">
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                <i class="fa fa-home" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <i class="fa fa-podcast" /> Cadets and Mentors
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                <i class="fa fa-users" /> Staff and Budget
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                <i class="fa fa-calendar" /> Course Schedule
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "5" })}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                <i class="fa fa-check-circle" /> Approvals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "6" })}
                onClick={() => {
                  this.toggle("6");
                }}
              >
                <i class="fa fa-line-chart" /> Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={classnames({ active: this.state.activeTab === "7" })}
                onClick={() => {
                  this.toggle("7");
                }}
              >
                <i class="fa fa-cog" /> Admin
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      <Row>
                        <Col sm="6" className="bg-primary text-white">
                        <div>
                          With supporting text below as a natural lead-in to
                          additional content.
                          </div>
                          <div>
                          With supporting text below as a natural lead-in to
                          additional content.
                          </div>
                        </Col>
                        <Col sm="6">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Col>
                      </Row>
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <div className="d-flex">
                    <i
                      class="fa fa-caret-up fa-lg"
                      onClick={() => {
                        this.setState({ collapse: !this.state.collapse });
                      }}
                    />{" "}
                    <h5 className="text-primary">Key Indicators</h5>
                  </div>
                  <Collapse isOpen={this.state.collapse}>
                    <br/>
                    <Row>
                      <Col sm="4">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>
                            With supporting text below as a natural lead-in to
                            additional content.
                          </CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="4">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>
                            With supporting text below as a natural lead-in to
                            additional content.
                          </CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="4">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>
                            With supporting text below as a natural lead-in to
                            additional content.
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
                  <h4>Tab 4 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="5">
              <Row>
                <Col sm="12">
                  <h4>Tab 5 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="6">
              <Row>
                <Col sm="12">
                  <h4>Tab 6 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="7">
              <Row>
                <Col sm="12">
                  <h4>Tab 7 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReactStrapComp);
