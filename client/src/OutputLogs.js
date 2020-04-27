// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

// Project Imports
import "./styles.css";

const OutputLogs = ({ value }) => {
  const onLoad = () => {
    console.log("output editor loaded");
  };
  return (
    <AceEditor
      className="outputLogs"
      placeholder="Output Logs"
      mode="python"
      theme="monokai"
      name="outputlogs"
      onLoad={onLoad}
      fontSize={14}
      value={value}
      showPrintMargin={true}
      showGutter={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default OutputLogs;
