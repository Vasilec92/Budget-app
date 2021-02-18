import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [transaction, setTransaction] = useState({});
  const handleChange = (e) => {
    const values = { ...transaction };
    values[e.target.name] = e.target.value;
    setTransaction(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: uuidv4(),
      text: transaction.text,
      amount: transaction.amount * 1,
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
    setTransaction({ ...transaction, text: "", amount: "" });
  };
  return (
    <div>
      <h2>Add transaction</h2>
      <form onSubmit={onSubmit} className="add">
        <div>
          <input
            className="inputNumber"
            value={transaction.amount}
            id="amount"
            type="number"
            name="amount"
            placeholder="$"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            className="inputText"
            value={transaction.text}
            id="text"
            name="text"
            placeholder="text"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;
