import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Newtransaction() {
  const [transaction, setTransaction] = useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //     axios
    //       .post(`${API}/transactions`, transaction)
    //       .then(() => {
    //         navigate(`/transactions`);
    //       })
    //       .catch((c) => console.error("catch", c));
    //   };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    };

    try {
      const response = await fetch(`${API}/transactions`, settings);
      const data = await response.json();
      navigate(`/transactions`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  return (
    <div className="new-transaction">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name: </label>
        <input
          id="item_name"
          type="text"
          value={transaction.item_name}
          onChange={handleChange}
          placeholder="name..."
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleChange}
          placeholder="amount..."
          required
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleChange}
          placeholder="from..."
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleChange}
          placeholder="category..."
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
