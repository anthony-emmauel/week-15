// StatCard accepts label and value only
const StatCard = ({ label, value }) => {
  return (
    <div>
      <p>{label}</p>
      <h5>{value}</h5>
    </div>
  );
};
export default StatCard;
