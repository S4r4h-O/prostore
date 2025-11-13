export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "E-commerce";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Modern E-commerce with NextsJs";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCT_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const getDatabaseUrl = () =>
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_uKS3wprfg9Aj@ep-polished-firefly-acbj8ej1-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

export const PAYMENT_METHODS = process.env.PAYMENT_METHOD
  ? process.env.PAYMENT_METHOD.split(", ")
  : ["PayPal", "Stripe", "CashOnDelivery"];
export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "PayPal";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: "0",
  rating: "0",
  numReviews: 0,
  isFeatured: false,
  banner: null,
};
