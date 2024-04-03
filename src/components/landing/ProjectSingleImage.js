import SoftBadge from "components/common/SoftBadge";
import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

const sliderSettings = {
  autoplay: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SingleImage = ({ image, name }) => {
  return (
    <div className="d-block h-sm-100 position-relative">
      <Image
        src={image}
        className={"h-100 w-100"}
        style={{
          objectFit: "contain",
        }}
        alt={name}
      />
      <div
        className="w-100 h-100 top-0 left-0 position-absolute "
        style={{
          backgroundImage: `url(${image})`,
          filter: "blur(5px)",
          zIndex: -100,
        }}
      ></div>
    </div>
  );
};

const ProjectSingleImage = ({ name, ongoing, imageSrcPath }) => {
  return (
    <div className={"position-relative rounded overflow-hidden h-sm-100"}>
      <SingleImage image={imageSrcPath} name={name} />
      {/* {files.length > 0 && (
        <Slider
          {...sliderSettings}
          className="slick-slider-arrow-inner h-100 full-height-slider"
        >
          {files.map((image) => (
            <SingleImage key={image.id} image={image} name={name} />
          ))}
        </Slider>
      )} */}
      <SoftBadge
        pill
        bg={ongoing ? "primary" : "success"}
        className="position-absolute top-0 end-0 me-2 mt-2 fs--2 z-index-2"
      >
        {ongoing ? "In progress" : "Closed"}
      </SoftBadge>
    </div>
  );
};

export default ProjectSingleImage;
