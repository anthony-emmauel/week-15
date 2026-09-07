const StudentCard = ({ name, grade }) => {
  return (
    <div>
      <p> {name}</p>
      <p>{grade}</p>
    </div>
  );
};

export default StudentCard;
