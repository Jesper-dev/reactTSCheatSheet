import React from "react";
import { Usereducer } from "./hooks/Usereducer";
import Classcomps from "./customcomponents/Classcomps";

function App() {
  return (
    <div className="App">
      <h1>React and TS Cheat Sheet</h1>
      {/* <Usereducer /> */}
      <Classcomps message="Jesper" />
    </div>
  );
}

export default App;
