import { Product2 as Product } from "../type/index";

interface AddToWishListProps {
  id?: string;
  name?: string;
  firstImagePath?: string;
  price?: number;
}

interface FilterState {
  allProducts: Product[];
  filteredProducts: Product[];
  featuredProducts: Product[],
  newProducts: Product[],
  bed:Product[] ,
  sofa:Product[] ,
  dinning:Product[] ,
  kidsFurniture:Product[],
}

interface FilterAction {
  type: string;
  payload?: Product[] ;
}

const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case "UPDATE_FILTERED_DATA":
      const featuredData = (categoryName: string) =>
      state.allProducts.filter((currentElement) => {
        return (
          currentElement.featured === true &&
          currentElement.category === categoryName
        );
      });

    const sofa = featuredData("sofa");
    const bed = featuredData("bed");
    const dinning = featuredData("dining");
    const kidsFurniture = featuredData("Kids Furniture");

    const newData = state.allProducts.filter((currentElement) => {
      return currentElement.new_product === true;
    });

      return {
        ...state,
        filteredProducts: action.payload || state.allProducts,
        newProducts: newData,
        sofa: sofa,
        bed: bed,
        dinning: dinning,
        kidsFurniture: kidsFurniture,
      };
   
  }
  return state;
};

export default filterReducer;
