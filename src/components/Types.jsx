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
    <div className="py-12">
      <h3 className="text-xl font-semibold mx-auto text-center text-[#333]">
        {tpData[typ].name}
      </h3>
      <div className="flex flex-col items-center">
        <p className="my-5 mx-auto max-w-[450px] indent-5">
          {tpData[typ].obtention}
        </p>
        <div className="w-[300px] h-[170px] object-contain">
          <ImageLoader
            imageSrc={tpData[typ].images[0]}
            name={tpData[typ].name}
            styles={"w-full h-full"}
          />
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <p className="my-5 mx-auto max-w-[450px] indent-5">
          {tpData[typ].utility?.split("&").map((data,key) => (
            <p className="my-4" key={key}>{data}</p>
          ))}
        </p>
        <div className="object-contain w-[300px] h-[170px]">
          <ImageLoader
            imageSrc={tpData[typ].images[1]}
            name={tpData[typ].name}
            styles={"w-full h-full"}
          />
        </div>
      </div>
    </div>
  );
}

export default Types;
