"use client";

import React, { useEffect, useState } from "react";
import { useFilterContext } from "../../../context_reducer/filterContext";
import { useCartContext } from "../../../context_reducer/cartContext";
import CategorySlider from "../../../components/slider/CategorySlider";
import { Box, Tab, Tabs } from "@mui/material";
import ProductInfo from "../../../components/singlePageProduct/ProductInfo";
import ProductReview from "../../../components/singlePageProduct/ProductReview";
import QuestionAndAnswer from "../../../components/singlePageProduct/QuestionAndAnswer";
import QuickView from "../../../components/common/ui/QuickView";
const Page = ({ params }) => {
  const { getProductById } = useFilterContext();
  const product = getProductById(params.id);
  const { category, description, full_details, id } = product;

  const { wishListProducts } = useCartContext();

  const [favorite, setFavorite] = useState(false);

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
    <>
      <div className="wrapper my-5">
        {/* <!-- Product View --> */}
        <QuickView id={params.id} />
        {/* <!-- Product View end --> */}

        <div className="">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{ style: { backgroundColor: "orangered" } }}
            >
              <Tab label="Product Info" sx={tabStyles} />
              <Tab label="Question & Answer" sx={tabStyles} />
              <Tab label="Review (2)" sx={tabStyles} />
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

        <h1 className="lg:text-xl text-lg  text-gray-800 font-bold mb-5">
          Related Products
        </h1>
        <CategorySlider category={category} />
      </div>
    </>
  );
};

export default Page;
