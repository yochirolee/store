import { useContext, useState } from "react";
import Battery from "./Battery/battery";
import Colors from "./Colors/colors";
import Price from "./Price/price";
import Select from "./Selector/select";
import Storages from "./Storage/storages";
import { SelectedModelContext } from "../../../context/selectedModelContext";

export default function HomeRight() {
  const [state, dispatch] = useContext(SelectedModelContext);

  const handlePhoneSelect = async (e) => {
    const id = e.target.value;
    const selected = await state.iPhoneList.find(
      (phone) => phone.id === parseInt(id)
    );

    dispatch({ type: "change", payload: selected });
  };

  const handleColorChange = (id) => {
    const auxSelected = { ...state.selectedModel };
    auxSelected.data.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    dispatch({ type: "change", payload: auxSelected });
  };

  const handleStorageChange = (id) => {
    const auxSelected = { ...state.selectedModel };
    auxSelected.storage.map((item) => {
      if (item.id === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
    dispatch({ type: "change", payload: auxSelected });
  };

  return (
    <div className="flex flex-col text-center">
      <Select
        iPhoneList={state.iPhoneList}
        handlePhoneSelect={handlePhoneSelect}
      />
      <Price />
      <Battery />
      <Colors
        selectedModel={state.selectedModel}
        handleColorChange={handleColorChange}
      />
      <Storages
        selectedModel={state.selectedModel}
        handleStorageChange={handleStorageChange}
      />
    </div>
  );
}
