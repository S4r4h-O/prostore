"use client";

import { cn } from "@/lib/utils";

import React from "react";

export default function CheckoutSteps({ current = 0 }) {
  return (
    <div className="flex flex-col md:flex-row justify-between space-x-2 mb-10">
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                "p-2 w-56 rounded-full text-center text-sm",
                index === current ? "bg-secondary" : undefined,
              )}
            >
              {step}
            </div>
            {step !== "Place Order" && (
              <div className="justify-center items-center">
                <hr className="w-16 border-t border-gray-300 mx-2" />
              </div>
            )}
          </React.Fragment>
        ),
      )}
    </div>
  );
}
