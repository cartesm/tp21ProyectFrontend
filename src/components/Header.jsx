import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="bg-red-500 w-full h-[40px] flex items-center">
      <Link to={"/1"} >1</Link>
      <Link to={"/3"} >2</Link>
      <Link to={"/4"} >3</Link>
      <Link to={"/5"} >4</Link>
    </div>
  );
}

export default Header;
