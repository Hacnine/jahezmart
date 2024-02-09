import { Product2 as Product } from "../type/index";

interface FilterState {
  allProducts: Product[];
  filteredProducts: Product[];
  // filter:Product[];
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
      const featuredData = (categoryName: string) =>
        state.allProducts.filter((currentElement) => {
          return currentElement.featured === true && currentElement.category === categoryName;
        });


      const sofa = featuredData('sofa');
      const bed = featuredData('bed');
      const dinning = featuredData('dining');
      const kidsFurniture = featuredData('Kids Furniture');

      const newData = state.allProducts.filter((currentElement) => {
        return currentElement.new_product === true;
      });
      return {
        ...state,
        newProducts: newData,
        sofa:sofa,
        bed:bed,
        dinning:dinning,
        kidsFurniture:kidsFurniture
      };

      case "UPDATE_FILTERED_DATA":
  
        return {
          ...state,
          filteredProducts: action.payload
        };
  }
  return state;
};

export default filterReducer;
