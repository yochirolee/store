import React, { useState, createContext, useReducer } from "react";
import { iPhoneList } from "../assets/iphonesList";

const initialState = {
  iPhoneList: iPhoneList,
  selectedModel: iPhoneList[0],
};

function selectedModelReducer(state, action) {
  switch (action.type) {
    case "change": {
      return {
        ...state,
        iPhoneList: iPhoneList,
        selectedModel: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const SelectedModelContext = createContext();

export const SelectedModelProvider = (props) => {
  const [state, dispatch] = useReducer(selectedModelReducer, initialState);

  return (
    <SelectedModelContext.Provider value={[state, dispatch]}>
      {props.children}
    </SelectedModelContext.Provider>
  );
};
