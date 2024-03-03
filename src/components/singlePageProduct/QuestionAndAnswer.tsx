import React from "react";
import { BsStarFill } from "react-icons/bs";

const QuestionAndAnswer = () => {
  return (
    <div className="mb-8">
      <div className="space-y-8">
        {[
          {
            user: "Dr.SaifuzZ.",
            date: "7 Oct 2023",
            content: "There is no discount sir",
          },
          {
            user: "Store Admin",
            date: "7 Oct 2023",
            content: "Any discount?",
          },
        ].map((review, index) => (
          <div key={index} className="ml-2 border rounded p-4">
            <div className="flex items-center mb-2">
              <div className=" font-bold">{review.user}</div>
              <div className="flex ml-2">
                {[...Array(5)].map((_, index) => (
                  <BsStarFill key={index} className="text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-2">{review.date}</div>
            <div className="text-gray-800">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAndAnswer;
