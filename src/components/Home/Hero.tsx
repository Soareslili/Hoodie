import { Link } from "react-router-dom";
import heroImage from "../../assets/BgHero.png";
import Feaured from "./Feaured";
import FullWinters from "./FullWinters";

const Hero = () => {
    return (

        <>
        <section className="pt-24 lg:pt-0">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-88px)]">
                {/* Coluna de texto */}
                <div className="flex flex-col gap-6 px-6 lg:px-0 lg:pr-16">
                    <span className="text-xs font-family font-semibold tracking-[0.3em] uppercase text-primary">
                        Streetwear Essentials
                    </span>

                    <h1 className="font-family text-6xl md:text-7xl lg:text-8xl font-black leading-none uppercase text-foreground">
                        Hoodie
                    </h1>

                    <p className="text-sm md:text-base text-foreground/70 max-w-sm">
                        Streetwear Essentials for Modern Style. Premium quality, bold
                        designs, effortless comfort.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <Link
                            to="/products"
                            className="px-8 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/collection"
                            className="px-8 py-3 border border-foreground text-foreground text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
                        >
                            Explore Collection
                        </Link>
                    </div>
                </div>

                {/* Coluna de imagem */}
                <div className="w-full h-[400px] lg:h-[calc(100vh-88px)] overflow-hidden">
                    <img
                        src={heroImage}
                        alt="Modelos vestindo hoodies premium"
                        className="w-full h-full object-cover mt-14"
                    />
                </div>
            </div>
        </section>

        <section className="pt-24 lg:pt-0">
            <Feaured />
        </section>

        <section className="pt-24 lg:pt-0">
            <FullWinters />
        </section>

        </>
    );
};

export default Hero;