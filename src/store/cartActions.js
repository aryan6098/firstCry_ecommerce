import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL_PRICE } from "./cartTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};


export const calculateTotalPrice = () => {
  return {
    type: CALCULATE_TOTAL_PRICE,
  };
};

