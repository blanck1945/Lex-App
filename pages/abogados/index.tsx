import Axios from "axios";
import { abogadosRoutes, prefix } from "../../api/routes";
import Button from "../../components/Button/Button";
import {
  abogadoFields,
  abogadosInitialValues,
} from "../../formControl/form/Forms/AbogadoForm/AbogadosInputs";
import ReactFormControl from "../../formControl/form/ReactFormControl";
import { AbogadoInterface } from "../../Interfaces/Abogado";
import useSWR, { mutate } from "swr";
import AxiosFetch from "../../util/fetcher";
import Loader from "react-loader-spinner";
import DBinit from "../../db/firebase.config";
import ValidationUser from "../../components/validatationUser/ValidationUser";
import { useEffect } from "react";

interface AbogadosProps {
  abogados: AbogadoInterface[];
}

const Abogados = ({ abogados }: AbogadosProps) => {
  const { data: animes, error } = useSWR(prefix + "animes", AxiosFetch);
  console.log(animes);
  const abogadosArr = [];

  if (error) return <div>Failed to load</div>;
  if (!animes)
    return (
      <div className="is-flex is-align-center is-justify-center is-w-full ">
        <Loader type="Rings" color="#034ea2" height={160} width={160} />
      </div>
    );

  const handleAbogado = async (values: any) => {
    const abogado = {
      ...values,
      abogado:
        values.sexo === "mujer"
          ? "Dra " + values.abogado
          : "Dr " + values.abogado,
      especialidad: "Derecho " + values.especialidad,
      contacto: {
        celular: values.celular,
        fijo: values.fijo,
        email: values.email,
      },
    };
    delete abogado.celular;
    delete abogado.fijo;
    delete abogado.email;

    try {
      await Axios({
        method: "POST",
        url: abogadosRoutes.abogadosTodos,
        data: abogado,
      });

      mutate(abogadosRoutes.abogadosTodos);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="is-flex is-justify-evenly">
      <div className="is-flex has-background-light  is-dis-col is-h-full is-wm-45">
        {abogadosArr === undefined ||
          (abogadosArr.length === 0 && (
            <h3 className="has-text-judicial is-bold font-size-3 is-flex is-hm-300 is-align-center  is-justify-center">
              No hay abogados agregados
            </h3>
          ))}
        {abogadosArr
          ? abogadosArr.map((abogado: AbogadoInterface, index: number) => (
              <div
                className="is-w-full has-background-white is-sha-p  mb-4 pl-2 py-2"
                key={index}
              >
                <h3 className="is-bold">Doctor/ra: {abogado.abogado}</h3>
                <h3 className="is-bold">
                  Especialidad: {abogado.especialidad}
                </h3>
                <div className="mt-2 ">
                  <h4>Celular: {abogado.contacto.celular}</h4>
                  <h4>Fijo: {abogado.contacto.fijo}</h4>
                  <h4>Email: {abogado.contacto.email}</h4>
                </div>
              </div>
            ))
          : null}
      </div>
      <ReactFormControl
        formInitialData={{
          intialValues: abogadosInitialValues,
          submit: handleAbogado,
        }}
        formConfig={{
          form_class:
            "has-background-white is-border-4 is-sha-p is-wm-40 is-flex is-dis-col is-align-center pb-4 is-wm-45",
          formFields: abogadoFields,
          button: <Button>Agregar Abogado</Button>,
        }}
      />
    </div>
  );
};
/*
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await dbConnect();

  switch (ctx.req.method) {
    case "GET":
      const abogados = await Models.AbogadoModel.find({});
      return {
        props: {
          abogados,
        },
      };
  }
};*/

export default Abogados;
