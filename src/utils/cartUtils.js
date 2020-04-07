export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExistingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (isExistingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromQuantity = (cartItems, cartItemToRemove) => {
  const isExistingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (isExistingCartItem.quantity === 1) {
    return cartItems;
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
