"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";

import { signUpUser } from "@/lib/actions/user.actions";

export default function SignUpForm() {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} variant="default" className="w-full">
        {pending ? "Submitting..." : "Sign up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="mb-2 mt-2">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoCapitalize="name"
            required
          />

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
          <Label htmlFor="email" className="mb-2 mt-2">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoCapitalize="confirmPassowrd"
            required
          />
        </div>
        <div>
          <SignUpButton />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          <Link
            href="/sign-in"
            target="_self"
            className="hover:text-orange-400"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
