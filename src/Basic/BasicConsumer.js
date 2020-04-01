import React from "react";
import StyleContext from "../StyleContext";

export default function BasicConsumer() {
  return (
    <StyleContext.Consumer>
      {({ style }) => (
        <div style={style}>
          <br />
          Basic Without updation
        </div>
      )}
    </StyleContext.Consumer>
  );
}
