"use client";

import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useFilterContext } from "../../../../context_reducer/filterContext";
import { useCartContext } from "../../../../context_reducer/cartContext";
import QuickView from "../../../../components/common/ui/QuickView";
import ProductInfo from "../../../../components/singlePageProduct/ProductInfo";
import QuestionAndAnswer from "../../../../components/singlePageProduct/QuestionAndAnswer";
import ProductReview from "../../../../components/singlePageProduct/ProductReview";
import CategorySlider from "../../../../components/slider/CategorySlider";

const Page = ({ params }) => {
  const [favorite, setFavorite] = useState(false);
  const decodedString = decodeURIComponent(params.id);
  const keyValuePairs = decodedString.split("&");

  let productId;
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    if (key === "id") {
      productId = value;
      break;
    }
  }

  console.log("Extracted id:", productId);

  const { getProductById } = useFilterContext();
  const { wishListProducts } = useCartContext();
  const product = getProductById(productId);
  const { category, description, full_details, id } = product;

  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    border: "1px solid #ccc",
    borderBottom: "none",
    mx: 1,
    fontSize: "14px",
    fontWeight: "bold",
    "&.Mui-selected": {
      color: "orangered",
    },
  };
  return (
    <div className="wrapper my-5 overflow-clip">
      <QuickView id={productId} />
      <div className="overflow-hidden">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { backgroundColor: "orangered" } }}
          >
            <Tab label="Product Info" sx={tabStyles} />
            <Tab label="Question & Answer" sx={tabStyles} />
            <Tab
              label="Review (2)"
              sx={tabStyles}
              className="md:block hidden"
            />
          </Tabs>
          <div role="tabpanel" hidden={value !== 0}>
            <ProductInfo
              description={description}
              full_details={full_details}
            />
          </div>
          <div role="tabpanel" hidden={value !== 1}>
            <QuestionAndAnswer />
          </div>
          <div role="tabpanel" hidden={value !== 2}>
            <ProductReview />
          </div>
        </Box>
      </div>

      <h1 className=" text-lg  text-gray-700 font-bold mb-5 ml-4">
        You May Like
      </h1>
      <CategorySlider category={category} />
    </div>
  );
};

export default Page;
