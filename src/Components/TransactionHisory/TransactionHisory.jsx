import PropTypes from "prop-types";
import css from "./TransactionHisory.module.css";
function TransactionHisory({ transactions }) {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.headlines}>
            <th className={css.theadRows}>Type</th>
            <th className={css.theadRows}>Amount</th>
            <th className={css.theadRows}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.tbodyRows}>
                <td className={`${css.tableCell} ${css.tableCell}`}>{type}</td>
                <td className={css.tableCell}>{amount}</td>
                <td className={css.tableCell}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHisory;

TransactionHisory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// TransactionHisory.propTypes = {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
// };
