// import useState next to FunctionComponent
import React, { FunctionComponent, useState, useEffect } from "react";
import "../../styles/Navbar.css";
import { Operations, Transaction } from "../../Types";

const PrimaryNavbar: FunctionComponent<{ operation: Operations }> = ({
  operation,
}) => {
  const [addOperationData, setAddOperationData] = useState<
    Partial<Transaction> | undefined
  >(undefined);
  useEffect(() => {
    setAddOperationData(undefined);
    console.log("rendered and state is: " + JSON.stringify(addOperationData));
  }, [operation]);

  const submitTransaction = () => {
    console.log({ addOperationData });
    //axios with addOperations
  };

  return (
    <div className="inputs">
      {operation === Operations.ADD || operation === Operations.UPDATE ? (
        <>
          <input
            // value={addOperationData?.fromId}
            onChange={(e) =>
              setAddOperationData({
                ...addOperationData,
                fromId: e.target.value,
              })
            }
            placeholder="From"
          ></input>
          <input
            onChange={(e) =>
              setAddOperationData({ ...addOperationData, toId: e.target.value })
            }
            placeholder="To"
          ></input>
          <input
            onChange={(e) =>
              setAddOperationData({
                ...addOperationData,
                amount: Number(e.target.value),
              })
            }
            placeholder="Amount"
          ></input>
        </>
      ) : undefined}
      {operation === Operations.UPDATE || operation === Operations.DELETE ? (
        <input
          onChange={(e) =>
            setAddOperationData({
              ...addOperationData,
              id: Number(e.target.value),
            })
          }
          placeholder="Id"
        ></input>
      ) : undefined}
      <button onClick={() => submitTransaction()}>Submit</button>
    </div>
  );
};

export default PrimaryNavbar;
