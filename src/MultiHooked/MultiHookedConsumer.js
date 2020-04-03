import React, { useContext } from "react";
import StyleContext from "../StyleContext";
import ButtonStyleContext from './ButtonStyleContext';

export default function MultiHookedConsumer() {
  const styledCon = useContext(StyleContext);
  const buttonStyleCon = useContext(ButtonStyleContext);

  return (
    <div style={styledCon.style}>
      <button onClick={styledCon.setStyle} style={buttonStyleCon.buttonStyle}>Click here to see hooked</button>
      <br />
        Button and Bg both hooked context
    </div>
  );
}
