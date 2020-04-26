// Library Imports
import React, { useState } from "react";
import axios from "axios";

// Project Imports
import CodeEditor from "./CodeEditor";
import InputEditor from "./InputEditor";
import OutputLogs from "./OutputLogs";
import Header from "./Header";

const App = () => {
  // Styles
  const customButton = {
    backgroundColor: "#4CAF50" /* Green */,
    border: "none",
    color: "white",
    padding: "15px 32px",
    marginTop: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };

  // state hooks
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [outputLogs, setOutputLogs] = useState("");
  const [status, setStatus] = useState("Run");

  // run button callback
  const runCode = () => {
    setStatus("Loading...");
    axios.post("/runCode", { language, code, input }).then((res) => {
      if (res.data.memory && res.data.cpuTime) {
        setOutputLogs("");
        setOutputLogs(
          `Memory Used: ${res.data.memory} \nCPU Time: ${res.data.cpuTime} \n${res.data.output} `
        );
      } else {
        setOutputLogs(`${res.data.output} `);
      }
      setStatus("Run");
    });
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header
        value={language}
        onChangeLanguage={({ value }) => setLanguage(value)}
      />
      <CodeEditor
        value={code}
        onCodeChange={(text) => setCode(text)}
        programmingLanguage={language}
      />
      <button
        onClick={() => runCode()}
        disabled={status === "Run" ? false : true}
        style={customButton}
      >
        {status}
      </button>
      <div style={{ flexDirection: "row", width: "100%" }}>
        <InputEditor
          value={input}
          onInputChange={(text) => {console.log(text); setInput(text)}}
        />
        <OutputLogs value={outputLogs} />
      </div>
    </div>
  );
};

export default App;
