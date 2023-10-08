import anime from "animejs";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Map from '../components/Map';

import { useNormal } from '../context/normalContext';
function Main() {

  const {mobment} = useNormal()


  useEffect(() => {
    anime({
      targets: ".target",
      translateX: mobment,
      duration: 600,

    });
  }, [mobment]);
  return (
    <main>
      <section className="fixed w-full">
        <Header />
        <div className="flex">
          <div className="bg-green-500 w-full min-w-[300px] sm:max-w-[450px] -left-[1000px]  h-full fixed target  z-20">
            <Outlet />
          </div>
          <div className="bg-blue-500 relative z-10">
            <Map/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
