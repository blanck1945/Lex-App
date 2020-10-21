import React, { useContext } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import {
  CausaInterface,
  Movimiento,
  Vencimiento,
  Observacion,
} from "../../../Interfaces/Causa";
import { useRouter } from "next/router";
import GlobalContext from "../../../context/globalContext";
import JuzgadoData from "./JuzgadoData";
import CausaData from "./CausaData";

interface CausaProps {
  causa: CausaInterface;
}

const CausaComp = ({ causa }: CausaProps) => {
  const router = useRouter();

  const { globalState } = useContext(GlobalContext);

  const setSingleCausa = (id: string) => {
    globalState.setGlobalVar(id);

    router.push("causas" + "/" + id);
  };

  return (
    <div className="ml-4 is-wm-full ">
      <Tippy
        className="is-w-400"
        content={<JuzgadoData juzgado={causa.juzgadoId} />}
      >
        <header className="header mb-2 is-bor-4 is-sha-s is-click is-h-75 is-flex is-col is-align-center is-justify-center font-size-3">
          <p className="is-bold ">{causa.autos}</p>
          <p className="is-bold">Juzgado: {causa.juzgado}</p>
        </header>
      </Tippy>
      <div className="px-4 pt-2 is-hm-300 has-background-white  is-bor-4 mb-2 is-sha-s ">
        <div className="is-hm-100">
          <div className="is-hm-35 is-flex is-align-center is-border-b-half py-2">
            <h4 className="is-bold">Numero de Causa: </h4>
            <h4 className="ml-2 is-bold has-text-info ">{causa.numCausa}</h4>
          </div>
          <div className="is-hm-35 mt-2">
            <h4 className="is-bold">Ultimo Movimieto</h4>
            <CausaData
              control="movimiento"
              arr={causa.movimientos}
              arrLen={causa.movimientos.length}
            />
          </div>
          <div className="mt-2 is-hm-35">
            <h4 className="is-bold">Observaciones</h4>
            <CausaData
              control={"observacion"}
              arr={causa.observaciones}
              arrLen={causa.observaciones.length}
            />
          </div>
          <div className="mt-2 is-hm-35">
            <h4 className="is-bold">Proximo Vencimiento</h4>
            {causa.vencimientos.map((el: Vencimiento) => (
              <div key={el._id} className="causa-row-3 is-border-b-half py-2">
                <h3>{el.fecha}</h3>
                <h3>{el.fechaVencimiento}</h3>
                <h3>{el.vencimiento.substr(0, 100)}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" is-flex is-h-50 has-text-white has-background-white is-sha-s is-bor-4 mb-4">
        <a
          href="#"
          className="card-footer-item has-text-judicial"
          onClick={() => setSingleCausa(causa._id)}
        >
          Ver
        </a>
        <a href="#" className="card-footer-item has-text-judicial">
          Editar
        </a>
        <a href="#" className="card-footer-item has-text-judicial">
          Borrar
        </a>
      </div>
    </div>
  );
};

export default CausaComp;
