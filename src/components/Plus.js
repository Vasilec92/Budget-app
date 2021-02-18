import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Plus = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((t) => t > 0);
  const totalIncome = income.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="amount_item">
      <h2 className="income">Income</h2>
      <p className="number">{totalIncome}$</p>
    </div>
  );
};

export default Plus;
