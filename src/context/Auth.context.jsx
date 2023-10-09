import cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, registerUser } from "../api/auth.api";

const context = createContext();

export const useAuth = () => {
  const localContext = useContext(context);
  if (!localContext) throw new Error("the context in empty");
  return localContext;
};

const ContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [userLoged, setUserLoged] = useState(false);
  const [userData, setuserData] = useState(null);

  const register = async (data) => {
    setLoader(true);
    try {
      const resp = (await registerUser(data)).data;
      setLoader(false);
      setUserLoged(true);
      console.log(resp);
      localStorage.setItem("userData", JSON.stringify(resp));
    } catch (err) {
      setLoader(false);
      setUserLoged(false);
      console.log(err.response.data.message);
    }
  };

  const login = async (data) => {
    setLoader(true);
    try {
      const resp = await loginUser(data);
      console.log(resp.data);
      setLoader(false);
      setUserLoged(true);
      localStorage.setItem("userData", JSON.stringify(resp.data));
    } catch (err) {
      console.log(err.response.data.message);
      setLoader(false);
      setLoader(false);
    }
  };
  const logout = async () => {
    try {
      const resp = (await logoutUser()).data;
      console.log(resp);
      setUserLoged(false);

      localStorage.removeItem("userData");
    } catch (err) {
      console.log(err);
      setUserLoged(true);
    }
  };
  useEffect(() => {
    const token = cookies.get("token");

    if (!token) {
      setUserLoged(false);
      console.log("unloged");
    } else {
      setUserLoged(true);
      console.log("loged");
    }
    setuserData(JSON.parse(localStorage.getItem("userData")))
  }, [userLoged]);

  return (
    <context.Provider
      value={{
        register,
        userLoged,
        login,
        loader,
        logout,
        userData
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
