import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../card/ProductCard";
import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import { useSelector } from "react-redux";



const CategorySlider = ({ category }) => {
  const { allProducts } = useSelector((state) => state.filter);
  const categoryProducts = allProducts.filter((product) => product.category === category);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <IoMdArrowDropright />,
    prevArrow: <IoMdArrowDropleft />,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" h-full  w-full ">
      <Slider {...settings}>
        {categoryProducts.map((product, index) => (
          <div className=" px-6" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
