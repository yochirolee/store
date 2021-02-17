import React, { useState } from "react";
import Battery from "./Battery/battery";
import Colors from "./Colors/colors";
import Price from "./Price/price";
import Select from "./Selector/select";
import Storages from "./Storage/storages";

export default function HomeRight({
  iPhoneList,
  selectedModel,
  handlePhoneSelect,
  handleColorChange,
}) {
  return (
    <div className="flex flex-col text-center">
      <Select iPhoneList={iPhoneList} handlePhoneSelect={handlePhoneSelect} />
      <Price />
      <Battery />
      <Colors
        selectedModel={selectedModel}
        handleColorChange={handleColorChange}
      />
      <Storages />
    </div>
  );
}
