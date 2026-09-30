import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users123")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })

      .catch(() => {
        setEror("Something went wrong. Please try again");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
