import React from 'react';

interface CustomSliderBackgroundProps {
  image: string;
}

const CustomSliderBackground: React.FC<CustomSliderBackgroundProps> = ({ image }) => {
 
    const styles = {
        container: {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '',
          
        },
    };

  return (
    <div className="md:h-[500px] h-[300px] w-full" style={styles.container}></div>
  );
}

export default CustomSliderBackground;
