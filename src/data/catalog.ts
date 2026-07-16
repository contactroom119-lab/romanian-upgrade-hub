export type Product = {
  slug: string;
  name: string;
  price: number; // RON
  category: CategorySlug;
  tag: string;
  img: string;
  description: string;
};

export type CategorySlug = "monochrome" | "in-a-blush-state" | "red-flags-only" | "all-the-things";

export const CATEGORIES: {
  slug: CategorySlug;
  name: string;
  tagline: string;
  img: string;
}[] = [
  {
    slug: "monochrome",
    name: "Monochrome",
    tagline: "Black. White. Loud.",
    img: "https://static.wixstatic.com/media/80218c_d0e153fc84504d3eae226aa70259e1da~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Monochrome.png",
  },
  {
    slug: "in-a-blush-state",
    name: "In a Blush State",
    tagline: "Soft riot, pink noise.",
    img: "https://static.wixstatic.com/media/80218c_37a2ff7ff4e64576928c7cb745615567~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Blush.png",
  },
  {
    slug: "red-flags-only",
    name: "Red Flags Only",
    tagline: "Warnings, worn well.",
    img: "https://static.wixstatic.com/media/80218c_4ca33707b4b94df49bebbcd5c8d0c3fc~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/Red%20Flags%20Only.png",
  },
  {
    slug: "all-the-things",
    name: "All the Things",
    tagline: "Everything, everywhere.",
    img: "https://static.wixstatic.com/media/80218c_b07c717fb1234afa8c2c1a63176b45d5~mv2.png/v1/fill/w_800,h_520,al_c,q_90,enc_avif,quality_auto/All%20the%20things.png",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "no-5-in-a-blush-state",
    name: "No 5 — In a Blush State",
    price: 119,
    category: "in-a-blush-state",
    tag: "Soft Spots, Sharp Claws",
    img: "https://static.wixstatic.com/media/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_5a828cb3853749e6969d4045d1a802ba~mv2.png",
    description:
      "A soft-pink riot printed on museum-grade matte paper. Sharp claws, softer heart — hang it where you need a little reminder of both.",
  },
  {
    slug: "no-1-in-a-blush-state",
    name: "No 1 — In a Blush State",
    price: 119,
    category: "in-a-blush-state",
    tag: "Sugar High",
    img: "https://static.wixstatic.com/media/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_fe2a256a79e34cad9f5091f61ec80018~mv2.png",
    description:
      "Blush-pink, sugar-rush composition. Playful, loud, and impossible to ignore in a bright room.",
  },
  {
    slug: "no-2-in-a-blush-state",
    name: "No 2 — In a Blush State",
    price: 119,
    category: "in-a-blush-state",
    tag: "Blow Us Away",
    img: "https://static.wixstatic.com/media/80218c_9cd631bc3e474a9099795c865160b708~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9cd631bc3e474a9099795c865160b708~mv2.png",
    description:
      "Soft palette, sharp message. Prints in limited runs; when it's gone, it's gone.",
  },
  {
    slug: "no-3-in-a-blush-state",
    name: "No 3 — In a Blush State",
    price: 119,
    category: "in-a-blush-state",
    tag: "Oceanology",
    img: "https://static.wixstatic.com/media/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png/v1/fill/w_600,h_800,al_c,q_90,enc_avif,quality_auto/80218c_9d91a880c558471fbc31f34928b5822b~mv2.png",
    description:
      "A slow, salty wash of pink and blue. For the reader by the window and the daydream on repeat.",
  },
  {
    slug: "monochrome-no-1",
    name: "Monochrome — No 1",
    price: 119,
    category: "monochrome",
    tag: "Black. White. Loud.",
    img: "https://static.wixstatic.com/media/80218c_d0e153fc84504d3eae226aa70259e1da~mv2.png/v1/fill/w_800,h_1067,al_c,q_90,enc_avif,quality_auto/Monochrome.png",
    description:
      "House classic. Heavy ink, high contrast, no apologies. Prints beautifully large.",
  },
  {
    slug: "red-flags-only-no-1",
    name: "Red Flags Only — No 1",
    price: 129,
    category: "red-flags-only",
    tag: "Warnings, worn well.",
    img: "https://static.wixstatic.com/media/80218c_4ca33707b4b94df49bebbcd5c8d0c3fc~mv2.png/v1/fill/w_800,h_1067,al_c,q_90,enc_avif,quality_auto/Red%20Flags%20Only.png",
    description:
      "Wear your warnings loud. Vermilion-heavy print for the walls that need attitude.",
  },
  {
    slug: "all-the-things-no-1",
    name: "All the Things — No 1",
    price: 109,
    category: "all-the-things",
    tag: "Everything, everywhere.",
    img: "https://static.wixstatic.com/media/80218c_b07c717fb1234afa8c2c1a63176b45d5~mv2.png/v1/fill/w_800,h_1067,al_c,q_90,enc_avif,quality_auto/All%20the%20things.png",
    description:
      "A little of everything. Great starter piece for a gallery wall in progress.",
  },
];

export const SIZES = [
  { id: "a4", label: "A4 — 21×29.7cm", modifier: 0 },
  { id: "a3", label: "A3 — 29.7×42cm", modifier: 40 },
  { id: "a2", label: "A2 — 42×59.4cm", modifier: 90 },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function productsInCategory(slug: string) {
  return PRODUCTS.filter((p) => p.category === slug);
}
