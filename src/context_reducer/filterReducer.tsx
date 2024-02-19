import { Product2 as Product } from "../type/index";
import { ContextState } from "./filterContext";
// interface AddToWishListProps {
//   id?: string;
//   name?: string;
//   firstImagePath?: string;
//   price?: number;
// }

// interface FilterState {
//   allProducts: Product[];
//   filteredProducts: Product[];
//   featuredProducts: Product[],
//   newProducts: Product[],
//   featuredBed:Product[] ,
//   featuredSofa:Product[] ,
//   featuredDinning:Product[] ,
//   featuredKidsFurniture:Product[],
//   bed:Product[],
//   sofa:Product[],
//   dinning:Product[],
//   kidsFurniture:Product[],
//   office:Product[],
//   mattress:Product[]
// }

interface FilterAction {
  type: string;
  payload?: Product[] ;
}

const filterReducer = (state: ContextState, action: FilterAction) => {
  switch (action.type) {
    case "UPDATE_FILTERED_DATA":
      const featuredData = (categoryName: string) =>
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
   
  }
  return state;
};

export default filterReducer;
