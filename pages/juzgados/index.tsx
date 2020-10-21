import ReactFormControl from "../../formControl/form/ReactFormControl";
import {
  juzgadoFields,
  juzgadoInitialValues,
} from "../../formControl/form/Forms/JuzgadoForm/juzgadoInputs";
import Axios from "axios";
import { juzgadoRoutes, prefix, rootURL } from "../../api/routes";
import { useEffect, useState } from "react";
import {
  addData,
  formatData,
} from "../../formControl/form/Forms/JuzgadoForm/formFunc";
import { JuzgadoData, Secretaria } from "../../Interfaces/Causa";
import { GetServerSideProps, GetStaticProps } from "next";
import ValidationUser from "../../components/validatationUser/ValidationUser";
import Juzgado from "../../models/Juzgado";

interface JuzgadosProps {
  juzgados?: any;
}

const Juzgados = ({ juzgados }: JuzgadosProps) => {
  const [succMsg, setSuccMsg] = useState<boolean>(false);
  const [jusDis, setJusDis] = useState<string>("Ver Todos");

  useEffect(() => {
    return () => {
      setSuccMsg(false);
    };
  }, []);

  const handlerJuzgadoForm = async (values: any) => {
    try {
      const returnData = addData(values);
      console.log(returnData);
      await Axios({
        method: "POST",
        url: juzgadoRoutes.juzgadoTodos,
        data: formatData(returnData),
      });

      setSuccMsg(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="is-w-full has-background-light  pl-2 is-flex is-justify-center is-dis-col is-align-center">
      <div className="is-wm-25 is-sha-s ml-4 is-h-100 my-4 has-background-white has-text-black is-flex is-align-center is-justify-center is-bor-8 ">
        <span className="button is-link" onClick={() => setJusDis("Ver Todos")}>
          Ver Juzgados
        </span>
        <span
          onClick={() => setJusDis("Agregar")}
          className="ml-4 button is-link"
        >
          Agregar Juzgado
        </span>
      </div>
      <div className="is-w-full has-background-light  pl-2 is-flex is-justify-center is-dis-col is-align-center">
        {jusDis === "Ver Todos" ? (
          <div className="is-flex is-w-95p is-dis-col mt-2 has-background-white  is-sha-p is-bor-4 ">
            <div className=" juz-row-6 pl-2  has-background-judicial">
              <h3 className="is-bold has-text-white">Fuero</h3>
              <h3 className="is-bold has-text-white">Juzgado</h3>
              <h3 className="is-bold has-text-white">Dirección</h3>
              <h3 className="is-bold has-text-white">Juez</h3>
              <h3 className="is-bold has-text-white">Secretario </h3>
            </div>
            {juzgados.map((el: JuzgadoData, index: number) => (
              <div
                key={index}
                className={
                  index + 1 === juzgados.length
                    ? "juz-row-6 pl-2 is-hm-35 pt-1"
                    : "juz-row-6 pl-2 is-hm-35 pt-1 is-border-b-half"
                }
              >
                <h3 className="is-bold py-2"> {el.fuero}</h3>
                <h3 className="is-bold py-2">{el.juzgado}</h3>
                <h3 className="is-bold py-2">{el.direccion}</h3>
                <h3 className="is-bold py-2">{el.juez}</h3>
                <h3 className="is-bold py-2">
                  {el.secretaria.map((el: Secretaria) => el.secretario)}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <ReactFormControl
            formInitialData={{
              intialValues: juzgadoInitialValues,
              submit: handlerJuzgadoForm,
            }}
            formConfig={{
              formFields: juzgadoFields,
              button: (
                <button className="button is-info my-4">Agregar Juzgado</button>
              ),
              form_class:
                "juzgado-form-class is-sha-s is-bor-4 mt-2 has-background-white",
            }}
          />
        )}
      </div>
      {succMsg ? (
        <div className="container has-background-success has-text-white is-h-50 is-wm-40 font-size-3 is-click is-flex is-align-center is-justify-center my-4">
          <h3>Juzgado agregado con exito</h3>
        </div>
      ) : null}
    </div>
  );
};

Juzgado.getInitialProps = async () => {
  /* const cookie = ctx.req?.headers.cookie;
  if (!cookie) {
    ctx.res?.writeHead(302, {
      Location: rootURL,
    });

    ctx.res.end();
    return {};
  }*/

  const response = await Axios.get(juzgadoRoutes.juzgadoTodos);

  return {
    props: {
      juzgados: JSON.parse(JSON.stringify(response.data.data)),
    },
  };
};

export default Juzgados;
