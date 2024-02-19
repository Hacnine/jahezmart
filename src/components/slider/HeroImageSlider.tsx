"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSliderBackground from "../common/ui/CustomSliderBackground";
const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className=" h-full  w-full ">
      <Slider {...settings}>
        <CustomSliderBackground image={"images/heroImage1.svg"} />
        <CustomSliderBackground image={"images/heroImage2.svg"} />
        <CustomSliderBackground image={"images/heroImage3.svg"} />
        <CustomSliderBackground image={"images/heroImage4.svg"} />
      </Slider>
    </div>
  );
};

export default CustomSlider;
