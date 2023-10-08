import { Link } from "react-router-dom";
import { useNormal } from "../context/normalContext";

function Header() {
  const { mobment, setMobment } = useNormal();

  const handleClick = () => (mobment != 0 ? setMobment(0) : setMobment(1000));

  return (
    <div className="bg-red-500 w-full h-[40px] flex items-center gap-6">
      <Link to={"/1"} onClick={handleClick}>
        1
      </Link>
      <Link to={"/2"} onClick={handleClick}>
        2
      </Link>

      <Link onClick={handleClick} to={"/register"}>
        Register
      </Link>
    </div>
  );
}

export default Header;
