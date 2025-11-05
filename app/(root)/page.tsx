import type { Metadata } from "next";

import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/sample-data";

export const metadata: Metadata = {
  title: "Home",
};

export default function Homepage() {
  return (
    <div className="min-h-screen">
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
}
