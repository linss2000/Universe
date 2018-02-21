
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import { Collapse, Button, CardBlock, Card, CardHeader } from 'reactstrap';
import { connect } from "react-redux";

export default class AdminStateList extends React.Component {
  constructor(props) {
   super(props);

 }
 itemClick = row => {
     //debugger;
     console.log(row);
     this.props.history.push('/attribtable', { params : {hv_table_i:row} });

   };
render()
{

  return(
    <div>
    <Card  style={{ border: '0' }}>
                          <CardHeader style={{ padding: '1px' }}>Academic or State Specific</CardHeader>
                          <CardBlock >
                            <Row className="row2">
                              {/*First Row First Column*/}
                              <Col  tag="a" href="#"   onClick={() => {
                                    this.itemClick("1");
                                  }}>Site Setup
                              </Col>
                              <Col tag="a" href="#">Company
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
                          </div>

  )
}


}
