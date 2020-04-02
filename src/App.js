import React from "react";
import "./styles.css";
import Basic from "./Basic/Basic";
import Dynamic from "./Dynamic/Dynamic";
import DefaultCOnsumer from "./DefaultConsumer/DefaultProvider";
import WithContextType from './WithContextType/WithContextType';
import Multiple from './Multiple/Multiple';

export default function App() {
  return (
    <div className="App">
      <DefaultCOnsumer /> <br />
      <Basic /> <br />
      <Dynamic /> <br />
      <WithContextType /> <br />
      <Multiple />
    </div>
  );
}
