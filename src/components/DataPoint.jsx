import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useLocations } from "../context/Locations.context";
import Closer from "./Closer";
import ImageLoader from "./ImageLoader";

function DataPoint() {
  const { getOne, location } = useLocations();
  const { id } = useParams();
  useEffect(() => {
    getOne(id);

    console.log(location);
  }, []);

  if (!location) return <span>loading.....</span>;

  return (
    <div className="bg-slate-200 h-full">
      <Closer />
      <div>
        <div>
          <ImageLoader
            imageSrc={location.image}
            name={location.name}
            styles={"w-full rounded-b-lg"}
          />
          <p className="flex gap-2 text-sm text-gray-900 text-end">
            Añadido por{" "}
            <span className="text-[#2e7d87] font-semibold">
              {location.author.userName}
            </span>
          </p>
          <div className="text-center py-6">
            <h2 className="text-gray-800 font-semibold text-xl pt-3">
              {location.name}
            </h2>
            <span className="text-[#2e7d87]">{location.country}</span>
          </div>

          <p className="indent-3 mx-auto max-w-[400px] pb-7">
            {location.description}
          </p>
        </div>

        <h3 className="text-gray-800 font-semibold text-lg text-center pb-6">
          Tipos de residuos aceptados en esta ubicacion
        </h3>
        <div className=" flex items-center justify-center flex-row gap-3">
          {location.types.map((data, i) => (
            <Link
              className="text-[#2e7d87] px-3 py-1 bg-white rounded-full font-semibold hover:scale-110 transition-all duration-150 hover:bg-cyan-100 "
              to={`/point/${id}/type/${data}`}
              key={i}
            >
              {data}
            </Link>
          ))}
        </div>
        <div className="bg-yellow-200 my-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DataPoint;
