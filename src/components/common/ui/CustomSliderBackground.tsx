import React from 'react'
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

        // container: {
        //     backgroundImage: `url(${image})`,
        //     backgroundSize: "100% 100%",
        //     backgroundRepeat: "no-repeat",
        //     height: "600px",
        //     backgroundPosition: 'center', // Center the background image
        //     backgroundAttachment: 'fixed',
        //   },
      
      }
  return (
    <div 
    className=" h-full w-full "
    style={styles.container}>

    
    </div>
  )
}

export default CustomSliderBackground
