import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="history">
      <h2>Transaction history</h2>
      <ul>
        {transactions.length > 0 &&
          transactions.map((t, idx) => (
            <li key={idx} className="list">
              <span className="amount">{t.amount}$</span>
              <span className="text">{t.text}</span>

              <button
                className="btn delate"
                onClick={() => deleteTransaction(t.id)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default History;
