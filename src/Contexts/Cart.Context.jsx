import React, { createContext, useEffect, useState } from "react";

const addToCart = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(reduceItemQuantityFromCart(cartItems, cartItemToRemove));
  };

  const deleteItemFromCart = (itemToRemove) => {
    setCartItems(removeItem(cartItems, itemToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  },[cartItems])

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
