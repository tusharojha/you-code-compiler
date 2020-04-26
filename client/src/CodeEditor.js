// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";


const CodeEditor = ({ value, onCodeChange, programmingLanguage }) => {
  const onLoad = () => {
    console.log("code editor loaded");
  };
  return (
      <AceEditor
        style={{ width: '80%', height: '400px'}}
        placeholder="Code goes here"
        mode={programmingLanguage}
        theme="monokai"
        name="editor"
        onLoad={onLoad}
        onChange={onCodeChange}
        fontSize={14}
        value={value}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
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

export default CodeEditor;
