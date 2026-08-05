// StatCard accepts label and value only
const StatCard = (props) => {
  return (
    <div>
      <p>{props.label}</p>
      <h5>{props.value}</h5>
    </div>
  );
};
export default StatCard;
