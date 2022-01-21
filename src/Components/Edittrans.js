import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Edittrans() {
  const [transaction, setTransaction] = useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
  });
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getData() {
    let response = await fetch(`${API}/transactions/${index}`);
    let apiData = await response.json();
    setTransaction(apiData);
  }

  const handleChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/`);
      })
      .catch((c) => console.warn("catch", c));
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
        <button>
          <Link to={`/transactions/${index}`}>Back</Link>
        </button>
      </form>
    </div>
  );
}
