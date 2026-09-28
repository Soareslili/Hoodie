import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../Contexts/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/Sheet";

const CartSheet = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    openCheckout,
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent id="cart" className=" bg-[#FAF7F2] flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center text-accent-foreground gap-2">
            <ShoppingBag className="h-5 w-5 text-accent-foreground" />
            Carrinho de compras ({totalItems})
          </SheetTitle>
          <SheetDescription>
            Revise seus itens antes de finalizar a compra
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-accent-foreground  mb-2">Seu carrinho está vazio</h3>
            <p className="text-small text-accent-foreground/70 max-w-xs">
              Adicione alguns produtos de couro belos para começar.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-[#F1ECE4] rounded-xl"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-accent-foreground truncate">
                      {item.name}
                    </h4>
                    <p className="text-small text-accent-foreground/70 mb-2">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-md hover:bg-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-small font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-md hover:bg-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-accent-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-foreground">
                      R$ {(item.price * item.quantity).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-accent-foreground text-bold text-2xl">Subtotal</span>
                <span className="font-semibold text-lg text-accent-foreground">
                  R$ {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <p className="text-xs text-accent-foreground/70">
                Frete e impostos calculados na finalização da compra
              </p>
              <a

                onClick={openCheckout}
                className="block w-full text-center px-20 py-2 bg-primary rounded-full text-card cursor-pointer font-medium mt-8"
              >
                Finalizar Compra
              </a>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;