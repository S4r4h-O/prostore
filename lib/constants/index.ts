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
