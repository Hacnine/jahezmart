
const cartReducer = (state, action) => {
  switch (action.type) {


    case "ADD_TO_CART":

      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

      case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter(item => item.id !== action.payload),

      };

      case "ADD_TO_Wish_List":
      return {
        ...state,
        wishListProducts: [...state.wishListProducts, action.payload],
      };

      case "REMOVE_FROM_Wish_List":
      return {
        ...state,
        wishListProducts: state.wishListProducts.filter(item => item.id !== action.payload),

      };

      case "UPDATE_QUANTITY":
        const { id, quantity } = action.payload;
  
        const updatedCartProducts = state.cartProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: quantity };
          }
          return product;
        });
  
        return {
          ...state,
          cartProducts: updatedCartProducts,
        };

      default:
        return state;
  }
  
};

export default cartReducer;
