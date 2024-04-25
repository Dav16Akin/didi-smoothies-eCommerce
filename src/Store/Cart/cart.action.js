import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../Utils/Reducer/reducer.utils";

const addToCart = (cartItems, productToAdd) => {
  console.log(cartItems);
  console.log(productToAdd);
  const existngItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existngItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceItemQuantityFromCart = (cartItems, cartItemToRemove) => {
  const existngItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existngItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeItem = (cartItems, itemToRemove) => {
  const existngItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existngItem) {
    return cartItems.filter((cartItem) => cartItem !== itemToRemove);
  }
};

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = reduceItemQuantityFromCart(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems, itemToRemove) => {
  const newCartItems = removeItem(cartItems, itemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
