export const HERO_VIDEO = "https://video.wixstatic.com/video/80218c_bae0ed957dbd41d8b641c3763345dc1f/1080p/mp4/file.mp4";
export const FOOTER_VIDEO = "https://video.wixstatic.com/video/80218c_1c4b4b6635e8477e9a7d387f78fcb027/1080p/mp4/file.mp4";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  description: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "monochrome",
    name: "Monochrome",
    tagline: "Black. White. Loud.",
    img: "https://static.wixstatic.com/media/80218c_d0e153fc84504d3eae226aa70259e1da~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Monochrome.png",
    description: "Fără culoare. Doar contrast, atitudine și linii care taie tăcerea.",
  },
  {
    slug: "in-a-blush-state",
    name: "In a Blush State",
    tagline: "Soft riot, pink noise.",
    img: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Blush.png",
    description: "Roz care mușcă. O revoltă soft — dar sinceră.",
  },
  {
    slug: "red-flags-only",
    name: "Red Flags Only",
    tagline: "Warnings, worn well.",
    img: "https://static.wixstatic.com/media/80218c_4ca33707b4b94df49bebbcd5c8d0c3fc~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Red%20Flags%20Only.png",
    description: "Avertismente purtate cu stil. Roșu peste tot, fără scuze.",
  },
  {
    slug: "all-the-things",
    name: "All the Things",
    tagline: "Everything, everywhere.",
    img: "https://static.wixstatic.com/media/80218c_b07c717fb1234afa8c2c1a63176b45d5~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/All%20the%20things.png",
    description: "De toate. Postere, tricouri, tote-uri și restul zilei.",
  },
];

export type Product = {
  slug: string;
  no: number;
  name: string;
  price: number; // in RON
  tag: string;
  img: string;
  category: string; // category slug
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "no-5-in-a-blush-state",
    no: 5,
    name: "No 5 — In a Blush State",
    price: 119,
    tag: "Soft Spots, Sharp Claws",
    img: "https://static.wixstatic.com/media/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png",
    category: "in-a-blush-state",
    description: "Poster A3 imprimat pe hârtie mată premium 250g. Roz obraznic, cu gheare.",
  },
  {
    slug: "no-1-in-a-blush-state",
    no: 1,
    name: "No 1 — In a Blush State",
    price: 119,
    tag: "Sugar High",
    img: "https://static.wixstatic.com/media/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png",
    category: "in-a-blush-state",
    description: "Zahăr, zahăr, zahăr. Poster A3 pe hârtie mată 250g.",
  },
  {
    slug: "no-2-in-a-blush-state",
    no: 2,
    name: "No 2 — In a Blush State",
    price: 119,
    tag: "Blow Us Away",
    img: "https://static.wixstatic.com/media/80218c_9cd631bc3e474a9099795c865160b708~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9cd631bc3e474a9099795c865160b708~mv2.png",
    category: "in-a-blush-state",
    description: "Suflă tare. Poster A3 pe hârtie mată premium.",
  },
  {
    slug: "no-3-in-a-blush-state",
    no: 3,
    name: "No 3 — In a Blush State",
    price: 119,
    tag: "Oceanology",
    img: "https://static.wixstatic.com/media/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png",
    category: "in-a-blush-state",
    description: "Din adâncuri. Poster A3 pe hârtie mată premium.",
  },
];

export const RON = (n: number) => `RON ${n.toFixed(2)}`;

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const productsByCategory = (slug: string) => PRODUCTS.filter((p) => p.category === slug);

export const SIZES = ["A4", "A3", "A2"] as const;
export const SIZE_MULT: Record<(typeof SIZES)[number], number> = { A4: 0.75, A3: 1, A2: 1.6 };
