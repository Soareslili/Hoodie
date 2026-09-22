

export type Product = {
 productId: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  { productId: 1, name: "Moletom Urban Black", category: "Moletom", price: 189.90, rating: 5, image: "/img/MoletomBlack.jpg", description: "oletom preto oversized com capuz e bolso canguru. Visual urbano, moderno e versátil." },
  { productId: 12, name: "Jaqueta Brown Leather", category: "Jaqueta", price: 299.90, rating: 5, image: "/img/JaquetaBrown.jpg", description: "Jaqueta marrom em couro sintético com zíper frontal e gola clássica. Visual sofisticado com uma pegada urbana." },
  { productId: 20, name: "Camiseta Vintage Eagle", category: "Camiseta", price: 135.90, rating: 5, image: "/img/CamisetaEagle.jpg", description: "Camiseta preta acid wash com ilustração de águia em estilo retrô. Uma peça de personalidade com inspiração streetwear vintage." },
  { productId: 28, name: "Boné Heritage Cord", category: "Bonés", price: 109.90, rating: 5, image: "/img/MoletomCinza.jpg", description: "Boné caramelo em veludo cotelê com textura aparente e inspiração vintage. Uma peça diferenciada para composições casuais." },
];

export const collections = [
  { name: "Moletom", slug: "Moletom", image: "/img/MoletomBlack.jpg" },
  { name: "Jaqueta", slug: "jaqueta", image: "/img/JaquetaBrown.jpg" },
  { name: "Camiseta", slug: "camiseta", image: "/img/CamisetaEagle.jpg" },
  { name: "Bonés", slug: "bones", image: "/img/BoneCorduroy.jpg" },
];