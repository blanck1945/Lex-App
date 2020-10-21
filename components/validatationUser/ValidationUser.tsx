import Axios from "axios";
import { useContext, useEffect } from "react";
import { usuarioRoute } from "../../api/routes";
import GlobalContext from "../../context/globalContext";
import DBinit from "../../db/firebase.config";

const ValidationUser = () => {
  const { globalState } = useContext(GlobalContext);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const user = await DBinit().auth().currentUser;

        if (user) {
          return true;
        }

        return false;
      } catch (err) {
        console.log(err);
      }
    };

    validateUser();
  }, []);

  return;
};

export default ValidationUser;
