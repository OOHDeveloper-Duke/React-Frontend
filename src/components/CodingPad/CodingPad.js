/* @flow */
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import './CodingPad.css';
import ThemeDropdown from './ThemeDropdown'
import ModeDropdown from './ModeDropdown'

class CodingPad extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      mode: "java",
      theme: "github",
      content: "",
    };
  }

  onEditorContentChange = (newValue) =>{
    this.setState({content:newValue})
  };

  onThemeChange = (event, data) =>{
    this.setState({theme:data.value})
  };

  onModeChange = (event, data) =>{
    this.setState({mode:data.value})
  };

  render() {
    return (
      <div>
        <div className="dp">
          <ThemeDropdown
            onChange={this.onThemeChange}/>
          <ModeDropdown
            onChange={this.onModeChange}/>
        </div>
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
