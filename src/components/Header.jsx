import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";
import { useNormal } from "../context/normalContext";

function Header() {
  const { mobment, setMobment } = useNormal();
  const { userLoged, logout } = useAuth();

  const handleClick = () => (mobment != 0 ? setMobment(0) : setMobment(1000));

  return (
    <div className="bg-red-500 w-full h-[40px] flex items-center gap-6">
      {userLoged ? (
        <>
          <Link onClick={logout}>logout</Link>
          <Link onClick={handleClick} to={"/add-location"}>add point</Link>
        </>
      ) : (
        <>
          <Link onClick={handleClick} to={"/register"}>
            Register
          </Link>
          <Link to={"/login"} onClick={handleClick}>
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
