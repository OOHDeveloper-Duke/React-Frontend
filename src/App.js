/* @flow */
import React, { Component } from 'react';
import './App.css';
import CodingPad from './components/CodingPad'
import StudentQueue from './components/StudentQueue'

type Props = {
};

type State = {
};

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <div className="CodingPad">
          <CodingPad />
        </div>
        <div className="StudentQueue">
          <StudentQueue />
        </div>
      </div>
    );
  }
}

export default App;
