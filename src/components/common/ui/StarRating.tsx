

import { FaStar, FaStarHalf } from "react-icons/fa";

interface StarRatingProps{
    rating:number,
    reviews?:number
}

const StarRating:React.FC<StarRatingProps> = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);

  // Check if there's a half star
  const hasHalfStar = rating % 1 !== 0;
  // Generate an array of stars based on the rating
  const starsArray = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} className="text-yellow-500" />
  ));

  // If there's a half star, add it to the array
  if (hasHalfStar) {
    starsArray.push(<FaStarHalf key="half-star" className="text-yellow-500" />);
  }
  return <span className="center gap-1">{starsArray} <span className="text-gray-500">({reviews})</span></span>;
};

export default StarRating;