import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'
import brace from 'brace';

import 'brace/mode/java';
import 'brace/mode/python';

class ModeDropdown extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.modeOptions = [
      {
        text: 'java',
        value: 'java',
      },
      {
        text: 'python',
        value: 'python',
      },
    ]
  };


  render(){
    return(
      <div className="Mode">
        <Dropdown fluid
          defaultValue='java'
          selection
          options={this.modeOptions}
          onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default ModeDropdown;
