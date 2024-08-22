import { useState } from "react";
import "./Slider.scss";
import ArrowLeftIcon from "./svg/ArrowLeftIcon";
import ArrowRightIcon from "./svg/ArrowRightIcon";
import CloseIcon from "./svg/CloseIcon";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    // console.log("Change slide direction:", direction);

    if (direction === "left") {

      // ? i0 === i0 = true => i3 : i-1
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      // ? i3 === i4-1 = true  =>  i=0 : i+1
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <ArrowLeftIcon />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <ArrowRightIcon />
          </div>
          <div className="close">
            <CloseIcon onClick={() => setImageIndex(null)} />
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            key={index}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
