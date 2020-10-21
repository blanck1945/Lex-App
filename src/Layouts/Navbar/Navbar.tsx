import Axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import { usuarioRoutes } from "../../../api/routes";
import ValidationUser from "../../components/validatationUser/ValidationUser";
import GlobalContext from "../../../context/globalContext";

const Navbar = () => {
  const { state } = ValidationUser();

  const { globalState } = useContext(GlobalContext);
  const router = useRouter();

  const closeSesion = async () => {
    try {
      globalState.setGlobalVar(false);
      await Axios.get(usuarioRoutes.logOutRoute);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!state)
    return (
      <div className="has-background-judicial is-flex is-justify-between is-align-center is-w-full is-h-100">
        <h1 className="title  ml-4 is-click has-text-white mb-2">La Ley</h1>
      </div>
    );

  return (
    <div className="has-background-judicial is-flex is-justify-between is-align-center is-w-full is-h-100">
      <h1 className="title mt-4 ml-4 is-click has-text-white ">La Ley</h1>
      {!globalState.globalVar ? (
        <a className="has-text-white font-size-4 pr-4">Iniciar Sesión</a>
      ) : (
        <div className="is-flex column is-justify-evenly is-two-thirds ">
          <Link href="/dash">
            <a className="has-text-white font-size-4">Dash</a>
          </Link>
          <Link href="/juzgados">
            <a className="has-text-white font-size-4">Juzgados</a>
          </Link>
          <Link href="/causas">
            <a className="has-text-white font-size-4 ">Causas</a>
          </Link>
          <Link href="/abogados">
            <a className="has-text-white font-size-4 ">Abogados</a>
          </Link>
          <Link href="/clientes">
            <a className="has-text-white font-size-4">Clientes</a>
          </Link>
          <Link href="/clientes">
            <a
              className="has-text-white font-size-4"
              onClick={() => closeSesion()}
            >
              Cerrar Sesión
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
