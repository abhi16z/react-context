import React from "react";
import StyleContext from "../StyleContext";

export default class BasicConsumer extends React.Component {
  render () {
    const styleObj = this.context;
    return (
      <div>
        <div style={styleObj.style}>
          Context type
        </div>
      </div>
    );
  }
}

BasicConsumer.contextType = StyleContext;
