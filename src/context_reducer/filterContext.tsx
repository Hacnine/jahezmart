"use client"
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import filterReducer from "./filterReducer";
import { Product2 as Product } from "../type/index";
import Home from "../app/home/page";

interface initialStateType {
  allProducts: Product[];
  filteredProducts: Product[];
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
  newProducts: Product[],
}

const initialState: initialStateType = {
  allProducts: productsData,
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  bed:[] ,
  sofa:[] ,
  dinning:[] ,
  kidsFurniture:[],
};

type FilterContext = {
  allProducts: Product[];
  filteredProducts: Product[];
  newProducts: Product[],
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
  getFeaturedData: () => Product[];
  getNewData: () => Product[];
  updateFilteredProducts: (filteredProducts: Product[]) => void; 
};

export const FilterContext = createContext<FilterContext | null>(null);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const getFeaturedData = () => (
    dispatch({ type: "GET_FEATURED_DATA", payload: state.allProducts })
  );

  const getNewData = () => {
    dispatch({ type: "GET_NEW_PRODUCT_DATA" });

    const newProduct = state.allProducts.filter((currentElement) => {
      return currentElement.new_product === true;
    });
    return newProduct;
  };

  const updateFilteredProducts = (filteredProducts: Product[]) => {
    dispatch({ type: "UPDATE_FILTERED_DATA", payload: filteredProducts });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTERED_DATA"});
  }, []);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        getFeaturedData,
        getNewData,
        updateFilteredProducts 
      }}
    >
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
