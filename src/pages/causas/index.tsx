import Axios from "axios";
import { causaRoutes, juzgadoRoutes } from "../../../api/routes";
import { CausaInterface } from "../../../Interfaces/Causa";
import CausaComp from "../../components/CausaComp/CausaComp";
import { useEffect, useState } from "react";
import ReactFormControl from "../../../formControl/form/ReactFormControl";
import {
  causaFormFields,
  causaInitiaValues,
} from "../../../formControl/form/Forms/CausaForm/causaInputs";
import { addAndFormatCausa } from "../../../formControl/form/Forms/CausaForm/func";
import SuccMsg from "../../components/SuccMsg/SuccMsg";
import { GetServerSideProps, GetStaticProps } from "next";
import Button from "../../components/Button/Button";
import Causa from "../../../models/Causa";
import { useRouter } from "next/router";
import getConfig from "next/config";
import ValidationUser from "../../components/validatationUser/ValidationUser";
import dbConnect from "../../../db/dbConnect";
import { Models } from "../../../models";

interface CausasProps {
  causas: CausaInterface[];
  res: any;
}

interface SuccMsgInterface {
  msg: string;
  state: boolean;
  div_class: string;
}

const Causas = ({ causas }: CausasProps) => {
  const router = useRouter();

  if (!causas) {
    router.push("/");
  }

  const [allCausas, setAllCausas] = useState<any>([]);
  const [causaDis, setCausaDis] = useState<string>("Ver Causas");
  const [succMsg, setSuccMsg] = useState<SuccMsgInterface>({
    msg: "",
    state: false,
    div_class: "",
  });

  useEffect(() => {
    if (allCausas === undefined) {
      setAllCausas(causas);
    }

    return () => {
      setSuccMsg({
        msg: "",
        state: false,
        div_class: "",
      });
    };
  }, []);

  const generalClass =
    "container is-h-50 is-wm-55 font-size-3 has-text-white is-click is-flex is-align-center is-justify-center my-4";

  const handleCausa = async (values: CausaInterface) => {
    const causa = addAndFormatCausa(values);
    try {
      const { data } = await Axios({
        method: "POST",
        url: causaRoutes.causasTodas,
        data: causa,
      });
      setAllCausas({
        ...allCausas,
        causa,
      });
      setSuccMsg({
        state: true,
        msg: data.msg,
        div_class: generalClass + " has-background-success",
      });
    } catch (err) {
      setSuccMsg({
        state: true,
        msg: "No se pudo Cargar la Causa",
        div_class: generalClass + " has-background-danger",
      });
    }
  };

  return (
    <div className="is-w-full has-background-light  pl-2 is-flex is-justify-center is-dis-col is-align-center">
      <div className="is-wm-25 is-sha-s ml-4 is-h-100 my-4 has-background-white has-text-black is-flex is-align-center is-justify-center is-bor-8">
        <span
          className="button is-link"
          onClick={() => setCausaDis("Ver Causas")}
        >
          Ver Causas
        </span>
        <span
          className="button is-link ml-4"
          onClick={() => setCausaDis("Agregar")}
        >
          Agregar Causa
        </span>
      </div>
      {allCausas.length === 0 && (
        <h4 className="has-text-judicial font-size-3 is-bold">
          No hay causas para mostrar
        </h4>
      )}
      <div className="is-w-full has-background-light  pl-2 is-flex is-justify-center is-dis-col is-align-center">
        {causaDis === "Ver Causas" ? (
          <div className="container-causa  mt-2 ">
            {allCausas.length !== 0 &&
              causas.map((el: CausaInterface) => (
                <CausaComp key={el._id} causa={el} />
              ))}
          </div>
        ) : (
          <>
            <ReactFormControl
              formInitialData={{
                intialValues: causaInitiaValues,
                submit: handleCausa,
              }}
              formConfig={{
                button: <Button>Agregar Causa</Button>,
                formFields: causaFormFields,
                form_class:
                  "juzgado-form-class is-sha-s is-bor-4 mt-2 has-background-white",
              }}
            />
            {succMsg.state ? (
              <SuccMsg
                label="Causa agregada con exito"
                div_class={succMsg.div_class}
              />
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

//const { publicRuntimeConfig } = getConfig();

export async function getStaticProps(ctx) {
  await dbConnect();

  const causas = await Models.CausaModel.find({});
  return {
    props: {
      causas: JSON.parse(JSON.stringify(causas)),
    },
  };
}

/*export const getServerSideProps: GetServerSideProps = async (ctx) => {
  await dbConnect();
  const {
    req: { method },
  } = ctx;

  if (method === "GET") {
    const causas = await Models.CausaModel.find({})
      .populate("juzgadoId")
      .exec();
    return {
      props: {
        causas: JSON.parse(JSON.stringify(causas)),
      },
    };
  }

  return {
    props: {},
  };
};*/

export default Causas;
