// import useState next to FunctionComponent
import React, { FunctionComponent, useState } from "react";
import "../../styles/SecondaryNavbar.css";
import Inputs from "../Input/Input";
import { Operations } from "../../Types";

const SecondaryNavbar: FunctionComponent<{ initial?: number }> = ({
  initial = 0,
}) => {
  const [clicks, setClicks] = useState(initial);
  //Default operation is ADD
  const [operation, setOperation] = useState(Operations.ADD);

  return (
    <>
      <div className="secondaryNavbar">
        <button
          onClick={() => {
            setOperation(Operations.ADD);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setOperation(Operations.GET);
          }}
        >
          Get
        </button>
        <button
          onClick={() => {
            setOperation(Operations.UPDATE);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            setOperation(Operations.DELETE);
          }}
        >
          Delete
        </button>
      </div>
      <Inputs operation={operation} />
      {operation}
    </>
  );
};

export default SecondaryNavbar;
