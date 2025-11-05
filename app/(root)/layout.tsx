import type { Metadata } from "next";
import Header from "../../components/shared/header/index";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Modern e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 wrap-anywhere">{children}</main>
      <Footer />
    </div>
  );
}
