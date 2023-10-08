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
        <div className="flex relative z-[10000000]">
          <div className="bg-green-500 w-full min-w-[300px] sm:max-w-[450px] -left-[1000px]  h-full fixed target">
            <Outlet />
          </div>
          <div className="bg-blue-500 max-w-full w-full h-screen">
            <Map/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
