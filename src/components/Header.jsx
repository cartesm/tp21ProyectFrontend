import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth.context";
import { useNormal } from "../context/normalContext";
import ImageLoader from "./ImageLoader";

import {
  BiError,
  BiLocationPlus,
  BiLogIn,
  BiLogOut,
  BiLogoGithub,
  BiSolidRegistered,
} from "react-icons/bi";

function Header() {
  const { setMobment } = useNormal();
  const { userLoged, logout, userData } = useAuth();
  const open = () => setMobment(true);

  return (
    <header className="relative">
      <div className=" h-[30px] flex gap-5 items-center justify-end w-full my-3 px-3 absolute z-[19]">
        <Link
          to={"htt://youtube.com"}
          target="_blank"
          className="p-1 bg-white hover:scale-110 transition-all duration-150 rounded-full"
        >
          <BiLogoGithub className="text-xl" />
        </Link>

        {userLoged ? (
          <>
            <Link
              className="font-semibold flex items-center hover:bg-cyan-100 hover:scale-110 transition-all duration-150 text-[#181818] bg-white rounded-full  px-3 py-1"
              onClick={open}
              to={"/add-location"}
            >
              <BiLocationPlus className="text-xl" />
              <span>Añadir ubicacion</span>
            </Link>
            <ImageLoader
              imageSrc={userData?.img}
              name={userData?.userName}
              styles={
                "w-[40px] border-2 rounded-full hover:scale-110 transition-all duration-150"
              }
            />
            <Link
              className="font-semibold flex justify-center items-center hover:bg-cyan-100 hover:scale-110 transition-all duration-150 text-[#181818] bg-white rounded-full p-2"
              onClick={logout}
            >
              <BiLogOut className="text-xl" />
            </Link>
          </>
        ) : (
          <>
            <Link
              className="px-3 py-1 gap-2 font-semibold flex items-center hover:bg-cyan-100 hover:scale-110 transition-all duration-150 text-[#181818] bg-white rounded-full "
              onClick={open}
              to={"/register"}
            >
              <BiSolidRegistered className="text-xl" />
              <span>Registro</span>
            </Link>
            <Link
              className="px-3 py-1 font-semibold flex gap-2 items-center hover:bg-cyan-100 hover:scale-110 transition-all duration-150 text-[#181818] bg-white rounded-full "
              to={"/login"}
              onClick={open}
            >
              <BiLogIn className="text-xl " />
              <span>Inicio de sesion</span>
            </Link>
          </>
        )}
        <Link
          to={"/reportIssue"}
          onClick={open}
          className="p-1 bg-red-200 hover:scale-110 transition-all duration-150 rounded-full"
        >
          <BiError className="text-xl" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
