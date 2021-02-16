import React, { useState, useEffect } from "react";
import Color from "./color";

export default function Colors({ selectedModel ,handleColorChange}) {



  return (
    <div className="flex flex-row justify-around">
      {selectedModel.data.map((item) => (
        <Color
          item={item}
          key={item.id}
          handleColorChange={handleColorChange}
        />
      ))}
    </div>
  );
}
