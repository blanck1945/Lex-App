import { Movimiento, Observacion } from "../../Interfaces/Causa";

interface CausaDataProps {
  control: string;
  arrLen: number;
  arr?: any;
}

const CausaData = ({ control, arrLen, arr }: CausaDataProps) => {
  switch (control) {
    case "movimiento":
      return (
        <>
          {arr.map((movimiento: Movimiento, index: number) => {
            return arrLen === index + 1 ? (
              <div
                key={movimiento._id}
                className="causa-row is-border-b-half py-2"
              >
                <h3>{movimiento.fecha}</h3>
                <h3>{movimiento.movimiento.substr(0, 75)}</h3>
              </div>
            ) : null;
          })}
        </>
      );
    case "observacion":
      return (
        <>
          {arr.map((observacion: Observacion, index: number) => {
            return arrLen === index + 1 ? (
              <div
                key={observacion._id}
                className="causa-row is-border-b-half py-2"
              >
                <h3>{observacion.fecha}</h3>
                <h3>{observacion.observacion.substr(0, 75)}</h3>
              </div>
            ) : null;
          })}
        </>
      );
    default:
      return null;
  }
};

export default CausaData;
