import { useFilterContext } from "../../context_reducer/filterContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";


const CustomCheckBox= ({ label,filterBy }) => {
  const { setCategories, removeCategories, removeBrands} = useFilterContext();

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setCategories(label, filterBy);
      
    } else {
      
      removeCategories(label, filterBy);
      removeBrands(label, filterBy);
    }
  };

  return (
    <FormControlLabel
      label={<p className="text-gray-600 capitalize text-sm">{label}</p>}
      control={
        <Checkbox
          sx={{
            color: "orangered",
            "&.Mui-checked": {
              color: "orangered",
            },
          }}
          disableRipple
          inputProps={{ "aria-label": "Checkbox demo" }}
          size="small"
          onChange={handleCheckboxChange} // Use onChange event
        />
      }
    />
  );
};

export default CustomCheckBox;
