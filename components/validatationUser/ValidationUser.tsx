import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { usuarioRoute } from "../../api/routes";
import GlobalContext from "../../context/globalContext";
import DBinit from "../../db/firebase.config";

interface Validate {
  loading: boolean;
  state: boolean;
}

const ValidationUser = () => {
  const [validate, setValidate] = useState<Validate>({
    loading: false,
    state: false,
  });
  const { globalState } = useContext(GlobalContext);

  useEffect(() => {
    DBinit()
      .auth()
      .onAuthStateChanged(function (user) {
        if (user) {
          setValidate({
            ...validate,
            state: true,
          });
          globalState.setGlobalVar(true);
        } else {
          setValidate({
            ...validate,
            state: true,
          });
        }
      });
  }, []);

  return validate;
};

export default ValidationUser;
