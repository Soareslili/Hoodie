import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';


import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#15110D] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex items-center gap-2">

                        <div className="leading-tight">
                            <div className=" font-family text-primary-foreground text-3xl">HOODIE </div>

                        </div>
                    </div>
                    <p className="mt-4 text-sm text-white/60">
                        Premium streetwear for the modern generation. Bold. Comfortable. Iconic.
                    </p>
                </div>
                <div>
                    <h4 className=" font-bold uppercase font-family text-primary-foreground">Shop</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/70"> 
                        <li>Hoodie</li>
                        <li>Jackets</li>
                        <li>T-Shirts</li>
                        <li>Caps</li>
                        <li>Acessories</li>
                    </ul>
                </div>
                <div>
                    <h4 className=" font-bold uppercase tracking-wider font-family text-primary-foreground">Links Rápidos</h4>
                    <ul className=" flex flex-col mt-4 space-y-2 text-sm text-white/70">
                        <li><Link to="/about" className="hover:text-primary-foreground transition-smooth">Sobre</Link></li>
                        <li><Link to="/artists" className="hover:text-primary-foreground transition-smooth">Artistas</Link></li>
                        <li><Link to="/portfolio" className="hover:text-primary-foreground transition-smooth">Portfólio</Link></li>
                        <li><Link to="/contact" className="hover:text-primary-foreground transition-smooth">Contato</Link></li>

                    </ul>
                </div>

                <div>
                    <h4 className=" font-bold uppercase tracking-wider font-family text-primary-foreground">Legal</h4>
                    <ul className=" flex flex-col mt-4 space-y-2 text-sm text-white/70">
                        <li><Link to="/about" className="hover:text-primary-foreground transition-smooth">Terms</Link></li>
                        <li><Link to="/artists" className="hover:text-primary-foreground transition-smooth">Privacy</Link></li>
                        <li><Link to="/portfolio" className="hover:text-primary-foreground transition-smooth">Shipping</Link></li>
                        <li><Link to="/contact" className="hover:text-primary-foreground transition-smooth">Returns</Link></li>

                    </ul>
                </div>

            </div>

            <div className=" flex justify-between border-t border-white/10">
                <div className=" max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} Lumière Maison. All rights reserved.
                </div>

                <div className="grid grid-cols-3 w-[150px] mt-4 gap-4 ">
                    <a href="#" className="text-accent transform transition hover:scale-110" >
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-indigo-500 transform transition hover:scale-110" >
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-500 transform transition hover:scale-110" >
                        <FaXTwitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;