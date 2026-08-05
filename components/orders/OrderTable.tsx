"use client";

import { Order } from "@/types/order";

import OrderRow from "./OrderRow";

interface Props {
  orders: Order[];
}

export default function OrderTable({
  orders,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Order
            </th>

            <th>Customer</th>

            <th>Items</th>

            <th>Total</th>

            <th>Payment</th>

            <th>Status</th>

            <th>Date</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <OrderRow
              key={order.id}
              order={order}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}