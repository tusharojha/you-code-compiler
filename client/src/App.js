// Library Imports
import React, { useState } from "react";
import axios from "axios";

// Project Imports
import CodeEditor from "./CodeEditor";
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

  // run button callback
  const runCode = () => {
    axios.post("/runCode", {language, code}).then((res)=>console.log(res))
  };
  

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header
        value={language}
        onChangeLanguage={({ value }) => setLanguage(value)}
      />
      <CodeEditor value={code} onCodeChange={(text)=>setCode(text)} programmingLanguage={language} />
      <button onClick={() => runCode()} style={customButton}>
        Run
      </button>
    </div>
  );
};

export default App;
