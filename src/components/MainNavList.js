import React from 'react';
import data from '../datafiles/itemlist1.json';
import sectionitems from '../datafiles/subsections.json';
import { Collapse, Button, CardBlock, Card, CardHeader } from 'reactstrap';
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap';
import FontAwesome from 'react-fontawesome'

export default class MainNavList extends React.Component {
  constructor(props) {
   super(props);

   this.state = { collapse: true ,
      collapse2: false

   };
 }
//{/*componentWillMount()
//{
//  fetch('data')
//  .then(response==>response.json())
//  .then(data ==> {})
//}*/}

itemClick = row => {
  //debugger;
  console.log(row);
  this.props.history.push('/attribtable', { params : row });
};



  createItem = item => {
//debugger;
    var largeList = false;
    var isEven = false;
    if (item.table_group_count>9)
    {
        let largeList  = true;
    }
    else {
      let largeList = false;
    }

    let i = parseInt(parseInt(item.table_i_order)/2); //determine if even column or not

    if (parseInt(item.table_i_order)/2 == i)
    {
      let isEven = true;
    }
    else {
      let isEven = false;
    }

    if ((isEven && largeList && i != "1") || (!isEven && !largeList && i != "1"))
    {
      return (<div><div className="w-100" /><Col  tag="a" href="#"   onClick={() => {
                    this.itemClick(item);
                  }} key={item.table_i}>{item.table_i_name}
      </Col></div>);
    }
    else
    {
      return (<div><Col  tag="a" href="#"   onClick={() => {
                    this.itemClick(item);
                  }} key={item.table_i}>{item.table_i_name}
      </Col></div>);
    }

  }

  createItemList = items =>
  {
    //debugger;
    return items.map(this.createItem);
  };

  createSubGroups = sectionitems =>
  {
    return   (
      <div>
      <Row>
        <Col xs="3" sm="3" md="3">
        {sectionitems.map(this.createSubGroup)}
        </Col>
      </Row>
      </div>
    );
  };

  createSubGroup(sectionitem)
  {
     {
       //debugger;
      return (<div>
              <Card  style={{ border: '0' }}>
                <CardHeader key={sectionitem.table_group_i} style={{ padding: '1px' }}>{sectionitem.table_group_name}</CardHeader>
                  <CardBlock >
                    <Row className="row2">
                    debugger;
Helpo
                      {/*}{this.createItemList(data)}*/}
                    </Row>
                  </CardBlock>
                </Card>
              </div>
        );
    }
  };


  render()
  {
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

                  {this.createSubGroups(sectionitems)}

              </CardBlock>
              </Card>
      </Collapse>
        </Container>
      </div>
    )
  }

}
