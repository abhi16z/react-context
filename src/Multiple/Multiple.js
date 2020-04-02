import React from 'react';
import StyleContext from "../StyleContext";
import MultipleConsumer from './MultipleConsumer';
import CountContext from './secondContext';


const styleDefault = {
  backgroundColor: "blue",
  borderWidth: 1,
  borderColor: "green",
  borderStyle: "solid",
  height: 50,
  width: "90%",
  color: 'white'
};

export default function Multiple() {
  return (
    <StyleContext.Provider value={{style: styleDefault}}>
      <CountContext.Provider value={1729}>
        <MultipleConsumer />
      </CountContext.Provider>
    </StyleContext.Provider>
  );
}