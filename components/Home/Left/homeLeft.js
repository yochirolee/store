import PhoneImage from "./phoneImage";
import React, { useContext } from "react";
import { SelectedModelContext } from "../../../context/selectedModelContext";

export default function HomeLeft() {
  const [state, dispatch] = useContext(SelectedModelContext);

  return (
    <div className="text-center aling-middle">
      <h4 className="text-2xl my-4"></h4>
      <PhoneImage selectedModel={state.selectedModel} />
    </div>
  );
}
