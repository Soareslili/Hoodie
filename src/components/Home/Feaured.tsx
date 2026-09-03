import { Link } from "react-router-dom";
import { collections } from "../../lib/products";

import editorialStreet from "../../assets/editorialStreet.png";
import editorialAthletic from "../../assets/editorialAthletic.png";




const blocks = [
  {
    num: "01",
    title: "Streetwear",
    desc: "Bold designs rooted in urban culture. Each piece tells a story of the streets.",
    image: editorialStreet,
  },
  {
    num: "02",
    title: "Athletic",
    desc: "Performance meets style. Premium fabrics engineered for movement and comfort.",
    image: editorialAthletic,
  },

];



const Feaured = () => {
  return(

    <>
     <section className="py-28 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-luxe uppercase text-gray-400">Nossas Coleções</p>
          <h2 className="font-Cormorant text-4xl md:text-5xl mt-3">Conheça nossas novidades</h2>
          <div className="text-amber w-24 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {collections.map((c) => (
            <Link to={`/collections/${c.slug}`} key={c.slug} className="group relative overflow-hidden bg-champagne aspect-[3/4]">
              <img src={c.image} alt={c.name} loading="lazy" className="reveal-img absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-accent-foreground/30 from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-Cormorant text-2xl text-white">{c.name}</h3>
                <p className="text-[10px] tracking-luxe uppercase text-accent-foreground mt-1 opacity-0 group-hover:opacity-100 transition">Discover →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
      <div className="container ml-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {blocks.map((block) => (
            <div key={block.num} className="flex gap-6">
              <div className="flex-shrink-0 w-1/2">
                <img
                  src={block.image}
                  alt={block.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display text-6xl md:text-8xl text-muted/60">{block.num}</span>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mt-2">{block.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 font-body leading-relaxed">{block.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      </>
  )

} 

export default Feaured;






