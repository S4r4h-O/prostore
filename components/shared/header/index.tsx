import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import CategoryDrawer from "./category-drawer";
import Search from "./search";

export default function Header() {
  return (
    <header className="w-full border-b p-4">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <CategoryDrawer />
          <Link href="/" className="flex justify-start ml-4">
            <Image
              src="/images/logo.svg"
              alt={APP_NAME}
              height={48}
              width={48}
              priority
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
}
