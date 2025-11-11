import type { Metadata } from "next";

import { notFound } from "next/navigation";

import { getOrderById } from "@/lib/actions/order.actions";
import { ShippingAddress } from "@/types";
import OrderDetailsTable from "./order-details-table";

export const metadata: Metadata = {
  title: "Order details",
};

export default async function OrderDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  return (
    <div>
      <OrderDetailsTable
        order={{
          ...order,
          shippingAddres: order.shippingAddress as ShippingAddress,
        }}
      />
    </div>
  );
}
