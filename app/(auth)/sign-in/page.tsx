import CredentialsSignInForm from "@/components/shared/auth/credentials-signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams?: { callbackUrl?: string };
}) {
  const { callbackUrl } = searchParams?.callbackUrl || "/";
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.svg"
            width={150}
            height={150}
            alt={APP_NAME}
            priority
          />
        </Link>
        <CardTitle className="text-center text-2xl">Sign in</CardTitle>
        <CardDescription className="text-center">
          Sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <CredentialsSignInForm />
      </CardContent>
    </Card>
  );
}
