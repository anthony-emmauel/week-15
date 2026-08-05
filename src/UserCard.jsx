const UserCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};
export default UserCard;
