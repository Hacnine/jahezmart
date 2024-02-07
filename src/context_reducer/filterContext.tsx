"use client"

import React, { createContext, useReducer, useContext } from "react";
import productsData from "../../public/products.json";
import filterReducer from "./filterReducer";
import { Product2 as Product } from "../type/index";
import Home from "../app/home/page";

interface initialStateType {
  allProducts: Product[];
  filterProducts: Product[];
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
  newProducts: Product[],
  // isLoading: boolean;
}

const initialState: initialStateType = {
  allProducts: productsData,
  filterProducts: [],
  featuredProducts: [],
  newProducts: [],
  bed:[] ,
  sofa:[] ,
  dinning:[] ,
  kidsFurniture:[]
  // isLoading: true,
};

type FilterContext = {
  allProducts: Product[];
  filterProducts: Product[];
  newProducts: Product[],
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
  // isLoading: boolean;
  getFeaturedData: () => Product[];
  getNewData: () => Product[];
};


export const FilterContext = createContext<FilterContext | null>(null);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const getFeaturedData = () => {

    // dispatch({ type: "SET_API_DATA", payload: products });
      dispatch({ type: "GET_FEATURED_DATA", payload: state.allProducts });

    // console.log('Alhamdulillah!')
   
  };

  const getNewData = () => {
    dispatch({ type: "GET_NEW_PRODUCT_DATA" });

    const newProduct = state.allProducts.filter((currentElement) => {
      return currentElement.new_product === true;
    });
    return newProduct;
  };

  type ExtendedStateType = initialStateType & {
    getFeaturedData: () => Product[];
    getNewData: () => Product[];
  };

  // const extendedState: ExtendedStateType = {
  //   ...state,
  //   getFeaturedData,
  //   getNewData,
  // };

  return (
    <FilterContext.Provider value={{ ...state, getFeaturedData, getNewData }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a ThemeProvider");
  }
  return context;
};

export default FilterContextProvider;
