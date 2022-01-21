import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

export default function Alltransactions() {
  const [transactions, setTransactions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getData() {
    let response = await fetch(`${API}/transactions/type${location.search}`);
    let apiData = await response.json();
    setTransactions(apiData);
  }
  console.log(transactions);

  return (
    <section className="table">
      <h2>{transactions[0]?.item_name} Total:</h2>
      <table>
        <tbody>
          {transactions.map((items, index) => {
            return <Transaction key={index} transaction={items} />;
          })}
        </tbody>
      </table>
      <br />
      <br />
      <button className="back">
        <Link to="/transactions">All Transactions</Link>
      </button>
    </section>
  );
}
