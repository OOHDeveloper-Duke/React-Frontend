/* @flow */
import React, { Component } from 'react';
import { Card, Image,Feed } from 'semantic-ui-react';
type Props = {
};

type State = {
};
class StudentQueue extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.onStudentClick = this.onStudentClick.bind(this);
  }

  onStudentClick(event, data){
    console.log(data);
  }

  render() {
    return (
      <Card.Group itemsPerRow={1}>
       <Card raised onClick={this.onStudentClick}>
        <Card.Content>
          <Card.Header>
           Wilson Zhang
          </Card.Header>
          <Card.Meta>
             11 mins ago
          </Card.Meta>
        </Card.Content>
       </Card>
       <Card raised onClick={this.onStudentClick}>
        <Card.Content>
          <Card.Header>
           Wilson Zhang
          </Card.Header>
          <Card.Meta>
             11 mins ago
          </Card.Meta>
        </Card.Content>
       </Card>

     </Card.Group>
    );
  }
}

export default StudentQueue;
