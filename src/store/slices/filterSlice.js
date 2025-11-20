"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  newProducts: [],
  featuredBed: [],
  featuredSofa: [],
  featuredDinning: [],
  featuredKidsFurniture: [],
  categoryParameters: [],
  brandParameters: [],
  isLoading: false,
};

// Helper function to apply filters
const applyFilters = (state) => {
  let filtered = state.allProducts;

  // Apply category filter
  if (state.categoryParameters.length > 0 && !state.categoryParameters.includes("All")) {
    filtered = filtered.filter((product) =>
      state.categoryParameters.includes(product.category)
    );
  }

  // Apply brand filter
  if (state.brandParameters.length > 0 && !state.brandParameters.includes("All")) {
    filtered = filtered.filter((product) =>
      state.brandParameters.includes(product.brand)
    );
  }

  state.filteredProducts = filtered;
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setApiData: (state, action) => {
      const items = action.payload || [];
      state.allProducts = items;
      state.filteredProducts = items;
    },
    updateFilteredData: (state, action) => {
      const source = action.payload || state.allProducts;
      state.filteredProducts = source;

      const featuredData = (categoryName) =>
        state.allProducts.filter(
          (p) => p.featured === true && p.category === categoryName
        );

      state.featuredSofa = featuredData("sofa");
      state.featuredBed = featuredData("bed");
      state.featuredDinning = featuredData("dining");
      state.featuredKidsFurniture = featuredData("Kids Furniture");

      state.newProducts = state.allProducts.filter((p) => p.newProduct === true || p.new_product === true);
      state.isLoading = false;
    },
    setCategories: (state, action) => {
      state.categoryParameters = [
        ...(state.categoryParameters || []),
        ...(Array.isArray(action.payload) ? action.payload : [action.payload]),
      ];
      // Apply filter automatically
      applyFilters(state);
    },
    setBrands: (state, action) => {
      state.brandParameters = [
        ...(state.brandParameters || []),
        ...(Array.isArray(action.payload) ? action.payload : [action.payload]),
      ];
      // Apply filter automatically
      applyFilters(state);
    },
    removeCategory: (state, action) => {
      const data = action.payload;
      state.categoryParameters = (state.categoryParameters || []).filter(
        (c) => c !== data
      );
      // Apply filter automatically
      applyFilters(state);
    },
    removeBrand: (state, action) => {
      const data = action.payload;
      state.brandParameters = (state.brandParameters || []).filter(
        (b) => b !== data
      );
      // Apply filter automatically
      applyFilters(state);
    },
    filterProducts: (state, action) => {
      state.filteredProducts = action.payload || state.filteredProducts;
    },
    sortingProduct: (state, action) => {
      const sortingCriteria = action.payload;
      let sorted = [...state.filteredProducts];

      if (sortingCriteria === "Default sorting") {
        sorted = state.allProducts;
      } else if (sortingCriteria === "Price Low-High") {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortingCriteria === "Price High-Low") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sortingCriteria === "Latest product") {
        sorted = sorted.filter((p) => p.newProduct === true || p.new_product === true);
      }

      state.filteredProducts = sorted;
    },
    filterByColor: (state, action) => {
      const color = action.payload;
      const matchingProducts = state.allProducts.filter((product) => {
        const images = product.images;
        if (images && images[color]) {
          return true;
        }
        return false;
      });
      state.filteredProducts = matchingProducts;
    },
    filterByPriceRange: (state, action) => {
      const { minValue, maxValue } = action.payload;
      if (minValue !== undefined && maxValue !== undefined) {
        const filtered = state.filteredProducts.filter(
          (product) => product.price >= minValue && product.price <= maxValue
        );
        state.filteredProducts = filtered;
      }
    },
  },
});

export const {
  setLoading,
  setApiData,
  updateFilteredData,
  setCategories,
  setBrands,
  removeCategory,
  removeBrand,
  filterProducts,
  sortingProduct,
  filterByColor,
  filterByPriceRange,
} = filterSlice.actions;

export default filterSlice.reducer;
