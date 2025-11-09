"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  ControllerRenderProps,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { updateUserAddress } from "@/lib/actions/user.actions";
import { shippingAddressSchema } from "@/lib/validators";
import { ShippingAddress } from "@/types";

export default function ShippingAddressForm({
  address,
}: {
  address: ShippingAddress;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof shippingAddressSchema>>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: address,
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<z.infer<typeof shippingAddressSchema>> = async (
    values,
  ) => {
    startTransition(async () => {
      const res = await updateUserAddress(values);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      router.push("/payment-method");
    });
  };

  return (
    <div className="max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold mt-4">Shipping Address</h1>
      <p className="text-sm text-muted-foreground">
        Please enter address to ship to.
      </p>
      <FormProvider {...form}>
        <form
          method="POST"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof shippingAddressSchema>,
                  "fullName"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter full name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="streetAddress"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof shippingAddressSchema>,
                  "streetAddress"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="city"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof shippingAddressSchema>,
                  "city"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter city" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="postalCode"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof shippingAddressSchema>,
                  "postalCode"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter postal code" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="country"
              render={({
                field,
              }: {
                field: ControllerRenderProps<
                  z.infer<typeof shippingAddressSchema>,
                  "country"
                >;
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter country" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex gap-2">
            <Button type="submit" disabled={isPending} className="">
              {isPending ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}{" "}
              Contiue
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
