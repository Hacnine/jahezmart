import React from "react";

interface TitleBg {
  image: string;
}

const TitleBg: React.FC<TitleBg> = ({ image }) => {
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
