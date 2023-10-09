import { useState } from "react";
import Loader from "./Loader";

function ImageLoader({ imageSrc, styles, name }) {
  const [completeCharge, setCompleteCharge] = useState(true);

  return (
    <>
      {completeCharge && <Loader />}

      <img
        src={imageSrc}
        className={styles}
        alt={name}
        onLoad={() => setCompleteCharge(false)}
      />
    </>
  );
}

export default ImageLoader;
