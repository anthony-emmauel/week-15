import UserCard from "./UserCard";
import StatCard from "./StatCard";

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
    </div>
  );
};

export default App;
