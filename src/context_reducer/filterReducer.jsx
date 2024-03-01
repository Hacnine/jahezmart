

const filterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FILTERED_DATA":
      const featuredData = (categoryName) =>
        state.allProducts.filter((currentElement) => {
          return (
            currentElement.featured === true &&
            currentElement.category === categoryName
          );
        });

      const featuredSofa = featuredData("sofa");
      const featuredBed = featuredData("bed");
      const featuredDinning = featuredData("dining");
      const featuredKidsFurniture = featuredData("Kids Furniture");

      const newData = state.allProducts.filter((currentElement) => {
        return currentElement.new_product === true;
      });

      return {
        ...state,
        filteredProducts: action.payload || state.allProducts,
        newProducts: newData,
        featuredSofa: featuredSofa,
        featuredBed: featuredBed,
        featuredDinning: featuredDinning,
        featuredKidsFurniture: featuredKidsFurniture,
      };

    case "FILTERED_BY_BRAND_AND_CATEGORY":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };

    case "FILTERED_BY_COLOR":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };

    case "GET_PRODUCT_BY_MIN_MAX_PRICE":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };

    case "GET_SORTING_PRODUCT":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };

    case "ADD_CATEGORIES_PARAMETERS":
      return {
        ...state,
        categoryParameters: [ ...(state.categoryParameters || []), // Ensure it's an array (default to empty array)
        ...action.payload || [], // Cast action.payload to an array of Product2
    ],
      };

    case "ADD_BRAND_PARAMETERS":
      return {
        ...state,
        brandParameters: [...(state.brandParameters || []), ...action.payload || []],
      };

    case "REMOVE_CATEGORIES_PARAMETERS":
     
      const { data, filterBy } = action.payload;
/** @ts-expect-error */
      let temporaryFilteredCategories= [];

      if (filterBy === "CATEGORIES") {
        temporaryFilteredCategories = state.categoryParameters.filter(
          (category) => category !== data
        );
      } 
      // console.log(temporaryFilteredCategories);
      return {
        ...state,
       
        categoryParameters: temporaryFilteredCategories,
      };

    case "REMOVE_BRAND_PARAMETERS":
     
      const {data2, filterBy2} = action.payload;
/** @ts-expect-error */
      let temporaryFilteredBrands = [];

      if (filterBy2 === "BRANDS") {
         temporaryFilteredBrands = state.brandParameters.filter(brand => brand !== data2);
      } 
      // console.log(temporaryFilteredBrands)
      return {
        ...state,
       
        brandParameters: temporaryFilteredBrands,
      };

    case "FILTER_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };
  }
  return state;
};

export default filterReducer;
