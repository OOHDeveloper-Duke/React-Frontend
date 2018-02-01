import React, { Component } from 'react';
import CodingPad from './CodingPad/CodingPad'
import StudentQueue from './Queue/StudentQueue'
import {Grid} from 'semantic-ui-react'

class Dashboard extends Component<Props, State>{
  render() {
    return (
      <div className="App">
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={7}>
              <div className="CodingPad">
                <CodingPad />
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
            <Grid.Column width={2}>
              <div>
                <StudentQueue />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}
export default Dashboard
