import { createContext, useContext, useEffect, useState } from "react";
import { getAllLocation } from "../api/locations.api";

const context = createContext();

export const useLocations = () => {
  const localContext = useContext(context);
  if (!localContext) throw new Error("the context is empty");
  return localContext;
};

const ContextProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  const getAll = async () => {
    try {
      const resp = await getAllLocation();
      console.log(resp.data);
      setLocations(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <context.Provider
      value={{
        locations,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
