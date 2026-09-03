import { createContext, useContext } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType { 
    items: CartItem[];
    isCartOpen: boolean;
    isCheckoutOpen: boolean;
    addItem: (item: Omit<CartItem, "quantity">) => void;
     removeItem: (id: string) => void;
   updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    openCheckout: () => void;
    closeCheckout: () => void;
    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};