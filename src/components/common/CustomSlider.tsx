"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            <Image alt="hero image" src={"images/heroImage1.svg"} height={300} width={1600} />
          </div>
          <div>
            <Image alt="hero image" src={"images/heroImage2.svg"} height={300} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={"images/heroImage3.svg"} height={300} width={1600} />
          </div>

          <div>
            <Image alt="hero image" src={"images/heroImage4.svg"} height={300} width={1600} />
          </div>

          
        </Slider>
      </div>
    </div>
  );
};

export default CustomSlider;
