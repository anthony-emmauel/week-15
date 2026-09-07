import UserCard from "./UserCard";
import StatCard from "./StatCard";
import TransactionList from "./TransactionList";
import StudentCard from "./StudentCard";

const transactions = [
  { id: 1, studentName: "Adaeze Okonkwo", amountPaid: 45000, owing: false },
  { id: 2, studentName: "Emeka Nwosu", amountPaid: 20000, owing: true },
  { id: 3, studentName: "Fatima Aliyu", amountPaid: 45000, owing: false },
  { id: 4, studentName: "Chukwudi Eze", amountPaid: 10000, owing: true },
  { id: 5, studentName: "Ngozi Obi", amountPaid: 30000, owing: true },
];

const App = () => {
  return (
    <div>
      <h1>Week 15 - React Basics</h1>
      <UserCard name="Manny anthony" email="manny@gmail.com" />
      <UserCard name="Ngozi obi" email="ngozi@gmail.com" />
      <StatCard label="Total Students" value={847} />
      <StatCard label="Total Revenue" value={4235000} />
      <StatCard label="Average Payment" value={12000} />
      <StatCard label="Pending Payments" value={134} />
      <TransactionList transactions={transactions} />
      <StudentCard name="Manny" grade="A" />
      <StudentCard name="Bex" grade="A" />
    </div>
  );
};

export default App;
