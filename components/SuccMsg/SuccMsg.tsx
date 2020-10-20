interface SuccMsgProps {
  label: string;
  div_class: string;
}

const SuccMsg = ({ label, div_class }) => {
  return (
    <div className={div_class}>
      <h3>{label}</h3>
    </div>
  );
};

export default SuccMsg;
