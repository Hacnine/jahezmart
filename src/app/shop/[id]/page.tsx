"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFilterContext } from "@/context_reducer/filterContext";
import StarRating from "@/components/common/ui/StarRating";
import ColorButton from "@/components/buttons/ColorButton";
import Link from "next/link";
import {
  Badge,
  BadgeTwoTone,
  Facebook,
  FavoriteBorder,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { BsInstagram, BsStarFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import { useCartContext } from "@/context_reducer/cartContext";
import TooltipWrapper from "@/components/wrapper/TooltipWrapper";
import CategorySlider from "@/components/slider/CategorySlider";
import { DescriptionItem } from "@/type";
import { FaFacebookF, FaRegStar, FaStar } from "react-icons/fa";
import StarReview from "@/components/common/ui/StarReview";
import { LuBadgeCheck, LuBadgePercent } from "react-icons/lu";
import { Box, Tab, Tabs } from "@mui/material";
import ProductInfo from "@/components/singlePageProduct/ProductInfo";
import ProductReview from "@/components/singlePageProduct/ProductReview";
import QuestionAndAnswer from "@/components/singlePageProduct/QuestionAndAnswer";
import QuickView from "@/components/common/ui/QuickView";
const Page = ({ params }: { params: { id: string } }) => {
  const { getProductById } = useFilterContext();
  const product = getProductById(params.id);
  const {
    /** @ts-expect-error */
    category,
    /** @ts-expect-error */
    description,
    /** @ts-expect-error */
    full_details,
    /** @ts-expect-error */
    id,
  } = product;

  const { wishListProducts } = useCartContext();

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const existingProduct = wishListProducts.find((item) => item.id === id);
    if (existingProduct) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [wishListProducts, id]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
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