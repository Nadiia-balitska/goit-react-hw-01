import css from "./TransactionHistory.module.css";
// import TransactionOne from "../TransactionOne/TransactionOne";

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
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
          // <TransactionOne
          //   id={id}
          //   type={type}
          //   amount={amount}
          //   currency={currency}
          // />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
