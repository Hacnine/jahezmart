import { DescriptionItem } from "@/type";
import React from "react";

const ProductInfo = ({ description, full_details }) => {
  return (
    <div className="ml-3">
      <div className=" mb-6  text-sm space-y-3">
        <hr className="border-t border-gray-200 " />

        {description.map((text: DescriptionItem) => (
          <>
            <p className="text-gray-600 text-base font-semibold">
              {text.title}
            </p>

            <p className="text-gray-600">{text.description}</p>
          </>
        ))}
      </div>

      <div>
        <p className="text-gray-600 font-bold text-lg mb-1 border-b ">
          Full Details
        </p>
        {full_details.map((item: string, index: number) => (
          <div key={index}>
            {/* Iterate over each property in the object */}
            {Object.entries(item).map(([key, value]) => (
              <div key={key} className="text-gray-600">
                <strong className="text-gray-700">{key}:</strong> {value}
              </div>
            ))}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
