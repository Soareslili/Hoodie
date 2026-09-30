import winter1 from "../../assets/winter1.jpg";
import winter2 from "../../assets/winter2.jpg";
import Military from "../../assets/Military.jpg";
import Sand from "../../assets/Sand.jpg";

const winterItems = [
  { image: winter1, name: "Jaqueta Brown Leather" },
  { image: winter2, name: "Jaqueta Denim Dark" },
  { image: Military, name: "Jaqueta Military Utility" },
  { image: Sand, name: "Jaqueta Sand Essential" },
];

export default function FullWinters() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-foreground text-primary-foreground">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs text-editorial text-primary-foreground/60 mb-2">
            Lançamento da Temporada
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Invernos Completos
          </h2>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 sm:gap-4 md:gap-6">
          {winterItems.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer"
            >
            
              <div className="overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="
                    w-full
                    aspect-[3/4]
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

             
              <p className="text-xs sm:text-sm text-primary-foreground/80 leading-snug">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}