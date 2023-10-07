import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

function Main() {
  return (
    <main>
      <section className="fixed w-full">
        <Header />
        <div className="bg-green-500 w-full md:w-[500px] h-screen fix">
            <Outlet/>
        </div>
      </section>
    </main>
  );
}

export default Main;
