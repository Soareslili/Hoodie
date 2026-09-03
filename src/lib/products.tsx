import MoletomBlack from "../assets/MoletomEssencie.png";
import MoletomOlive from "../assets/MoletomOlive.png";
import JaquetaBlack from "../assets/JaquetaBlack.png";
import MoletomCinza from "../assets/MoletomCinza.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: "Moletom-Black", name: "Moletom Essence Black", category: "Hoodies", price: 249, rating: 5, image: MoletomBlack, description: "Moletom preto com capuz, corte reto e tecido moletom pesado para um visual essencial e versátil." },
  { id: "Moletom-Olive", name: "Moletom Olive Field", category: "Hoodies", price: 269, rating: 5, image: MoletomOlive, description: "Moletom verde-oliva com capuz, bolso canguru e caimento oversized inspirado no streetwear militar." },
  { id: "Jaqueta-Black", name: "Jaqueta Bomber Black", category: "Jackets", price: 389, rating: 5, image: JaquetaBlack, description: "Jaqueta bomber preta com zíper frontal, bolso de manga e acabamento em ribana nos punhos e barra." },
  { id: "Moletom-Cinza", name: "Moletom Cinza Mescla", category: "Hoodies", price: 249, rating: 5, image: MoletomCinza, description: "Moletom cinza mescla com capuz e bolso frontal, um básico atemporal para compor looks casuais." },
];

export const collections = [
  { name: "Hoodies", slug: "hoodies", image: MoletomBlack },
  { name: "Jackets", slug: "jackets", image: JaquetaBlack },
  { name: "Hoodies Cinza", slug: "hoodies-cinza", image: MoletomCinza },
  { name: "Hoodies Olive", slug: "hoodies-olive", image: MoletomOlive },
];