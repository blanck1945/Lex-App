import {
  CausaInterface,
  Vencimiento,
  Movimiento,
} from "../../Interfaces/Causa";

interface HomeDis {
  label: string;
  causas: CausaInterface[];
}

const HomeDis = ({ label, causas }: HomeDis) => {
  return (
    <div className="is-w-95p m-auto has-background-light is-h-200 my-4 is-round-4 is-flex is-dis-col is-justify-between">
      <div className="is-flex is-align-center is-justify-between px-4 is-h-100 font-size-6 is-sha-s is-bor-4 has-background-white">
        <h2>Bievenida Dra Spano</h2>
        <h2>Mis Causas</h2>
      </div>
      <div className="is-sha-s is-bor-4 has-backgorund-white">
        <div className="home-row has-background-judicial has-text-white pl-1">
          <h5 className="is-bold has-text-white">Fecha</h5>
          <h5 className="is-bold has-text-white">Numero de Causa</h5>
          <h3 className="is-bold has-text-white">Autos</h3>
          <h3 className="is-bold has-text-white">Juzgado</h3>
          <h3 className="is-bold has-text-white">Ultimo Proveido</h3>
        </div>
        {causas.map((el: CausaInterface) => (
          <div
            key={el._id}
            className="home-row is-border-b-half is-hm-35  has-background-white"
          >
            <h5 className="is-bold">{el.inicioDemanda}</h5>
            <h5 className="is-bold">{el.numCausa}</h5>
            <h3 className="is-bold ">{el.autos}</h3>
            <h3 className="is-bold">{el.juzgado}</h3>
            <h3 className="is-bold">{el.proveido}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDis;
