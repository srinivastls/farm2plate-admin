"use client";

import { Order } from "@/types/order";

interface Props {
  order: Order | null;
}

function Info({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

export default function OrderDetails({
  order,
}: Props) {
  if (!order) return null;

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Order #{order.id.slice(-8).toUpperCase()}
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <Info
          title="Customer"
          value={order.user.name}
        />

        <Info
          title="Email"
          value={order.user.email}
        />

        <Info
          title="Status"
          value={order.status}
        />

        <Info
          title="Payment"
          value={order.paymentStatus}
        />

        <Info
          title="Order Date"
          value={new Date(order.createdAt).toLocaleString()}
        />

        <Info
          title="Total"
          value={`₹${order.total}`}
        />

      </div>

      <div className="mt-8">

        <h3 className="mb-3 text-lg font-semibold">
          Ordered Items
        </h3>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-2 text-left">
                Product
              </th>

              <th>
                Qty
              </th>

              <th>
                Price
              </th>

              <th>
                Total
              </th>

            </tr>

          </thead>

          <tbody>

            {order.items.map((item) => (

              <tr
                key={item.id}
                className="border-b"
              >

                <td className="py-3">

                  {item.product.name}

                </td>

                <td>

                  {item.quantity}

                </td>

                <td>

                  ₹{item.price}

                </td>

                <td>

                  ₹{item.price * item.quantity}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}