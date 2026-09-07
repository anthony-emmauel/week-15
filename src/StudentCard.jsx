const StudentCard = (props) => {
  return (
    <div>
      <p> {props.name}</p>
      <p>{props.grade}</p>
    </div>
  );
};

export default StudentCard;
