// Library Imports
import React from "react";
import DropDown from "react-dropdown";

import "./styles.css";

const Header = ({ onChangeLanguage, value }) => {
  const options = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
  ];
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>You Code Compiler</h2>
      <p>A Simplistic open-source programming IDE</p>
      <DropDown
        onChange={onChangeLanguage}
        className="nm"
        options={options}
        value={value}
        placeholder="Select an option"
      />
    </div>
  );
};

export default Header;
