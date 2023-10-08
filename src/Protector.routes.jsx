import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/Auth.context";
function Protector() {
  
  const navigate = useNavigate();
  const { userLoged } = useAuth();




  if (userLoged) return navigate("/");
  return <Outlet />;
}

export default Protector;
