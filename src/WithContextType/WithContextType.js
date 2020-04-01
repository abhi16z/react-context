import React from "react";
import StyleContext from "../StyleContext";
import ContextTypeConsumer from "./ContextTypeConsumer";

const styleDefault = {
  backgroundColor: "purple",
  borderWidth: 1,
  borderColor: "green",
  borderStyle: "solid",
  height: 50,
  width: "90%",
  color: 'white'
};


export default function App() {

  return (
    <StyleContext.Provider value={{ style: styleDefault }}>
      <ContextTypeConsumer />
    </StyleContext.Provider>
  );
}
