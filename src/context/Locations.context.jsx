import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getAllLocation,
  getOneLocation,
  laddLocation,
} from "../api/locations.api";

const context = createContext();

export const useLocations = () => {
  const localContext = useContext(context);
  if (!localContext) throw new Error("the context is empty");
  return localContext;
};

const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [liveLocation, setLiveLocation] = useState({ lat: "", lng: "" });

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
  const getOne = async (data) => {
    try {
      const resp = await getOneLocation(data);
      setLocation(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  (() => {
    navigator.geolocation.watchPosition(
      (e) => {
        setLiveLocation({ lat: e.coords.latitude, lng: e.coords.longitude });
      },
      () => {
        toast(
          "Para poder ofrecerte todos los servicios, necesitamos acceder a tu ubicación. Si no aceptas, se desactivaran acciones vitales."
        );
      },
      { enableHighAccuracy: true }
    );
  })();

  useEffect(() => {
    getAll();
  }, [laddLocation]);

  return (
    <context.Provider
      value={{
        locations,
        setPoint,
        getOne,
        location,
        liveLocation,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
