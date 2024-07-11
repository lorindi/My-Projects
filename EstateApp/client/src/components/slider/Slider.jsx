import "./Slider.scss";
function Slider({ images }) {
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
    >
      <path
        d="M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 18L18 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
  const ArrowLeftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
    >
      <path
        d="M12 4L4 12L12 20"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
    >
      <path
        d="M12 4L20 12L12 20"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="slider">
      <div className="fullSlider">
        <div className="arrow">
          {/* <img src="/arrowl.png" alt="" /> */}
          <ArrowLeftIcon />
        </div>
        <div className="imgContainer">
          <img src={images[0]} alt="" />
        </div>
        <div className="arrow">
          {/* <img src="/arrowr.png" alt="" /> */}
          <ArrowRightIcon />
        </div>
        <div className="close">
          <CloseIcon />
        </div>
      </div>
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img src={img} key={index} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Slider;
