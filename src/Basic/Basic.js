import React from "react";
import StyleContext from "../StyleContext";
import BasicConsumer from "./BasicConsumer";

const styleDefault = {
  backgroundColor: "green",
  borderWidth: 1,
  borderStyle: "solid",
  height: 50,
  width: "90%",
  color: 'yellow'
};

export default function App() {
  return (
    <StyleContext.Provider value={{ style: styleDefault }}>
      <BasicConsumer />
    </StyleContext.Provider>
  );
}
