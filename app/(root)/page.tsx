import type { Metadata } from "next";

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Homepage() {
  const latestProducts = await getLatestProducts();

  return (
    <div className="min-h-screen">
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </div>
  );
}
