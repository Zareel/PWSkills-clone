import React from "react";
import Slider from "react-slick";
import {
  bannerOne,
  bannerTwo,
  bannerThree,
  bannerFour,
} from "../../assets/image";
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={bannerOne} alt="bannerImage" />
        </div>
        <div>
          <img src={bannerTwo} alt="bannerImage" />
        </div>
        <div>
          <img src={bannerThree} alt="bannerImage" />
        </div>
        <div>
          <img src={bannerFour} alt="bannerImage" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
