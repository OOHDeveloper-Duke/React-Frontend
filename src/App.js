/* @flow */
import React, { Component } from 'react';
import './App.css';
import CodingPad from './components/CodingPad'
import StudentQueue from './components/StudentQueue'
import {Grid} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

type Props = {
};

type State = {
};

class App extends Component<Props, State> {
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
              <div className="StudentQueue">
                <StudentQueue />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </div>
    );
  }
}

export default App;
