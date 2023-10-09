import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import typesData from "../data/data";
import ImageLoader from "./ImageLoader";
import Loader from "./Loader";

function Types() {
  const { typ } = useParams();
  const [tpData, settpData] = useState(null);

  useEffect(() => {
    settpData(typesData);
    console.log(typesData[typ]);
  }, []);

  if (!tpData) return <Loader />;

  return (
    <div>
      <div className="flex">
        <ImageLoader
          imageSrc={tpData[typ].images[0]}
          name={tpData[typ].name}
          styles={"w-[200px]"}
        />
        <h3>{tpData[typ].name}</h3>
      </div>
      <div className="flex">
        <p>{tpData[typ].obtention}</p>
        <ImageLoader
          imageSrc={tpData[typ].images[1]}
          name={tpData[typ].name}
          styles={"w-[200px]"}
        />
      </div>
      <div className="flex">
        <p>{tpData[typ].utility}</p>
        <ImageLoader
          imageSrc={tpData[typ].images[2]}
          name={tpData[typ].name}
          styles={"w-[200px]"}
        />
      </div>
    </div>
  );
}

export default Types;
