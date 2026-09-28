import { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import {
  Dialog,
  DialogContent,
} from "../ui/dialog";

const fmt = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const CheckoutModal = () => {
  const { items, totalPrice, clearCart, isCheckoutOpen, closeCheckout } = useCart();
  const [done, setDone] = useState(false);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeCheckout();
      setDone(false);
    }
  };

  return (
    <Dialog open={isCheckoutOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[100vh] overflow-y-auto bg-[ bg-[#F1ECE4] p-0">
        {done ? (
          <div className="pt-16 pb-16 text-center mx-auto max-w-xl px-6">
            <p className="text-[11px] tracking-luxe uppercase text-gold">Obrigado</p>
            <h1 className="font-display text-4xl mt-4">Seus tesouros estão a caminho</h1>
            <p className="mt-6 text-muted-foreground">
              Uma confirmação foi enviada para você. Cada peça está sendo preparada com o máximo de cuidado.
            </p>
            <button
              onClick={() => handleOpenChange(false)}
              className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground text-[11px] tracking-luxe uppercase rounded-full"
            >
              Fechar
            </button>
          </div>
        ) : (
          <div className="px-8 py-10">
            <div className="text-center mb-10">
              <p className="text-[11px] tracking-luxe uppercase text-gold">Etapa Final</p>
              <h1 className="font-display text-4xl mt-3">Checkout</h1>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                clearCart();
                setDone(true);
              }}
              className="grid lg:grid-cols-[1.3fr_1fr] gap-14"
            >
              <div className="space-y-10">
                <fieldset className="space-y-5">
                  <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Contato</legend>
                  {["Nome", "Email", "Telefone"].map((l) => (
                    <input
                      key={l}
                      required
                      placeholder={l}
                      className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold transition"
                    />
                  ))}
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Envio</legend>
                  <input
                    required
                    placeholder="Endereço"
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      required
                      placeholder="Cidade"
                      className="border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                    />
                    <input
                      required
                      placeholder="Código Postal"
                      className="border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                    />
                  </div>
                  <input
                    required
                    placeholder="País"
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                  />
                </fieldset>

                <fieldset className="space-y-5">
                  <legend className="text-[11px] tracking-luxe uppercase text-gold mb-3">Pagamento</legend>
                  <input
                    required
                    placeholder="Número do Cartão"
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      required
                      placeholder="MM / AA"
                      className="border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                    />
                    <input
                      required
                      placeholder="CVC"
                      className="border-b border-border bg-transparent py-3 outline-none focus:border-gold"
                    />
                  </div>
                </fieldset>
              </div>

              <aside className="bg-champagne/40 p-8 h-fit">
                <h3 className="font-display text-2xl mb-6">Resumo do pedido</h3>
                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <li key={item.id} className="py-4 flex gap-4">
                      <img src={item.image} alt={item.name} className="h-16 w-14 object-cover" />
                      <div className="flex-1 text-sm">
                        <p className="font-display text-base">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qtd. {item.quantity}</p>
                      </div>
                      <span className="text-sm">{fmt(item.price * item.quantity)}</span>
                    </li>
                  ))}
                  {items.length === 0 && (
                    <li className="py-6 text-sm text-center text-muted-foreground">
                     Seu carrinho está vazio.
                    </li>
                  )}
                </ul>
                <div className="border-t border-border pt-4 mt-4 flex justify-between font-display text-xl">
                  <span>Total</span>
                  <span>{fmt(totalPrice)}</span>
                </div>
                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="mt-6 w-full bg-primary text-primary-foreground py-4 text-[11px] cursor-pointer tracking-luxe uppercase hover:bg-ink transition disabled:opacity-50"
                >
                 ✦ Concluir compra
                </button>
              </aside>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;