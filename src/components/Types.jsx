import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import typesData from "../data/data";

function Types() {
  const { typ } = useParams();
  const [tpData, settpData] = useState(null);

  useEffect(() => {
    settpData(typesData);
    console.log(typesData[typ]);
  }, []);

  if(!tpData) return <span>loading ...</span>

  return (
    <div >
      <div className="flex">
        <img src={tpData[typ].images[0]} alt={tpData[typ].name} width={200} />
        <h3>{tpData[typ].name}</h3>
      </div>
      <div className="flex">
        <p>{tpData[typ].obtention}</p>
        <img src={tpData[typ].images[1]} alt={tpData[typ].names} width={200} />
      </div>
      <div className="flex">
        <p>{tpData[typ].utility}</p>
        <img src={tpData[typ].images[2]} alt={tpData[typ].names} width={200} />
      </div>
    </div>
  );
}

export default Types;
