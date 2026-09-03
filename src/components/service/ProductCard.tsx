import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../Contexts/CartContext";
import type { Product } from "../../types/products";

interface ProductProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  showViewAll?: boolean;
}

const CATEGORIES = ["Moletom", "Jaqueta", "Camisetas", "Bone"];

export function Products({ products, onProductClick, showViewAll = false }: ProductProps) {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  const filtered =
    activeCategory === undefined
      ? products
      : products.filter((p) => p.category === activeCategory);

  const displayed = showViewAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="products" className="py-24  bg-[#faf7f2]">
      <div className="container-custom px-8 mx-auto">
       
        <div className="mb-14 flex flex-wrap justify-center gap-8 sm:gap-10">
          
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium uppercase cursor-pointer tracking-widest px-4 py-2 transition-all ${
                activeCategory === cat
                  ? "border border-neutral-800 text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

     
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {displayed.map((product, index) => (
            <div
              key={product.productId}
              className="group flex flex-col "
              onClick={() => onProductClick(product)}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
            >
     
           
              <div className="relative overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-colors hover:bg-white"
                >
                  <Heart size={15} className="text-neutral-700" />
                </button>

            
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem({
                      id: String(product.productId),
                      name: product.name,
                      price: product.price,
                      image: product.imageUrl ?? "",
                    });
                  }}
                  className="absolute bottom-0 left-0 flex w-full translate-y-full cursor-pointer items-center justify-center gap-2 bg-neutral-900 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-transform duration-300 group-hover:translate-y-0"
                >
                  <ShoppingCart size={14} />
                  Adicionar ao carrinho
                </button>
              </div>

           
              <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
                <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                  {product.category}
                </span>

                <h3 className="font-serif text-lg text-neutral-900">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < 5 ? "fill-amber-400 text-amber-400" : "text-neutral-300"}
                    />
                  ))}
                 
                </div>

                <p className="mt-1 text-sm font-medium text-neutral-800">
                  R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}