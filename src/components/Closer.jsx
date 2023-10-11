import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useNormal } from "../context/normalContext";

function Closer() {
  const navigate = useNavigate();
  const { setMobment } = useNormal();

  const handleClick = () => {
    setMobment(false);

    navigate("/");
  };

  return (
    <div className="absolute top-0 flex items-center w-full h-[30px] justify-end hover:cursor-pointer">
      <button onClick={handleClick} className="p-2">
        <ImCross className="hover:rotate-180 transition-all duration-150 text-xl text-gray-700" />
      </button>
    </div>
  );
}

export default Closer;
