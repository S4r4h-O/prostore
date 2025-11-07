"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

import { signInWithCredentials } from "@/lib/actions/user.actions";

export default function CredentialsSignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} variant="default" className="w-full">
        {pending ? "Signing in..." : "Sign in"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="email" className="mb-2 mt-2">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoCapitalize="email"
            required
          />
          <Label htmlFor="email" className="mb-2 mt-2">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoCapitalize="passowrd"
            required
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          <Link
            href="/sign-up"
            target="_self"
            className="hover:text-orange-400"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
