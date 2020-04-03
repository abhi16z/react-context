import React, { useState } from "react";
import StyleContext from "../StyleContext";
import MultiHookedConsumer from "./MultiHookedConsumer";
import ButtonStyleContext from './ButtonStyleContext';

const styleDefault = {
  backgroundColor: "skyblue",
  borderWidth: 1,
  borderColor: "pink",
  borderStyle: "solid",
  height: 50,
  width: "90%"
};

const ButtonStyleDef = {
  backgroundColor: 'blue',
  color: 'white',
  outline: 'none'
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
      <ButtonStyleContext.Provider value={{buttonStyle: ButtonStyleDef}}>
        <MultiHookedConsumer />
      </ButtonStyleContext.Provider>
    </StyleContext.Provider>
  );
}
