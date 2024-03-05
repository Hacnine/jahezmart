import React from "react";

const CustomSliderBackground = ({
  image,title1, title2, title3,title4,title5
}) => {
  const styles = {
    container: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "",
    },
  };

  return (
    <div
      className="md:h-[500px] h-[300px] w-full center"
      style={styles.container}
    >

      <div className="h-fit  w-[90%] text-white lg:text-[50px] md:text-[40px] text-xl space-y-2   gap-1">
        <div className="center">
        <span className="  leading-none py-2 mr-1 w-fit" style={{color:"red"}}>{title1}</span>
        <span className="  py-2 mr-2">{title2}</span>
        <span className=" leading-none py-2 w-fit" style={{color:"orangered"}}>{title3}</span>
        <span>{title4}</span>
        <span className="  leading-none py-2 w-fit" style={{color:"orangered w-fit"}}>{title5}</span>
        </div>

      </div>
    </div>
  );
};

export default CustomSliderBackground;
