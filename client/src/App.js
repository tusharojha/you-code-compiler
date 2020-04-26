// Library Imports
import React, { useState } from "react";

// Project Imports
import CodeEditor from "./CodeEditor";
import Header from "./Header";

const App = () => {
  const [language, setLanguage] = useState("java");

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header value={language} onChangeLanguage={({ value }) => setLanguage(value)} />
      <CodeEditor programmingLanguage={language} />
    </div>
  );
};

export default App;
