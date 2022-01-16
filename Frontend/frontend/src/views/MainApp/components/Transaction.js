import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { numberWithCommas } from "../../../utils/format";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>Rs. {numberWithCommas(Math.abs(transaction.amount))}</span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
