import { createContext, useContext, useState } from "react";

const context = createContext();
export const useNormal = () => {
  const contextLocal = useContext(context);

  if (!contextLocal) throw new Error("context is empty");

  return contextLocal;
};

const ContextProvider = ({ children }) => {

  const [mobment, setMobment] = useState(0);

  return (
    <context.Provider
      value={{
        mobment,
        setMobment,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
