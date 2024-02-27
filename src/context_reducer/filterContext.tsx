"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import filterReducer from "./filterReducer";
import {
  AddToWishListProps,
  Product2 as Product,
  Product as Product3,
} from "../type/index";
import Home from "../app/home/page";

export interface ContextState {
  allProducts: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  featuredBed: Product[];
  featuredSofa: Product[];
  featuredDinning: Product[];
  featuredKidsFurniture: Product[];
  newProducts: Product[];

}

const initialState: ContextState = {
  allProducts: productsData,
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  featuredBed: [],
  featuredSofa: [],
  featuredDinning: [],
  featuredKidsFurniture: [],

};

type FilterContext = ContextState & {
  updateFilteredProducts: (filteredProducts: Product[]) => void;
  getProductById: (productId: string) =>Product | undefined;
  filterByCategory:(categoryName:string) => Product[];
  getCategoryAndProductQuantity: (property: string) => { category: string; count: number }[];
  getFilteredData:(parameter:string) => void;
};

export const FilterContext = createContext<FilterContext | null>(null);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateFilteredProducts = (filteredProducts: Product[]) => {
    dispatch({ type: "UPDATE_FILTERED_DATA", payload: filteredProducts });
  };

  const getProductById = (productId: string) => {
    const foundProduct = state.allProducts.find((product) => product.id === productId);
    console.log("Found product:", foundProduct);
    return foundProduct;
  };

  const filterByCategory = (categoryName: string): Product[] => {
    return state.allProducts.filter((currentElement) => {
      return currentElement.category === categoryName;
    });
  };


  const getCategoryAndProductQuantity = (property: string) => {
    let categoryCounts: Record<string, number> = {}; // Explicitly define the type
    state.allProducts.forEach((currentElement) => {
      const category = currentElement[property];
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }
    });
  
    let uniqueCategories = Object.keys(categoryCounts);
    let uniqueData = uniqueCategories.map((category) => ({
      category: category,
      count: categoryCounts[category],
    }));
  
    return [{ category: "All", count: state.allProducts.length }, ...uniqueData];
  };


  const getFilteredData = (parameter: string) => {
    let  filteredProducts = [];
    if(parameter === "All"){
       filteredProducts = state.allProducts;
    }
    else {
       filteredProducts = state.allProducts.filter(
        (product) => product.category === parameter || product.brand === parameter
      );
      console.log(filteredProducts)
    }
    

    dispatch({ type: "FILTERED_BY_BRAND_AND_CATEGORY", payload: filteredProducts });
  };
    
  useEffect(() => {
    dispatch({ type: "UPDATE_FILTERED_DATA" });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        allProducts: state.allProducts,
        filteredProducts: state.filteredProducts,
        featuredProducts: state.featuredProducts,
        newProducts: state.newProducts,
        featuredBed: state.featuredBed,
        featuredSofa: state.featuredSofa,
        featuredDinning: state.featuredDinning,
        featuredKidsFurniture: state.featuredKidsFurniture,
        updateFilteredProducts,
        getProductById,
        filterByCategory,
        getCategoryAndProductQuantity,
        getFilteredData
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
