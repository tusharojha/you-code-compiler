// Library Imports
import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";


const CodeEditor = ({ programmingLanguage }) => {
  const [code, setCode] = useState("");
  const onLoad = () => {
    console.log("code editor loaded");
  };
  const onChange = (data) => {
    setCode(data);
  };
  return (
      <AceEditor
        style={{ height: '400px'}}
        placeholder="Code goes here"
        mode={programmingLanguage}
        theme="monokai"
        name="editor"
        onLoad={onLoad}
        onChange={onChange}
        fontSize={14}
        value={code}
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
