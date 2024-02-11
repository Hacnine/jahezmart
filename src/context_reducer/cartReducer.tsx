import { Product2 as Product } from "../type/index";

interface FilterState {
  filteredProducts: Product[];
  cartProducts: Product[];

}

interface FilterAction {
  type: string;
  payload?: Product[];
}

const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "UPDATE_FILTERED_DATA":
      return {
        ...state,
        filteredProducts: action.payload || state.filteredProducts,
      };
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        // cartProducts: [...state.cartProducts, action.payload],
      };
    }
    return state;
  };
  
  export default filterReducer;
