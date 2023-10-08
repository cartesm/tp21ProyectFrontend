import { createContext, useContext } from "react";
import { registerUser } from "../api/auth.api";

const context = createContext();

export const useAuth = () => {
  const localContext = useContext(context);
  if (!localContext) throw new Error("the context in empty");
  return localContext;
};

const contextProvider = ({ children }) => {
  const register = async () => {
    try {
      const resp = (await registerUser()).data;
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <context.Provider
      value={{
        register,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default contextProvider;
