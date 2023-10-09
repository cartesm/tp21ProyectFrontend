import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";
import { useNormal } from "../context/normalContext";

function Header() {
  const { setMobment } = useNormal();
  const { userLoged, logout, userData } = useAuth();
  const open = () => setMobment(true);

  return (
    <div className="bg-red-500 w-full h-[40px] flex items-center gap-6">
      {userLoged ? (
        <>
          <Link onClick={logout}>logout</Link>
          <Link onClick={open} to={"/add-location"}>
            add point
          </Link>
          <span>{userData?.userName}</span>
          <img
            src={userData?.img}
            alt={userData?.userName}
            className="w-[35px] bg-white rounded-full"
          />
        </>
      ) : (
        <>
          <Link onClick={open} to={"/register"}>
            Register
          </Link>
          <Link to={"/login"} onClick={open}>
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
