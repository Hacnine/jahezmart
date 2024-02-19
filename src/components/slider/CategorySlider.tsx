import { useState } from 'react'; // Import useState hook
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFilterContext } from '@/context_reducer/filterContext';
import ProductCard from '../card/ProductCard';
import {
  IoIosArrowBack,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from 'react-icons/io';

interface CategorySlider {
  category: string;
}

const CategorySlider: React.FC<CategorySlider> = ({ category }) => {
  const { filterByCategory } = useFilterContext();
  const categoryProducts = filterByCategory(category);

  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide

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
    ]}
    
  return (
    <div className=" h-full  w-full  ">
      <Slider {...settings}>
        {categoryProducts.map((product) => (
          <div className=" px-6">
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
