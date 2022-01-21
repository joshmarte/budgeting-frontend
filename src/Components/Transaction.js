import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let options = { month: "long", day: "numeric" };
  let newDate = new Date(transaction.date);
  newDate = newDate.toLocaleDateString("en-US", options);

  return (
    <tr>
      <td>{newDate}</td>
      <td>
        <Link to={`/transactions/type/${transaction.item_name.toLowerCase()}`}>
          {transaction.item_name}
        </Link>
      </td>
      <td>{dollarUS.format(transaction.amount)}</td>
      <td>
        <Link to={`/transactions/${index}`}>Edit</Link>
      </td>
    </tr>
  );
}
