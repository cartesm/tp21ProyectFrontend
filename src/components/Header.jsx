import { Link } from "react-router-dom";
import { useNormal } from "../context/normalContext";
function Header() {


  const {mobment,setMobment} = useNormal()

  const handleClick = () => (mobment != 0 ? setMobment(0) : setMobment(1000));

  return (
    <div className="bg-red-500 w-full h-[40px] flex items-center gap-6">
      <button onClick={handleClick}>X</button>
      <Link to={"/1"} >1</Link>
      <Link to={"/2"} >2</Link>
    </div>
  );
}

export default Header;
