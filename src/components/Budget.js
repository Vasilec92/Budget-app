import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Budget = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => (acc += item));
  console.log(total);
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <p className="number">{total}$</p>
    </div>
  );
};

export default Budget;
