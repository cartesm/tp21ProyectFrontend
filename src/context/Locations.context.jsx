import { createContext, useContext, useEffect, useState } from "react";
import { getAllLocation, laddLocation } from "../api/locations.api";

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

  const setPoint = async (data) => {
    try {
      const resp = await laddLocation(data);
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, [laddLocation]);

  return (
    <context.Provider
      value={{
        locations,
        setPoint,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
