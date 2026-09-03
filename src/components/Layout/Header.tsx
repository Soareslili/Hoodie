import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

const leftLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/collection", label: "Collection" },
];

const rightLinks = [
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-500 ${
        scrolled || !isHome ? "shadow-gold" : ""
      }`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center px-6 py-4">
      
        <nav className="hidden lg:flex items-center gap-6">
          {leftLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-family font-medium tracking-wide uppercase text-foreground/80 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

     
        <Link
          to="/"
          className="font-family text-foreground text-2xl font-bold text-center justify-self-center"
        >
          HOODIE
        </Link>

     
        <div className="flex items-center justify-end gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-family font-medium tracking-wide uppercase text-foreground/80 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="p-2 cursor-pointer text-foreground/80 transition-colors hover:text-primary"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              onClick={openCart}
              className="relative p-2 cursor-pointer text-foreground/80 transition-colors hover:text-primary"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link
              to="/account"
              className="p-2 cursor-pointer text-foreground/80 transition-colors hover:text-primary"
              aria-label="Account"
            >
              <User size={20} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;