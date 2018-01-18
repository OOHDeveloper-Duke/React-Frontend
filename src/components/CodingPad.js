/* @flow */
import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change',newValue);
};

type Props = {
};

type State = {
};

class CodingPad extends Component<Props, State> {
  render() {
    return (
      <AceEditor
        mode="java"
        theme="monokai"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
      />
    );
  }
}

export default CodingPad;
