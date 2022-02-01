import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let options = { month: "long", day: "numeric" };
  let newDate = new Date(transaction.date);
  newDate = newDate.toLocaleDateString("en-US", options);
  let colorAmount =
    transaction.amount > 1000
      ? "green"
      : transaction.amount < 0
      ? "red"
      : "dimgray";

  return (
    <tr>
      <td>{newDate}</td>
      <td>
        <Link
          to={`/transactions/type?name=${transaction.item_name.toLowerCase()}`}
        >
          {transaction.item_name}
        </Link>
      </td>
      <td style={{ color: colorAmount }}>
        {dollarUS.format(transaction.amount)}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>View</Link>
      </td>
    </tr>
  );
}
