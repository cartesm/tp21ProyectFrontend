import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useLocations } from "../context/Locations.context";

function DataPoint() {
  const { getOne, location } = useLocations();
  const { id } = useParams();
  useEffect(() => {
    getOne(id);

    console.log(location);
  }, []);

  if (!location) return <span>loading.....</span>;

  return (
    <div>
      <div>
        <h2>{location.name}</h2>
        <span>{location.author.name}</span>
      </div>
      <div>
        <img src={location.image} alt={location.name} />
        <span>{location.country}</span>
        <p>{location.description}</p>
      </div>
      <h3>tipos</h3>
      <div className=" flex flex-row gap-3">
        {location.types.map((data, i) => (
          <Link to={`/point/${id}/type/${"plastic"}`} key={i}>{data}</Link>
        ))}
      </div>
      <div className="bg-yellow-200">
        <Outlet />
      </div>
    </div>
  );
}

export default DataPoint;
