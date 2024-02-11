"use client"
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import filterReducer from "./filterReducer";
import { Product2 as Product } from "../type/index";
import Home from "../app/home/page";

interface ContextState  {
  allProducts: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[],
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
  newProducts: Product[],
}

const initialState: ContextState  = {
  allProducts: productsData,
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  bed:[] ,
  sofa:[] ,
  dinning:[] ,
  kidsFurniture:[],
};

type FilterContext = ContextState & {
  updateFilteredProducts: (filteredProducts: Product[]) => void;
};

export const FilterContext = createContext<FilterContext | null>(null);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateFilteredProducts = (filteredProducts: Product[]) => {
    dispatch({ type: "UPDATE_FILTERED_DATA", payload: filteredProducts });
  };

  const addToCart = (cartItem:Product[] ) => {
    dispatch({ type: "ADD_TO_CART",payload: cartItem });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTERED_DATA"});
  }, []);

  return (
    <FilterContext.Provider
      value={{
        allProducts: state.allProducts,
        filteredProducts: state.filteredProducts,
        featuredProducts: state.featuredProducts,
        newProducts: state.newProducts,
        bed: state.bed,
        sofa: state.sofa,
        dinning: state.dinning,
        kidsFurniture: state.kidsFurniture,
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
