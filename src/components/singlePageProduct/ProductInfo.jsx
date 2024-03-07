import React from "react";


const ProductInfo = ({ description, full_details }) => {

  return (
    <div className="ml-3">
      <div className=" mb-6  text-sm space-y-3">
        <hr className="border-t border-gray-200 " />

        {description.map((text, index) => (
          <div key={index}>
            <p className="text-gray-600 text-base font-semibold" >
              {text.title}
            </p>

            <p className="text-gray-600 font-sans">{text.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-gray-600 font-bold text-lg mb-1 border-b ">
          Full Details
        </p>
        {full_details.map((item, index) => (
          <div key={index}>
            {Object.entries(item).map(([key, value]) => (
              <div key={key} className="text-gray-600 font-sans gap-1 flex items-center">
                <p className="text-gray-700 font-bold text-base">{key}:</p> <p className="text-sm">{value}</p>
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
