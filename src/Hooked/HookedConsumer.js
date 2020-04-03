import React, { useContext } from "react";
import StyleContext from "../StyleContext";

export default function HookedConsumer() {
  const styledCon = useContext(StyleContext);
  return (
    <div style={styledCon.style}>
      <button onClick={styledCon.setStyle}>Click here to see Manipulation</button>
      <br />
      Hooked
    </div>
  );
}
