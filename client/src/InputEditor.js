// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";


const InputEditor = ({ value, onInputChange }) => {
  const onLoad = () => {
    console.log("input editor loaded");
  };
  return (
      <AceEditor
        style={{ width: '40%', margin: 20, display: 'inline-block', height: '100px'}}
        placeholder="Input Parameters"
        mode="python"
        theme="monokai"
        name="input_editor"
        onLoad={onLoad}
        onChange={onInputChange}
        fontSize={14}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
  );
};

export default InputEditor;
