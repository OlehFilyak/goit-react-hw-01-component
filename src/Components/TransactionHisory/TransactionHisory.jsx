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
                <td className={`${css.tableCell} ${css.typeTransaction}`}>
                  {type}
                </td>
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
