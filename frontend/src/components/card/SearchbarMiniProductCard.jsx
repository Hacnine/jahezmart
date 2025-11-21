import React, { useState } from "react";
import StarRating from "../common/ui/StarRating";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import Link from "next/link";
import TooltipWrapper from "../wrapper/TooltipWrapper";
import { useRouter } from "next/navigation";

const SearchbarMiniProductCard= ({
  id,
  name,
  category,
  price,
  discount,
  images,
  colors,
  star,
  quantity,
  rating,
  reviews,
  stock,
}) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cart);
  const [selected, setSelected] = useState(colors[0]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("Added to cart!");
  const firstColorKey = Object.keys(images)[0];
  const firstImagePath = (images)[
    firstColorKey
  ]?.[0];

  const router = useRouter();

  const updateSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryString = `/id=${id}&&name=${name}`;
    router.push(`/shop${queryString}`);
  };


  return (
    <div className=" mb-2 relative  rounded-md overflow-hidden rounded-tr-3xl rounded-bl-3xl center  w-[350px] h-[95px] border-b border-l z-50">
      <div className="w-fit h-fit relative group overflow-clip">
        <div className="start relative group  ">
          <img src={firstImagePath} alt="" className="w-[65%]  h-[55%] " />
        </div>

        <div
          className="absolute inset-0 bg-opacity-30 bg-blue-200 hover:bg-black
          group-hover:bg-opacity-30 rounded-md transition-color duration-300  w-[65%]  h-[55%]border border-black"
        >
          <TooltipWrapper open={open} setOpen={setOpen} message={message}>
            <button
              className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute z-10 md:bottom-0 bottom-0 py-1 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl "
              onClick={() => {
                const existingProduct = cartProducts.find((item) => item.id === id);
                if (existingProduct) {
                  setMessage("The Product Exist In Your Cart!");
                } else {
                  dispatch(addToCart({
                    id,
                    name,
                    firstImagePath,
                    quantity,
                    price,
                    stock,
                    selected,
                  }));
                  setMessage("Added to cart!");
                }
                setOpen(true);
                setTimeout(() => setOpen(false), 1000);
              }}
            >
              <ShoppingCart fontSize="small" />
            </button>
          </TooltipWrapper>
        </div>
      </div>

      <div className=" p-3 w-full ">
        {/* <Link href={`/shop/${id}`}> */}
          <h3
            className=" font-semibold font-sans uppercase leading-5 text-xs  hover:text-chocolate cursor-pointer"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "8rem",
            }}
            onClick={updateSearchParams}
          >
            {name}
          </h3>
        {/* </Link> */}
        <span className="font-extrabold text-xs text-red-600 leading-5">
          <span className=" font-extrabold"> ৳</span> {price}
        </span>

        <div className="start text-xs">
          <StarRating rating={rating} reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default SearchbarMiniProductCard;
