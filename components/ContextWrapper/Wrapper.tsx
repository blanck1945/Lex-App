import { Dispatch, SetStateAction, useState } from "react";
import GlobalContext from "../../context/globalContext";

interface GlobalState {
  globalVar: boolean;
  setGlobalVar: Dispatch<SetStateAction<boolean>>;
}

const Wrapper = ({ children }) => {
  const [globalVar, setGlobalVar] = useState<boolean>(false);

  const globalState: GlobalState = {
    globalVar,
    setGlobalVar,
  };

  return (
    <GlobalContext.Provider value={{ globalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Wrapper;
