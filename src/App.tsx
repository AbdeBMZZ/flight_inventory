import React from "react";
import "./App.scss";
import "devextreme/dist/css/dx.light.css";
import FlightList from "./components/FlightList/FlightList";

function App() {
  return (
    <div className="App">
      <FlightList />
    </div>
  );
}

export default App;
