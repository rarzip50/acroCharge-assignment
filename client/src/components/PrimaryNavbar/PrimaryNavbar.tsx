// import useState next to FunctionComponent
import React, { FunctionComponent, useState } from "react";
import "../../styles/Navbar.css";

const PrimaryNavbar: FunctionComponent<{ initial?: number }> = ({
  initial = 0,
}) => {
  const [clicks, setClicks] = useState(initial);
  return (
    <div className="navbar">
      <a href="/home">Transactions</a>
      <a href="/about">Customers</a>
    </div>
  );
};

export default PrimaryNavbar;
