import React, { useState } from "react";
import StyleContext from "../StyleContext";
import HookedConsumer from "./HookedConsumer";

const styleDefault = {
  backgroundColor: "pink",
  borderWidth: 1,
  borderColor: "pink",
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
      <HookedConsumer />
    </StyleContext.Provider>
  );
}
