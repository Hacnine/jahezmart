"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image1 from "../../../public/images/heroImage1.svg"
import image2 from "../../../public/images/heroImage2.svg"
import CustomSliderBackground from "./ui/CustomSliderBackground";
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
    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
  };
  return (
    // sm:bg-green-600 md:bg-yellow-900 lg:bg-red-500
    <div className=" h-full overflow-hidden border-gray-700 w-full ">
      <div className=" ">
        <Slider {...settings}>
        <CustomSliderBackground image={'images/heroImage1.svg'}/>
        <CustomSliderBackground image={'images/heroImage2.svg'}/>
        <CustomSliderBackground image={'images/heroImage3.svg'}/>
        <CustomSliderBackground image={'images/heroImage4.svg'}/>

{/*            <div>
            <Image alt="hero image" src={"images/heroImage2.svg"} height={524} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={"images/heroImage3.svg"} height={524} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={"images/heroImage4.svg"} height={524} width={1600} />
        </div>  */} 

          
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
