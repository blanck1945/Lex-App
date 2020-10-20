import Axios from "axios";
import { useContext, useEffect } from "react";
import { usuarioRoute } from "../../api/routes";
import GlobalContext from "../../context/globalContext";

const ValidationUser = () => {
  const { globalState } = useContext(GlobalContext);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const { data } = await Axios.get(usuarioRoute.validateUser);

        if (data) {
          globalState.setGlobalVar(true);
        }
        return;
      } catch (err) {
        return;
      }
    };

    validateUser();
  }, []);

  return;
};

export default ValidationUser;
