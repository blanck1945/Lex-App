import { useContext, useEffect, useState } from "react";
import { usuarioRoute, usuarioRoutes } from "../api/routes";
import Axios from "axios";
import Header from "../components/Header/Header";
import UserAndEmailAndPassword from "../formControl/form/FormComponents/UserAndEmailAndPass";
import UserAndPassword from "../formControl/form/FormComponents/UserAndPassword";
import Router from "next/router";
import GlobalContext from "../context/globalContext";
import Loader from "react-loader-spinner";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const [loginDis, setLoginDis] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const { globalState } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      if (loading) {
        setLoading(false);
      }
    };
  }, []);

  const logUser = async (values: any) => {
    setLoading(true);
    await Axios({
      method: "POST",
      url: usuarioRoutes.loginRoute,
      data: values,
    });
    //const res = await Axios.get(usuarioRoute.validateUser);
    //window.localStorage.setItem("item", res.data.succes);

    globalState.setGlobalVar(true);
    Router.push("/dash");

    return true;
  };

  const register = async (values: any) => {
    setLoading(true);
    setErrorMsg(undefined);
    const match = checkPass(values.password, values.confirmPassword);
    console.log(match);
    if (!match) {
      setErrorMsg("La contraseña no coincide");
      return false;
    }

    delete values.confirmPassword;

    await Axios({
      method: "POST",
      url: usuarioRoutes.registerRoute,
      data: values,
    });
    setLoginDis(true);
    setLoading(false);
    return true;
  };

  const checkPass = (pass: string, pass2: string) => {
    return pass === pass2 ? true : false;
  };

  const formClass = "has-background-white is-flex is-dis-col is-align-center";
  const h4Class = "is-flex  is-justify-center pb-4 py-2 font-size-3";
  const errorClass =
    "is-flex  is-justify-center pb-4 py-2 font-size-4 has-background-danger has-text-white is-wm-40 m-auto is-click";
  const spanClass = "has-text-judicial is-click is-bold font-size-3 ml-2";

  return (
    <div className="container has-background-white">
      {loading ? (
        <div className="is-flex is-align-center is-justify-center is-w-full ">
          <Loader type="Rings" color="#034ea2" height={160} width={160} />
        </div>
      ) : (
        <>
          <Header>{loginDis ? "Iniciar Sesion" : "Registrar Usuario"}</Header>
          {loginDis ? (
            <>
              <UserAndPassword
                submit={logUser}
                form_class={formClass}
                customUser="usuario"
              />
              <h4 className={h4Class}>
                Si no tiene cuenta{" "}
                <span className={spanClass} onClick={() => setLoginDis(false)}>
                  registrese
                </span>
              </h4>
            </>
          ) : (
            <>
              <UserAndEmailAndPassword
                submit={register}
                form_class={formClass}
                customUser="usuario"
              />
              <div>
                {errorMsg && (
                  <h4
                    className={errorClass}
                    onClick={() => setErrorMsg(undefined)}
                  >
                    {errorMsg}
                  </h4>
                )}
                <h4 className={h4Class}>
                  Si ya tiene cuenta
                  <span className={spanClass} onClick={() => setLoginDis(true)}>
                    inicie sesión
                  </span>
                </h4>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
