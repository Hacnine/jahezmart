import React from "react";

const TitleBg= ({ image }) => {
  const styles = {
    container: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "90px",
    },
  };
  return <div style={styles.container} className="w-52 h-full"></div>;
};

export default TitleBg;
