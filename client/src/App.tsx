import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimaryNavbar from "./components/PrimaryNavbar/PrimaryNavbar";
import SecondaryNavbar from "./components/SecondaryNavbar/SecondaryNavbar";
import Inputs from "./components/Input/Input";
import { Operations } from "./Types";

function App() {
  return (
    <div className="App">
      <PrimaryNavbar />
      <SecondaryNavbar />
    </div>
  );
}

export default App;
