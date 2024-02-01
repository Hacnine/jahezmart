"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/heroImage1.svg";
import image2 from "../../images/heroImage2.svg";
import image3 from "../../images/heroImage3.svg";
import image4 from "../../images/heroImage4.svg";
import Image from "next/image";

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
    <div className=" h-[550px] overflow-hidden border-gray-700 w-full ">
      <div className=" ">
        <Slider {...settings}>
          <div>
            <Image alt="hero image" src={image1} height={300} width={1600} />
          </div>
          <div>
            <Image alt="hero image" src={image2} height={300} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={image3} height={300} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={image4} height={300} width={1600} />
          </div>

          
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
