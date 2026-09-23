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
    <section className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container ml-10">
        <div className="text-center mb-12">
          <p className="text-xs text-editorial text-primary-foreground/60 mb-2">Lançamento da Temporada</p>
          <h2 className="font-display text-5xl md:text-7xl">
            Invernos Completos</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {winterItems.map((item) => (
            <div key={item.name} className="group cursor-pointer">
              <div className="overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-primary-foreground/80">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
