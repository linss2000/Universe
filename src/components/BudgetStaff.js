import React from 'react';
import { Container, Row, Col,Table,hr } from 'reactstrap';
export default class BudgetStaff extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          width: 1024,
          overflow: "hidden", margin: "20px"
        }} >
        <div className="d-flex">
          <Row> <Col sm="12">
             <h4 className="text-default">Budget and Staff  <i className="fa fa-arrow-circle-o-down" />    </h4>
          </Col>
          </Row>
        </div>
        <hr sstyle="height:1px; color:#aaa;"/>
        <div className="d-flex">
          <Row> <Col sm="12">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
