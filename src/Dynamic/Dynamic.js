import React, { useState } from "react";
import StyleContext from "../StyleContext";
import BasicConsumer from "./DynamicConsumer";

const styleDefault = {
  backgroundColor: "yellow",
  borderWidth: 1,
  borderColor: "green",
  borderStyle: "solid",
  height: 50,
  width: "90%"
};

export default function App() {
  const [styleObj, setStyleObj] = useState(styleDefault);

  const handleStyleUpdate = () => {
    setStyleObj({
      ...styleObj,
      color: styleObj.color === "red" ? "black" : "red"
    });
  };
  return (
    <StyleContext.Provider value={{ style: styleObj, setStyle: handleStyleUpdate }}>
      <BasicConsumer />
    </StyleContext.Provider>
  );
}
