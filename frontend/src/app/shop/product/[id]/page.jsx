import React from "react";
import FullDetails from './FullDetails'

export const generateMetadata = ({params}) =>{

  const decodedString = decodeURIComponent(params.id);
  
  // Step 2: Extract the ID value
  const keyValuePairs = decodedString.split("&");
  let nameValue;
  
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    if (key === "name") {
      nameValue = value;
      break;
    }
  }
  
  console.log("Extracted id:", nameValue);
  return {
    title:`${nameValue}`
  };
}

const Page = ({ params }) => {

  return (
    <div>
      <FullDetails params={params} />
    </div>
  );
};

export default Page;
