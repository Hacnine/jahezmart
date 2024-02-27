import { useFilterContext } from "@/context_reducer/filterContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

interface CustomCheckBoxProps{
    label: string;
}

// const featuredData = (categoryName: string) =>
// state.allProducts.filter((currentElement) => {
//   return (
//     currentElement.featured === true &&
//     currentElement.category === categoryName
//   );
// });
const CustomCheckBox:React.FC<CustomCheckBoxProps> = ({label}) => {

  const {getFilteredData} = useFilterContext();

  return (
    <FormControlLabel
    label={<p className="text-gray-600 capitalize">{label}</p>}
    control={
      <Checkbox
        sx={{
          color:"orangered",
          '&.Mui-checked': {
            color:"orangered",
          },
         
         
        }}
        disableRipple
        inputProps={{ "aria-label": "Checkbox demo" }}
        size="small"
        onClick={()=> getFilteredData(label)}
      />
    }
  />
  );
};

export default CustomCheckBox;
