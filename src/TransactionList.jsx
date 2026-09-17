const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction, i) => (
        <li key={i}>
          {transaction.studentName} - {transaction.amountPaid}
        </li>
      ))}
    </ul>
  );
};
export default TransactionList;
