// import React, { createContext, useReducer, useContext } from "react";
// import productsData from "../../public/products3.json";
// import filterReducer from "./filterReducer";
// import { Product } from '../type/index';

// interface initialStateType {
//   allProducts: Product[];
//   filterContext: Product[];
//   isLoading: boolean;
// }

// const initialState: initialStateType = {
//   allProducts: productsData,
//   filterContext: [],
//   isLoading: true,
// };

// const FilterContext = createContext(initialState);

// const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(filterReducer, initialState);

//   const getFeaturedData = () => {
//     const featureData = state.allProducts.filter((currentElement) => {
//       return currentElement.featured === true;
//     });
//     return featureData;
//   };

//   const getNewData = () => {
//     const newProduct = state.allProducts.filter((currentElement) => {
//       return currentElement.new_product === true;
//     });
//     return newProduct;
//   };

//   type ExtendedStateType = initialStateType & {
//     getFeaturedData: () => Product[];
//     getNewData: () => Product[];
//   };

//   const extendedState: ExtendedStateType = {
//     ...state,
//     getFeaturedData,
//     getNewData,
//   };

//   return (
//     <FilterContext.Provider value={extendedState}>
//       {..state}
//     </FilterContext.Provider>
//   );
// };

// export const useFilterContext = () => {
//   return useContext(FilterContext);
// };

// export default FilterContextProvider;
