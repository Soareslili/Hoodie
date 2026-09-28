
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import Footer from "./components/page/Footer";
import Contact from "./components/page/Contact";
import NewArrivals from "./components/page/NewArrivals";

import { Products } from "./components/service/Product";
import { useEffect, useState } from "react";
import type { Product } from "./types/products";
import { getProducts } from "./components/service/ProductService";
import ScrollToTop from "./components/ui/ScrollToTop";
import CartSheet from "./components/Layout/CartSheet";
import CheckoutModal from "./components/page/Checkout";


function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("Produtos carregados:", data);
        setProducts(data);
      })
      .finally(() => (false));
  }, []);


  const handleProductClick = (product: Product) => {
    console.log("Produto clicado:", product);
  };


  return (



    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<Products products={products} onProductClick={handleProductClick} />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </main>
      <CartSheet />
      <CheckoutModal />
      <Footer />
    </div>
  )
}

export default App
