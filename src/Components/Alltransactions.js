import { useEffect, useState } from "react";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

export default function Alltransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function getData() {
    let response = await fetch(`${API}/transactions`);
    let apiData = await response.json();
    setTransactions(apiData);
  }

  return (
    <section className="table">
      <h2>Bank Account Total:</h2>
      <table>
        <tbody>
          {transactions.map((items, index) => {
            return (
              <Transaction key={index} transaction={items} index={index} />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
