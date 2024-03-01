"use client";

import React, { createContext, useReducer, useContext, useEffect } from "react";
import filterReducer from "./filterReducer";
import productsData from "../../public/products.json";
const initialState = {
  allProducts: productsData,
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  featuredBed: [],
  featuredSofa: [],
  featuredDinning: [],
  featuredKidsFurniture: [],
  categoryParameters: [],
  brandParameters: [],
};

export const FilterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const updateFilteredProducts = (filteredProducts) => {
    dispatch({ type: "UPDATE_FILTERED_DATA", payload: filteredProducts });
  };

  const getProductById = (productId) => {
    const foundProduct = state.allProducts.find(
      (product) => product.id === productId
    );
    return foundProduct;
  };

  const filterByCategory = (categoryName) => {
    return state.allProducts.filter((currentElement) => {
      return currentElement.category === categoryName;
    });
  };

  const getCategoryAndProductQuantity = (property) => {
    let categoryCounts = {};
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

  const setCategories = (data, filterBy) => {
    if (filterBy === "CATEGORIES") {
      dispatch({ type: "ADD_CATEGORIES_PARAMETERS", payload: [data] });
    } else {
      dispatch({ type: "ADD_BRAND_PARAMETERS", payload: [data] });
    }
  };

  const removeCategories = (data, filterBy) => {
    dispatch({
      type: "REMOVE_CATEGORIES_PARAMETERS",
      payload: { data, filterBy },
    });
  };

  const removeBrands = (data2, filterBy2) => {
    dispatch({
      type: "REMOVE_BRAND_PARAMETERS",
      payload: { data2, filterBy2 },
    });
  };

  const getFilteredData = () => {
    let filteredProducts = [];
    if (state.categoryParameters.includes("All")) {
      filteredProducts = state.allProducts;
    } else {
      if (state.brandParameters.length != 0) {
        filteredProducts = state.filteredProducts.filter((product) =>
          state.categoryParameters.includes(product.category)||
          state.brandParameters.includes(product.brand)
        );
      } else {
        filteredProducts = state.allProducts.filter((product) =>
          state.categoryParameters.includes(product.category)||
          state.brandParameters.includes(product.brand)
        );
      }
    }
    dispatch({ type: "FILTER_PRODUCTS", payload: filteredProducts });
  };

  const getBrandFilteredData = () => {
    let filteredProducts = [];
    if (state.brandParameters.includes("All")) {
      filteredProducts = state.allProducts;
    } else {
      if(state.categoryParameters.length!= 0){
        filteredProducts = state.filteredProducts.filter(
          (product) =>
            state.categoryParameters.includes(product.category) ||
            state.brandParameters.includes(product.brand)
        );
      }

      else{
        filteredProducts = state.allProducts.filter(
          (product) =>
            state.categoryParameters.includes(product.category) ||
            state.brandParameters.includes(product.brand)
        );
      }
    }

    dispatch({ type: "FILTER_PRODUCTS", payload: filteredProducts });
  };

  useEffect(() => {
    getFilteredData();
  }, [state.categoryParameters]);

  useEffect(() => {
    getBrandFilteredData();
  }, [state.brandParameters]);

  const getProductsByColor = (color) => {
    const matchingProducts = state.filteredProducts.filter((product) => {
      const images = product.images;
      if (images && images[color]) {
        return true;
      }
      return false;
    });
    dispatch({ type: "FILTERED_BY_COLOR", payload: matchingProducts });
  };

  const getProductByMinMaxPrice = (minValue, maxValue) => {
    if (minValue !== undefined && maxValue !== undefined) {
      const filtered = state.filteredProducts.filter(
        (product) => product.price >= minValue && product.price <= maxValue
      );
      dispatch({ type: "GET_PRODUCT_BY_MIN_MAX_PRICE", payload: filtered });
    }
  };

  function sortingProduct(sortingCriteria) {
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
        brandParameters: state.brandParameters,
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
        removeBrands,
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
