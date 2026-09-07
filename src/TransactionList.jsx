const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.studentName} - {transaction.amountPaid}
        </li>
      ))}
    </ul>
  );
};
export default TransactionList;
