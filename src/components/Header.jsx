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
  BiQuestionMark,
  BiSolidRegistered,
} from "react-icons/bi";

function Header() {
  const { setMobment } = useNormal();
  const { userLoged, logout, userData } = useAuth();
  const open = () => setMobment(true);

  return (
    <header className="relative">
      <div className=" h-[30px] flex gap-5 items-center justify-end top-3 md:top-0 w-full my-3 px-3 absolute z-[19]">
        <span className="bg-emerald-200 px-3 py-1 rounded-full text-emerald-600 font-semibold">
          Greenly
        </span>
        <Link
          to={"https://github.com/cartesm/tp21ProyectFrontend"}
          target="_blank"
          className="p-1 bg-cyan-200 hover:scale-110 transition-all duration-150 rounded-full"
        >
          <BiLogoGithub className="text-xl" />
        </Link>
        <Link
          to={"https://github.com/cartesm/tp21ProyectBacktend"}
          target="_blank"
          className="p-1 bg-indigo-200 hover:scale-110 transition-all duration-150 rounded-full"
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
              <span>Añadir</span>
            </Link>
            <div className="flex flex-col md:flex-row gap-1 md:gap-3">
              <div className="w-[40px] object-cover flex items-center justify-center h-[40px] border-2 border-white rounded-full hover:scale-110 transition-all duration-150">
                <ImageLoader
                  imageSrc={userData?.img}
                  name={userData?.userName}
                  styles={" w-full h-full rounded-full"}
                />
              </div>
              <Link
                className="font-semibold flex justify-center items-center hover:bg-cyan-100 hover:scale-110 transition-all duration-150 text-[#181818] bg-white rounded-full p-2"
                onClick={logout}
              >
                <BiLogOut className="text-xl" />
              </Link>
            </div>
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
        <div className="flex flex-col relative top-3 gap-1 my-3 md:gap-2">
          <Link
            to={"/reportIssue"}
            onClick={open}
            className="p-1 bg-red-200 hover:scale-110 transition-all duration-150 rounded-full"
          >
            <BiError className="text-xl" />
          </Link>
          <Link
            to={"/reportIssue"}
            onClick={open}
            className="p-1 bg-blue-200 hover:scale-110 transition-all duration-150 rounded-full"
          >
            <BiQuestionMark className="text-xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
