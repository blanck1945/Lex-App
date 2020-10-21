import { useState } from "react";
import {
  CausaInterface,
  Movimiento,
  Observacion,
  Vencimiento,
} from "../../../Interfaces/Causa";
import Modal from "../Modal/Modal";

interface CausaArrProps {
  causa: CausaInterface;
  control: string;
}

const CausaArr = ({ causa, control }: CausaArrProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  switch (control) {
    case "movimiento":
      return (
        <div className=" is-align-center pl-2  is-border-t-half ">
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            label="Movimiento"
            control="movimiento"
          />
          <div className="causa-row-2 is-border-b-half my-2">
            <p className="is-bold has-text-link font-size-3">Fecha</p>
            <p className="is-bold has-text-link font-size-3">Movimiento</p>
            <p className="is-bold has-text-link font-size-3">Creado Por</p>
          </div>
          {causa.movimientos.map((el: Movimiento) => (
            <div
              className="causa-row-2 is-border-b-half my-2"
              key={el.movimiento}
            >
              <h3 className="is-bold font-size-3">{el.fecha}</h3>
              <h3 className="is-bold font-size-3">{el.movimiento}</h3>
              <h3 className="is-bold font-size-3">Creado</h3>
            </div>
          ))}
          <button
            className="button is-link px-4 mb-2 is-flex m-auto"
            onClick={() => setOpenModal(true)}
          >
            Agregar
          </button>
        </div>
      );
    case "vencimiento":
      return (
        <div className=" is-align-center   is-border-t-half  ">
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            label="Vencimiento"
            control="vencimiento"
          />
          <div className="causa-row-4  is-border-b-half my-2">
            <p className="is-bold has-text-link font-size-3 pl-2">Fecha</p>
            <p className="is-bold has-text-link font-size-3">
              Fecha de Vencimiento
            </p>
            <p className="is-bold has-text-link font-size-3">Vencimiento</p>
            <p className="is-bold has-text-link font-size-3">Estado</p>
            <p className="is-bold has-text-link font-size-3">Creado Por</p>
          </div>
          {causa.vencimientos.map((vencimiento: Vencimiento) => (
            <div
              className="causa-row-4  is-border-b-half my-2"
              key={vencimiento._id}
            >
              <h3 className="is-bold font-size-3 pl-2">{vencimiento.fecha}</h3>
              <h3 className="is-bold font-size-3">
                {vencimiento.fechaVencimiento}
              </h3>
              <h3 className="is-bold font-size-3">{vencimiento.vencimiento}</h3>
              <h3 className="is-bold font-size-3">
                {vencimiento.estado ? "Activo" : "Vencido"}
              </h3>
            </div>
          ))}
          <button
            className="button is-link px-4 mb-2 is-flex m-auto"
            onClick={() => setOpenModal(true)}
          >
            Agregar
          </button>
        </div>
      );
    case "observacion":
      return (
        <div className=" is-align-center  is-border-t-half  ">
          <Modal
            openModal={openModal}
            setOpenModal={setOpenModal}
            label="Observación"
            control="observacion"
          />
          <div className="causa-row-2  is-border-b-half mt-2">
            <p className="is-bold has-text-link font-size-3 pl-2">Fecha</p>
            <p className="has-text-link font-size-3 is-bold ">Observación</p>
            <p className="is-bold has-text-link font-size-3">Creado Por</p>
          </div>
          <div className="mb-4">
            {causa.observaciones.map((observacion: Observacion) => (
              <div
                className="causa-row-2 pb-2 is-click is-align-center  is-border-b-half  mark-row is-h-full"
                key={observacion._id}
              >
                <h3 className="is-bold pl-2 font-size-3">
                  {observacion.fecha}
                </h3>
                <h3 className="is-bold font-size-3">
                  {observacion.observacion}
                </h3>
                <h3 className="is-bold font-size-3">creado por</h3>
              </div>
            ))}
          </div>
          <button
            className="button is-link px-4 mb-2 is-flex m-auto"
            onClick={() => setOpenModal(true)}
          >
            Agregar
          </button>
        </div>
      );
  }
};

export default CausaArr;
