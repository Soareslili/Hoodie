import { useState, useCallback } from "react";
import { CartContext, type CartItem } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
 

  const addItem = useCallback((newItem: Omit<CartItem, "quantity">) => {
    
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }]; 
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    },
    [removeItem]
  );



  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const openCheckout = useCallback(() => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  }, []);
  const closeCheckout = useCallback(() => setIsCheckoutOpen(false), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = parseFloat(
  items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
);


  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        isCheckoutOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};