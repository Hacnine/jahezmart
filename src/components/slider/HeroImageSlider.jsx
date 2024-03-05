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
        <CustomSliderBackground image={"images/heroImage1.svg"} title1={"Transform "} title2={"your space with "} title3={"timeless elegance."}/>
        <CustomSliderBackground image={"images/heroImage2.svg"} title1={"Discover"} title2={" furniture that defines your style."} title3={""}/>
        <CustomSliderBackground image={"images/heroImage3.svg"} title1={"Elevate"} title2={" your home with our curated collection."} title3={""}/>
        <CustomSliderBackground image={"images/heroImage4.svg"} title1={"Craft"} title2={""} title3={"ideal ambiance "} title4={"  "} title5={" with decor."}/>
      </Slider>
    </div>
  );
};

export default CustomSlider;
