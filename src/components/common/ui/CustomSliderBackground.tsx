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
          height: '500px',
          
        },
    };

  return (
    <div className="h-full w-full" style={styles.container}></div>
  );
}

export default CustomSliderBackground;
