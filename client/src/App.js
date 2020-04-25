// Library Imports
import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";


const App = () => {
  const [code, setCode] = useState("")
  const onLoad = ()=>{
    console.log("loaded")
  };
  const onChange = (data)=>{
    setCode(data)
  }
  return (
    <div>
      <AceEditor
        placeholder="Code goes here"
        mode="java"
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
    </div>
  );
};

export default App;
