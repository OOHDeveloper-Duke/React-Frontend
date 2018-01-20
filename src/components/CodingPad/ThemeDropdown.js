import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'
import brace from 'brace';

import 'brace/theme/monokai';
import 'brace/theme/xcode';
import 'brace/theme/github';

class ThemeDropdown extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.themeOptions = [
      {
        text: 'xcode',
        value: 'xcode',
      },
      {
        text: 'monokai',
        value: 'monokai',
      },
      {
        text: 'github',
        value: 'github',
      }
    ]
  };


  render(){
    return(
        <div className="Theme">
          <Dropdown fluid
            defaultValue='xcode'
            selection
            options={this.themeOptions}
            onChange={this.props.onChange}/>
        </div>
    );
  }
}

export default ThemeDropdown;
