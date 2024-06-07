import css from "./TransactionHistory.module.css";
import TransactionOne from "../TransactionOne/TransactionOne";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <TransactionOne type={type} amount={amount} currency={currency} />
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
