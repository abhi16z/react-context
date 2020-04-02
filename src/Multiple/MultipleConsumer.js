import React from "react";
import StyleContext from "../StyleContext";
import CountContext from "./secondContext";

export default function MultipleConsumer() {
  return (
    <StyleContext.Consumer>
      {({ style }) => (
        <CountContext.Consumer>
          {count => (
            <div style={style}>
              <div>Multiple Consuler</div>
              <div>Count is {count}</div>
            </div>
          )}
        </CountContext.Consumer>
      )}
    </StyleContext.Consumer>
  );
}
