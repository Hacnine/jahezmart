import { useDispatch } from "react-redux";
import { setCategories, setBrands, removeCategory, removeBrand } from "../../store/slices/filterSlice";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";


const CustomCheckBox= ({ label,filterBy }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (filterBy === "CATEGORIES") {
        dispatch(setCategories([label]));
      } else {
        dispatch(setBrands([label]));
      }
    } else {
      dispatch(removeCategory(label));
      dispatch(removeBrand(label));
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
