/* @flow */
import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import {Dropdown} from 'semantic-ui-react'
import 'brace/mode/java';
import 'brace/mode/python';

import 'brace/theme/monokai';
import 'brace/theme/xcode';
import 'brace/theme/github';

type Props = {
};

type State = {
};

class CodingPad extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      mode: "java",
      theme: "github",
      content: "",
    };
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
    this.onEditorContentChange = this.onEditorContentChange.bind(this);
    this.onThemeChange = this.onThemeChange.bind(this);
  }
  onEditorContentChange(newValue){
    this.setState({content:newValue})
  }

  onThemeChange(event, data){
    this.setState({theme:data.value})
  }
  render() {
    return (
      <div>
        <Dropdown
          defaultValue='xcode'
          selection
          options={this.themeOptions}
          onChange={this.onThemeChange}/>
        <AceEditor
          mode={this.state.mode}
          theme={this.state.theme}
          value={this.state.content}
          onChange={this.onEditorContentChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          height='800px'
          width='100%'
        />
      </div>
    );
  }
}

export default CodingPad;
