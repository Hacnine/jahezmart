import { Product2 as Product } from "../type/index";

interface FilterState {
  allProducts: Product[];
  filterProducts: Product[];
  // featuredProducts: Product[],
  // newProducts: Product[],
}

interface FilterAction {
  type: string;
  payload?: Product[];
}

const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "GET_FEATURED_DATA":
      const featureData = state.allProducts.filter((currentElement) => {
        return currentElement.featured === true;
      });

      const newData = state.allProducts.filter((currentElement) => {
        return currentElement.new_product === true;
      });
      return {
        ...state,
        featuredProducts:featureData,
        newProducts:newData,
      };
  }
  return state;
};

export default filterReducer;
