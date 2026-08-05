"use client";

import { CustomerOrder } from "@/types/customer";

interface Props {
  orders: CustomerOrder[];
}

export default function CustomerOrders({
  orders,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">

        Order History

      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">

              Order

            </th>

            <th>

              Date

            </th>

            <th>

              Status

            </th>

            <th>

              Total

            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b"
            >

              <td className="py-3">

                #{order.id.slice(-8).toUpperCase()}

              </td>

              <td>

                {new Date(order.createdAt).toLocaleDateString()}

              </td>

              <td>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                  {order.status}

                </span>

              </td>

              <td className="font-semibold">

                ₹{order.total}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {orders.length === 0 && (

        <div className="py-10 text-center text-gray-500">

          No orders found.

        </div>

      )}

    </div>

  );

}