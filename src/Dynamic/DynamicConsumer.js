import React from "react";
import StyleContext from "../StyleContext";

export default function BasicConsumer() {
  return (
    <StyleContext.Consumer>
      {({ style, setStyle }) => (
        <div style={style}>
          <button onClick={setStyle}>Click here to see Dynamic</button>
          <br />
          Dynamic
        </div>
      )}
    </StyleContext.Consumer>
  );
}
