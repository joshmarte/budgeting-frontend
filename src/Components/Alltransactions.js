import { useEffect, useState } from "react";
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;

export default function Alltransactions() {
  const [transactions, setTransactions] = useState([]);

  let totalAmount = 0;
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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

  for (let item of transactions) {
    // console.log(typeof item.amount);
    totalAmount += item.amount;
    // console.log(item.amount);
  }

  let colorAmount =
    totalAmount > 1000 ? "green" : totalAmount < 0 ? "red" : "dimgray";

  return (
    <section className="table">
      <h2 style={{ color: colorAmount }}>
        Bank Account Total: {dollarUS.format(totalAmount)}
      </h2>
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
