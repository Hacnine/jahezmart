import React from "react";
import { BsStarFill } from "react-icons/bs";
import StarRating from "../common/ui/StarRating";
import StarReview from "../common/ui/StarReview";

const ProductReview = () => {
  return (
    <div className="border-t border-gray-200 ml-2">
      <div className="   py-3 ">
        <div className="start md:flex-row flex-col md:gap-8 ">
          <div className="space-y-1 mb-4">
            <p className="text-4xl font-semibold">4.9 / 5</p>
            <StarRating rating={5} />
            <div className="text-sm text-gray-500">20 Ratings</div>
          </div>

          <div className="">
            <StarReview rating={4.9} width="90%" review={230} />
            <StarReview rating={3.9} width="80%" review={134} />
            <StarReview rating={2.9} width="60%" review={10} />
            <StarReview rating={1.9} width="30%" review={5} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Product Reviews</h2>
          <div className="space-y-8">
            {[
              {
                user: "Jabir",
                date: "30 Jul 2021",
                content:
                  "Lorem Ipsumin gravida nibh vel velit auctor aliquet...",
                images: [
                  "/images/products/comment1.jpg",
                  "/images/products/comment2.jpg",
                ], // Example image paths
              },
              {
                user: "Abir.",
                date: "30 Jul 2021",
                content:
                  "Lorem Ipsumin gravida nibh vel velit auctor aliquet...",
                images: [
                  "/images/products/comment3.jpg",
                  "/images/products/comment4.jpg",
                ], // Example image paths
              },
            ].map((review, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex items-center mb-2">
                  <div className="text-lg font-bold mr-2">{review.user}</div>
                  <StarRating rating={4.4} />
                </div>
                <div className="text-sm text-gray-500 mb-2">{review.date}</div>
                <div className="text-gray-800">{review.content}</div>
                <div className="mt-4 flex space-x-4">
                  {review.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Review Image ${idx + 1}`}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border rounded p-4 mb-8">
        <div className="text-lg font-bold mb-2">
          Question about this product (3)
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Ask a Question
        </button>
      </div>
    </div>
  );
};

export default ProductReview;
