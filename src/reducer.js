export const initialState = {
  basket: [],
  user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE FROM BASKET":
      //We need to find the index of the product we want to remove
      //Instead of its ID
      const index = state.basket.findIndex(
        //Does any basket item match with the id of the clicked product
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          ` Can't remove (id: ${action.id}) as it's not in the basket`
        );
        /* 3:17:05 */
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
