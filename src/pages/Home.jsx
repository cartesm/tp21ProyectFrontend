import { ImCross } from "react-icons/im";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Map";

import { useEffect } from "react";
import { useNormal } from "../context/normalContext";
function Main() {
  const navigate = useNavigate();
  const { mobment, setMobment } = useNormal();

  const handleClick = () => {
    setMobment(false);

    navigate("/");
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <main>
      <section className="fixed w-full">
        <Header />
        <div className="flex">
          <div
            className={`bg-green-500 w-full min-w-[300px]  sm:max-w-[600px] h-full fixed target overflow-y-auto  z-20 ${
              mobment ? "block" : "hidden"
            }`}
          >
            <div className="relative top-0 flex items-center w-full h-[30px] justify-end">
              <button onClick={handleClick} className="p-2">
                <ImCross />
              </button>
            </div>
            <Outlet />
          </div>
          <div className="bg-blue-500 relative z-10">
            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

