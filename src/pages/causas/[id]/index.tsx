import Axios from "axios";
import { causaRoutes } from "../../../../api/routes";
import Header from "../../../components/Header/Header";
import CausaArr from "../../../components/CausaArr/CausaArr";
import JuzgadoInfoComp from "../../../components/JuzgadoInfoComp/JuzgadoInfoComp";
import { CausaInterface, Secretaria } from "../../../../Interfaces/Causa";
import useSWR from "swr";
import { useRouter } from "next/router";
import Causa from "../../../../models/Causa";

interface CausaIdProps {
  causa: CausaInterface;
}

const AxiosFetch = async (url: string) => {
  const { data } = await Axios.get(url);
  return data.data;
};

const CausaId = () => {
  const router = useRouter();
  const { data: causa, error } = useSWR(
    causaRoutes.causasTodas + "/" + router.query.id,
    AxiosFetch
  );

  return (
    <div className=" is-wm-80 m-auto has-background-white is-hm-500 is-bor-8 is-sha-p pb-4">
      {causa === undefined ? (
        <h3>Loading</h3>
      ) : (
        <>
          <div className="is-flex px-4 is-justify-between is-align-center">
            <div className="is-flex is-align-center ">
              <h4 className="font-size-3 is-bold has-text-link">
                Numero de Causa:
              </h4>
              <h3 className="ml-2 is-bold font-size-3">{causa.numCausa}</h3>
            </div>
            <div className="is-flex is-align-center">
              <h4 className="is-bold has-text-link font-size-3">Tramita:</h4>
              <h3 className="ml-2 is-bold font-size-3">
                Juzgado {causa.juzgado}
              </h3>
            </div>
            <div className="is-flex is-align-center">
              <h4 className="is-bold has-text-link font-size-3">Iniciado</h4>
              <h3 className="ml-2 is-bold font-size-3">
                {causa.inicioDemanda}
              </h3>
            </div>
          </div>
          <div className="is-flex is-align-center is-justify-center is-dis-col mt-4">
            <p className="font-size-4 is-bold has-text-link">Autos</p>
            <h2 className="title is-flex  is-justify-center is-bold">
              {causa.autos}
            </h2>
          </div>
          <div className="mb-4">
            <Header>Movimientos</Header>
            <CausaArr control="movimiento" causa={causa} />
            <Header>Vencimientos</Header>
            <CausaArr control="vencimiento" causa={causa} />
            <Header>Observaciones</Header>
            <CausaArr control="observacion" causa={causa} />
          </div>
          <div className="">
            <Header>
              Tramita en {causa.juzgadoId.justicia} - {causa.juzgadoId.juzgado}
            </Header>
            <div className="mt-2">
              <JuzgadoInfoComp
                label="Jurisdicción"
                data={causa.juzgadoId.jurisdiccion}
              />
              <JuzgadoInfoComp label="Fuero" data={causa.juzgadoId.fuero} />
              <JuzgadoInfoComp
                label="Justicia"
                data={causa.juzgadoId.justicia}
              />
              <JuzgadoInfoComp label="Camara" data={causa.juzgadoId.camara} />
              <JuzgadoInfoComp label="Juzgado" data={causa.juzgadoId.juzgado} />
              <JuzgadoInfoComp
                label="Telefono"
                data={causa.juzgadoId.telefono}
              />
              <JuzgadoInfoComp label="Email" data={causa.juzgadoId.email} />
              <JuzgadoInfoComp label="Juez" data={causa.juzgadoId.juez} />
            </div>
            <Header>Secretaria</Header>
            <div className="mt-2">
              <JuzgadoInfoComp
                label="Dirección"
                data={causa.juzgadoId.secretaria.map(
                  (el: Secretaria) => el.direccion
                )}
              />
              <JuzgadoInfoComp
                label="Telefono"
                data={causa.juzgadoId.secretaria.map(
                  (el: Secretaria) => el.telefono
                )}
              />
              <JuzgadoInfoComp
                label="Secretario"
                data={causa.juzgadoId.secretaria.map(
                  (el: Secretaria) => el.secretario
                )}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

/*export const getServerSideProps = async (ctx) => {
  const {
    query: { id },
  } = ctx;

  const data = await Causa.findById(id).populate("juzgadoId").exec();
  const causa = JSON.parse(JSON.stringify(data));
  return {
    props: {
      causa,
    },
  };
};*/

//causa: JSON.parse(JSON.stringify(causa)),
export default CausaId;
