import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Minus = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((t) => t < 0);
  const totalExpense = income.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="amount_item">
      <h2 className="expense">Expense</h2>
      <p className="number">{totalExpense}$</p>
    </div>
  );
};

export default Minus;
