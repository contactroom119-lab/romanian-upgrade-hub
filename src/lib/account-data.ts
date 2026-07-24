import type { ProductSize } from "./room119-data";

export type OrderStatus = "on_its_way" | "confirmed" | "delivered";

export type OrderItem = {
  slug: string;
  size: ProductSize;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  createdAt: string; // display date
  status: OrderStatus;
  eta?: string;
  items: OrderItem[];
  shipping: number;
  paid: number;
  address: {
    name: string;
    line1: string;
    postal: string;
    city: string;
    county: string;
    country: string;
    phone: string;
  };
  payment: string;
};

export const DEMO_ADDRESS: Order["address"] = {
  name: "Adelle Nikolaus",
  line1: "Bulevardul Unirii 22",
  postal: "030823",
  city: "București",
  county: "Bucharest",
  country: "România",
  phone: "+40 21 314 2434",
};

export const DEMO_ORDERS: Order[] = [
  {
    id: "1004",
    createdAt: "14 Iul 2026",
    status: "on_its_way",
    eta: "23 Aug",
    items: [
      { slug: "no-1-in-a-blush-state", size: "A3", qty: 1, price: 119 },
      { slug: "tricou-room-box", size: "M", qty: 1, price: 149 },
    ],
    shipping: 0,
    paid: 268,
    address: DEMO_ADDRESS,
    payment: "Visa · 4242",
  },
  {
    id: "1003",
    createdAt: "02 Iul 2026",
    status: "delivered",
    items: [{ slug: "no-5-in-a-blush-state", size: "A3", qty: 1, price: 119 }],
    shipping: 19.9,
    paid: 138.9,
    address: DEMO_ADDRESS,
    payment: "Card · 1111",
  },
  {
    id: "1002",
    createdAt: "10 Iun 2026",
    status: "confirmed",
    eta: "13 Aug",
    items: [{ slug: "tricou-krah", size: "L", qty: 1, price: 159 }],
    shipping: 19.9,
    paid: 178.9,
    address: DEMO_ADDRESS,
    payment: "Ramburs",
  },
];

export const getOrder = (id: string) => DEMO_ORDERS.find((o) => o.id === id);

export const STATUS_LABEL: Record<OrderStatus, string> = {
  on_its_way: "Pe drum",
  confirmed: "Confirmată",
  delivered: "Livrată",
};
