export type Product = {
   id: string,
   name: string,
   price: Price,
   category: ProductCategory,
   imageUrl: string,
};

export type Price = {
  price: number,
  currency: Currency,
};

export type Currency = "ZAR" | "USD";

export type ProductCategory = {};
export type PriceRange = {}
export type ProductsAvailability = {}
export type ProductsSort = {}
