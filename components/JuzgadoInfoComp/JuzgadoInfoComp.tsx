interface JuzgadoInfoCompProps {
  label: string;
  data: string;
}

const JuzgadoInfoComp = ({ label, data }) => {
  return (
    <div className="is-wm-65 m-auto is-align-center my-2 data-row pb-2 is-border-b-half pl-2">
      <h4 className="is-bold has-text-info font-size-3">{label}:</h4>
      <h3 className="is-bold font-size-3">{data}</h3>
    </div>
  );
};

export default JuzgadoInfoComp;
