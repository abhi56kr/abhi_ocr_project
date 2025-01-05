import React, { useContext } from "react";
import { ImageContext } from "./GetImage";
import Style from "./DisplayLoadedImage.module.css";
const DisplayLoadedImage = () => {
  const context = useContext(ImageContext);
  return (
    <div className={Style.parent}>
      <div className={Style.heading}>
        <h1 className="heading1">LoadedImage</h1>
        <p>Image from which text to be extracted</p>
        <p>When you upload an image, it will appear below here </p>
      </div>

      <div className={Style.imgHolder}>
        <h3>Image</h3>
        {context.image ? <img src={context.image} alt="loadedImage" /> : null}
      </div>
    </div>
  );
};

export default DisplayLoadedImage;
