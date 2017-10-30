import React from 'react';
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import { Collapse, Button, CardBlock, Card, CardHeader } from 'reactstrap';
import { connect } from "react-redux";

export default class ListItems extends React.Component {
  constructor(props) {
   super(props);
   this.toggle = this.toggle.bind(this);
   this.toggle2 = this.toggle2.bind(this);
   this.state = { collapse: true ,
      collapse2: false

   };
 }
 toggle() {
     this.setState({ collapse: !this.state.collapse });
   }
   toggle2() {
       this.setState({ collapse2: !this.state.collapse2 });
     }
   itemClick = row => {
     debugger;
     console.log(row);
     this.props.history.push('/attribtable', { params : {hv_table_i:row} });

   };
  render() {
    return (
      <div>

      <Container  fluid  className="m-4">

          <Row className="row1">
            <Col>
              <h4>System Administration</h4>
              <span className="subheader-label">Field Maintenance</span> <FontAwesome name="caret-right" onClick={this.toggle} className="px-1" size="2x"/>
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapse}>
            <Card style={{ border: '0' }} >
              <CardBlock className="card-style">
                {/*First Row */}
                  <Row>
                    <Col xs="6" sm="6" md="6">
                      <Card  style={{ border: '0' }}>
                      <CardHeader style={{ padding: '1px' }}>Site or State Specific</CardHeader>
                      <CardBlock >
                        <Row className="row2">
                          {/*First Row First Column*/}
                          <Col  tag="a" href="#"   onClick={() => {
                                this.itemClick("1");
                              }}>Site Setup
                          </Col>
                          <Col tag="a" href="#"onClick={() => {
                                this.itemClick("2");
                              }}>Company
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Class Setup
                          </Col>
                          <Col tag="a" href="#">Platoon
                          </Col>


                        <div className="w-100" />
                        <Col tag="a" href="#">State Listing
                        </Col>
                        <Col tag="a" href="#">Squad
                        </Col>
                        <div className="w-100" />
                        <Col tag="a" href="#">Schools
                        </Col>
                        <Col tag="a" href="#">Teams
                        </Col>
                        <div className="w-100" />
                        <Col tag="a" href="#">School Districts
                        </Col>
                        <Col tag="a" href="#">Buildings
                        </Col>
                        <div className="w-100" />
                        <Col tag="a" href="#">Legislators
                        </Col>
                        <Col tag="a" href="#">Room
                        </Col>
                        <div className="w-100" />
                        <Col tag="a" href="#">Zip Code Listing
                        </Col>
                        <Col tag="a" href="#">
                        </Col>
                        </Row>
                      </CardBlock>
                      </Card>
                    </Col>
                      {/*First Row Second Column*/}
                    <Col>
                      <Card  style={{ border: '0' }}>
                        <CardHeader style={{ padding: '1px' }}>Staff Member Fields</CardHeader>
                          <CardBlock >
                            <Row className="row2">

                              <Col  tag="a" href="#">Staff Department
                              </Col>
                                <div className="w-100" />
                              <Col tag="a" href="#">Staff Employment Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Position Codes
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Staff Training Status
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Staff Training Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Military Affiliation
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Military Status
                              </Col>
                            </Row>
                          </CardBlock>
                        </Card>
                      </Col>
                        {/*First Row Third Column*/}
                      <Col>
                        <Card  style={{ border: '0' }}>
                          <CardHeader style={{ padding: '1px' }}>People / Organization Fields</CardHeader>
                            <CardBlock >
                              <Row className="row2">

                                <Col  tag="a" href="#">Staff Department
                                </Col>
                                  <div className="w-100" />
                                <Col tag="a" href="#">Marital Status
                                </Col>
                                <div className="w-100" />
                                <Col tag="a" href="#">Personal Relationship
                                </Col>
                                <div className="w-100" />
                                <Col tag="a" href="#">Census Race
                                </Col>
                                <div className="w-100" />
                                <Col tag="a" href="#">Salutation
                                </Col>
                                <div className="w-100" />
                                <Col tag="a" href="#">Generation Qualifier
                                </Col>
                                <div className="w-100" />
                                <Col tag="a" href="#">Phone Types
                                </Col>


                              </Row>
                            </CardBlock>
                          </Card>
                        </Col>
                  </Row>
                    {/*SEcond Row*/}
                  <Row className="row1">
                    {/*SEcond Row First Column 3/12*/}
                    <Col xs="3" sm="3" md="3">
                      <Card  style={{ border: '0' }}>
                      <CardHeader style={{ padding: '1px' }}>Cadet Characteristics</CardHeader>
                      <CardBlock >
                        <Row className="row2">

                          <Col  tag="a" href="#">Eye Color
                          </Col>
                            <div className="w-100" />
                          <Col tag="a" href="#">Hair Color
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Custody Arrangements
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Guardian Custody Type
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Family Income Bracket
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">National School Lunch Eligibility
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Referral Source
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Allergy Type
                          </Col>
                          <div className="w-100" />
                          <Col tag="a" href="#">Insurance Type
                          </Col>

                        </Row>
                      </CardBlock>
                      </Card>
                    </Col>
                    {/*SEcond Row Second Column 3/12*/}
                    <Col>
                      <Card  style={{ border: '0' }}>
                        <CardHeader style={{ padding: '1px' }}>Cadet Testing </CardHeader>
                          <CardBlock >
                            <Row className="row2">

                              <Col  tag="a" href="#">Medical Restriction Type
                              </Col>
                                <div className="w-100" />
                              <Col tag="a" href="#">Risk Factor
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Immunization Type
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Drug Abuse
                              </Col>


                            </Row>
                          </CardBlock>
                        </Card>
                      </Col>
                        {/*SEcond Row Third Column 3/12*/}
                      <Col>
                        <Card  style={{ border: '0' }}>
                          <CardHeader style={{ padding: '1px' }}>Miscellaneous</CardHeader>
                            <CardBlock >
                              <Row className="row2">

                              <Col  tag="a" href="#">General Note Topic
                              </Col>
                                <div className="w-100" />
                              <Col tag="a" href="#">School Contact Title
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">School Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Sick Call Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Risk Factor Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Legislator Types
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Interview Locations
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Occupation
                              </Col>
                              <div className="w-100" />
                              <Col tag="a" href="#">Mentor Appt. Types
                              </Col>


                              </Row>
                            </CardBlock>
                          </Card>
                        </Col>
                          {/*SEcond Row Fourth Column 3/12*/}
                        <Col>
                          <Card  style={{ border: '0' }}>
                            <CardHeader style={{ padding: '1px' }}>Program Function</CardHeader>
                              <CardBlock >
                                <Row className="row2">

                                  <Col  tag="a" href="#">Class Phase
                                  </Col>
                                  <div className="w-100" />
                                  <Col tag="a" href="#">Person Types
                                  </Col>
                                  <div className="w-100" />
                                  <Col tag="a" href="#">Termination Reasons
                                  </Col>
                                  <div className="w-100" />
                                  <Col tag="a" href="#">Mentor Status
                                  </Col>


                                </Row>
                              </CardBlock>
                            </Card>
                          </Col>
                  </Row>
                </CardBlock>
              </Card>
          </Collapse>
          <Row className="row1">
            <Col>
              <span className="subheader-label">Security</span><FontAwesome name="caret-right" onClick={this.toggle2} className="px-1" size="2x"/>
            </Col>
          </Row>
          <Collapse isOpen={this.state.collapse2}>
            <Card style={{ border: '0' }}>
              <CardBlock>

              {/*Second Section First Row*/}
                  <Row className="row1">
                    {/*SEcond Row First Column 3/12*/}
                    <Col xs="3" sm="3" md="3">
                      <Card  style={{ border: '0' }}>
                      <CardHeader style={{ padding: '1px' }}>Security Functions</CardHeader>
                      <CardBlock >
                        <Row className="row2">

                          <Col  tag="a" href="#">Create and Manage Users
                          </Col>
                            <div className="w-100" />
                          <Col tag="a" href="#">Create and Manage Roles
                          </Col>
                        </Row>
                      </CardBlock>
                      </Card>
                    </Col>

                  </Row>
                </CardBlock>
              </Card>
          </Collapse>


      </Container>
      </div>
    );
  }
}
