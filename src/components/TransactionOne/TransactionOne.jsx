import css from "./TransactionOne.module.css";

const TransactionOne = ({ id, type, amount, currency }) => {
  return (
    <tr className={css.tr} key={id}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

export default TransactionOne;
