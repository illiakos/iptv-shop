// utils/cart.ts

import { productsMap } from '@/data/productsData';

export interface CartItem {
  id: string;
  url: string;
  image: string;
  title: string;
  description: string;
  price: number;
  stripePrice: string;
  quantity: number;
}

// Get the cart from local storage
export const getCart = (): CartItem[] => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

// Update the cart in local storage
const updateCartStorage = (cart: CartItem[]): void => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Add an item to the cart by product ID
export const addToCartThunk = (productId: string): void => {
  const product = productsMap[productId];

  if (!product) {
    console.error(`Product with ID "${productId}" not found.`);
    return;
  }

  const cart = getCart();
  const newItem: CartItem = {
    id: productId,
    title: product.title,
    price: product.price,
    stripePrice: product.stripePrice,
    url: product.url,
    image: product.image,
    description: product.description,
    quantity: 1
  };
  cart.push(newItem);
  updateCartStorage(cart);
};

// Remove an item from the cart by ID
export const removeFromCartThunk = (itemId: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== itemId);
  updateCartStorage(updatedCart);
};

// Clear the cart
export const clearCart = (): void => {
  localStorage.removeItem('cart');
};

// Calculate the total price of items in the cart
export const calculateCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price, 0);
};


// Increase the quantity of an item in the cart by ID
export const increaseQuantityThunk = (itemId: string): void => {
    const cart = getCart();
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        // Increase the quantity by 1
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCartStorage(updatedCart);
  };
  
  // Decrease the quantity of an item in the cart by ID
  export const decreaseQuantityThunk = (itemId: string): void => {
    const cart = getCart();
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        // Decrease the quantity by 1, but ensure it doesn't go below 1
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateCartStorage(updatedCart);
  };

  