import React from "react";
import StarRating from "./StarRating";

const StarReview = ({ rating, width, review }) => {
  return (
    <div className="center w-fit ">
      <div className="w-24 mt-0.5">
      <StarRating rating={rating} />
      </div>

      <div className="h-2  w-36 bg-gray-300 rounded-full mt-1">
        <div
          className="h-full bg-yellow-500 rounded-full"
          style={{ width: width }}
        />
      </div>
      <p className="text-sm text-gray-600 ml-4  ">{review}</p>
    </div>
  );
};

export default StarReview;
