import { collections } from "../../lib/products";
import { Link } from "react-router-dom";

import newArrivalsImg from "../../assets/NewArrivals.png";


export default function NewArrivals() {
    return (
        <>

            <section
                className="relative min-h-[55vh] flex items-end justify-start text-left text-ink px-6 md:px-10 pb-10 overflow-hidden"
                style={{ backgroundImage: `url(${newArrivalsImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
                {/* gradiente sutil só na base, pra garantir legibilidade do texto sem escurecer o rosto */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent"></div>

                <div className="relative z-10 max-w-3xl space-y-3">
                    <span className="inline-block bg-black text-white text-[10px] tracking-widest uppercase px-3 py-1">
                        New Drop
                    </span>

                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-black uppercase">
                        Essential Hoodie
                    </h1>

                    <p className="text-sm md:text-base text-gray-500">
                        Minimal silhouette, premium cotton, designed for the city.
                    </p>
                </div>
            </section>

           <section className="py-16 mx-auto max-w-7xl px-6 lg:px-10">
    <div className="container">
        <div className="flex items-end justify-between mb-8">
            <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">Featured</p>
                <h2 className="font-extrabold text-4xl md:text-6xl uppercase">New Arrivals</h2>
            </div>
            <Link to="/collections" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition">
                View All →
            </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {collections.map((c) => (
                <Link to={`/collections/${c.slug}`} key={c.slug} className="group block">
                    <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                        <span className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] tracking-widest uppercase px-2 py-1">
                            New
                        </span>
                        <img
                            src={c.image}
                            alt={c.name}
                            loading="lazy"
                            className="reveal-img absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-3">
                        <h3 className="font-semibold text-sm text-black">{c.name}</h3>
                    
                    </div>
                </Link>
            ))}
        </div>
    </div>
</section>

        </>

    );
}
