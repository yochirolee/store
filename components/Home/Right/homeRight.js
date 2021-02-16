import React, { useState } from "react";
import Colors from "./Colors/colors";
import Select from "./Selector/select";

export default function HomeRight({
  iPhoneList,
  selectedModel,
  handlePhoneSelect,
  handleColorChange
}) {


  return (
    <div>
      <p>Home Right Component</p>
      <Select iPhoneList={iPhoneList} handlePhoneSelect={handlePhoneSelect} />
      <Colors
        selectedModel={selectedModel}
        handleColorChange={handleColorChange}
      />
    </div>
  );
}
