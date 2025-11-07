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
import SignUpForm from "@/components/shared/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function SignUpPage(props: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const searchParams = await props.searchParams;
  const callbackUrl = searchParams?.callbackUrl || "/";
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
        <CardTitle className="text-center text-2xl">Sign up</CardTitle>
        <CardDescription className="text-center">
          Enter your information to sign up
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
