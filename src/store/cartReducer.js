const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,

};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

        const updatedTotalPrice = state.totalPrice + action.payload.price;
        const updatedTotalQuantity = state.totalQuantity + 1; // increment totalQuantity

        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
          totalQuantity: updatedTotalQuantity,
        };
      } else {
        const newItem = {
          id: action.payload.id,
          img: action.payload.img,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        };

        const updatedItems = [...state.items, newItem];
        const updatedTotalPrice = state.totalPrice + action.payload.price;
        const updatedTotalQuantity = state.totalQuantity + 1; // increment totalQuantity


        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
          totalQuantity: updatedTotalQuantity,

        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemToRemoveIndex >= 0) {
        const itemToRemove = state.items[itemToRemoveIndex];
        const updatedItems = [...state.items];
        if (itemToRemove.quantity === 1) {
          updatedItems.splice(itemToRemoveIndex, 1);
        } else {
          updatedItems[itemToRemoveIndex] = {
            ...itemToRemove,
            quantity: itemToRemove.quantity - 1,
            
          };
        }

        const updatedTotalPrice = state.totalPrice - itemToRemove.price;
        const updatedTotalQuantity = state.totalQuantity - 1; // decrement totalQuantity


        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedTotalPrice,
          totalQuantity: updatedTotalQuantity,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
export default cartReducer;
