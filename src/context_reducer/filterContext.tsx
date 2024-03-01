"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import productsData from "../../public/products.json";
import filterReducer from "./filterReducer";
import { Product2 as Product, Product as Product3 } from "../type/index";

export interface ContextState {
  allProducts: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[];
  featuredBed: Product[];
  featuredSofa: Product[];
  featuredDinning: Product[];
  featuredKidsFurniture: Product[];
  newProducts: Product[];
  categoryParameters: string[];
  brandParameters:string[];
}

const initialState: ContextState = {
  /** @ts-expect-error */
  allProducts: productsData,
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  featuredBed: [],
  featuredSofa: [],
  featuredDinning: [],
  featuredKidsFurniture: [],
  categoryParameters: [],
  brandParameters:[]
};

type FilterContext = ContextState & {
  updateFilteredProducts: (filteredProducts: Product[]) => void;
  getProductById: (productId: string) => Product | undefined;
  filterByCategory: (categoryName: string) => Product[];
  getCategoryAndProductQuantity: (
    property: string
  ) => { category: string; count: number }[];
  getFilteredData: (parameter: string) => void;
  getProductByMinMaxPrice: (
    minValue: number | undefined,
    maxValue: number | undefined
  ) => void;
  getProductsByColor: (color: string) => void;
  sortingProduct: (sortingCriteria: string) => void;
  setCategories: (categories: string, filterBy:string) => void;
  removeCategories: (categories: string, filterBy:string) => void;
  removeBrands:(brands: string,filterBy:string) => void;
};

export const FilterContext = createContext<FilterContext | null>(null);

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateFilteredProducts = (filteredProducts: Product[]) => {
    dispatch({ type: "UPDATE_FILTERED_DATA", payload: filteredProducts });
  };

  const getProductById = (productId: string) => {
    const foundProduct = state.allProducts.find(
      (product) => product.id === productId
    );
    return foundProduct;
  };

  const filterByCategory = (categoryName: string): Product[] => {
    return state.allProducts.filter((currentElement) => {
      return currentElement.category === categoryName;
    });
  };

  const getCategoryAndProductQuantity = (property: string) => {
    let categoryCounts: Record<string, number> = {};
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

    return [
      { category: "All", count: state.allProducts.length },
      ...uniqueData,
    ];
  };


  const setCategories = (data: string, filterBy:string) => {
    if(filterBy === "CATEGORIES"){
  /** @ts-expect-error */
      dispatch({ type: "ADD_CATEGORIES_PARAMETERS", payload: [data] })
    }
    else{
      /** @ts-expect-error */
      dispatch({ type: "ADD_BRAND_PARAMETERS", payload: [data] })
    }
  };

  const removeCategories = (data: string, filterBy:string) => {
    /** @ts-expect-error */
    dispatch({ type: "REMOVE_CATEGORIES_PARAMETERS", payload: {data, filterBy} });
};

const removeBrands = (data2: string, filterBy2:string)  => {
  /** @ts-expect-error */
  dispatch({ type: "REMOVE_BRAND_PARAMETERS", payload: {data2, filterBy2} });

};


  const getFilteredData = () => {
    let filteredProducts = [];
    if (state.categoryParameters.includes("All")) {
      filteredProducts = state.allProducts;
    } else {
      console.log( state.filteredProducts)
      filteredProducts = state.allProducts.filter(
        (product) =>
          state.categoryParameters.includes(product.category) ||
          state.brandParameters.includes(product.brand)
      );
      dispatch({ type: "FILTER_PRODUCTS", payload: filteredProducts });
    }


  };

  const getBrandFilteredData = () => {
    let filteredProducts = [];
    if (state.brandParameters.includes("All")) {
      filteredProducts = state.allProducts;
    } else {
      filteredProducts = state.filteredProducts.filter(
        (product) =>
          state.categoryParameters.includes(product.category) ||
          state.brandParameters.includes(product.brand)
      );
      dispatch({ type: "FILTER_PRODUCTS", payload: filteredProducts });
    }


  };

  useEffect(() => {
    getFilteredData();
  }, [state.categoryParameters]);

  useEffect(() => {
    getBrandFilteredData();
  }, [ state.brandParameters]);

  type Images = {
    [color: string]: string[];
  };

  const getProductsByColor = (color: string) => {
    const matchingProducts: Product[] = state.filteredProducts.filter(
      (product: any) => {
        const images: Images = product.images;
        if (images && images[color]) {
          return true;
        }
        return false;
      }
    );
    dispatch({ type: "FILTERED_BY_COLOR", payload: matchingProducts });
  };

  const getProductByMinMaxPrice = (
    minValue: number | undefined,
    maxValue: number | undefined
  ) => {
    if (minValue !== undefined && maxValue !== undefined) {
      const filtered = state.filteredProducts.filter(
        (product) => product.price >= minValue && product.price <= maxValue
      );
      dispatch({ type: "GET_PRODUCT_BY_MIN_MAX_PRICE", payload: filtered });
    }
  };

  function sortingProduct(sortingCriteria: string) {

    if (sortingCriteria === "Default sorting") {
      dispatch({
        type: "GET_SORTING_PRODUCT",
        payload: state.allProducts,
      });
    } else if (sortingCriteria === "Price Low-High") {
      const sortedProducts = state.filteredProducts
        .slice()
        .sort((a, b) => a.price - b.price);
      dispatch({
        type: "GET_SORTING_PRODUCT",
        payload: sortedProducts,
      });
    } else if (sortingCriteria === "Price High-Low") {
      const sortedProducts = state.filteredProducts
        .slice()
        .sort((a, b) => b.price - a.price);
      dispatch({
        type: "GET_SORTING_PRODUCT",
        payload: sortedProducts,
      });
    } else if (sortingCriteria === "Latest product") {
      const sortedProducts = state.filteredProducts.filter((currentElement) => {
        return currentElement.new_product === true;
      });

      dispatch({
        type: "GET_SORTING_PRODUCT",
        payload: sortedProducts,
      });
    }
  }

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
        categoryParameters: state.categoryParameters,
        brandParameters:state.brandParameters,
        updateFilteredProducts,
        getProductById,
        filterByCategory,
        getCategoryAndProductQuantity,
        getFilteredData,
        getProductByMinMaxPrice,
        getProductsByColor,
        sortingProduct,
        setCategories,
        removeCategories,
        removeBrands
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
