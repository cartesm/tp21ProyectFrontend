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
            className={` w-full min-w-[300px] h-screen sm:max-w-[550px] fixed target overflow-y-auto  z-20 ${
              mobment ? "block" : "hidden"
            }`}
          >
            <Outlet />
          </div>
          <div className=" relative z-10">
            <Map />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
