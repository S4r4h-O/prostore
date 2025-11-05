import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full border-b p-4">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <Link href="/" className="flex justify-start">
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
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserIcon /> Sign-in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
