import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Homepage() {
  return (
    <main className="mx-auto min-h-screen">
      <h1>My E-commerce</h1>
    </main>
  );
}
