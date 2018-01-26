/* @flow */
import React, { Component } from 'react';
import { Card, Image, Feed, Button } from 'semantic-ui-react';
import './Queue.css';

type Props = {
};

type State = {
};
class StudentQueue extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.onStudentClick = this.onStudentClick.bind(this);
    this.populate = this.populate.bind(this);
  }

  onStudentClick(event, data){
    console.log(data);
  }

  populate(){
    var arr = [];
    for(var i = 0; i < 10; i++){
      arr.push(<Card raised onClick={this.onStudentClick}>
       <Card.Content>
         <Card.Header>
          Wilson Zhang
         </Card.Header>
         <Card.Meta>
            11 mins ago
         </Card.Meta>
       </Card.Content>
      </Card>);
    }
    return arr;
  }

  render() {

    return (
      <div className="SQ">

      <Card.Group itemsPerRow={1} >
        {false &&
          <Card>
               <Button basic color='green'>Join</Button>
               <Button basic color='red' disabled={true}>Leave</Button>
          </Card>
        }

        {this.populate()}

     </Card.Group>
   </div>
    );
  }
}

export default StudentQueue;
