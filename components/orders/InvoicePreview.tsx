"use client";

import { Order } from "@/types/order";

interface Props {
  order: Order;
}

export default function InvoicePreview({
  order,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-8 shadow">

      <div className="flex justify-between">

        <div>

          <h1 className="text-3xl font-bold">

            FarmPlate

          </h1>

          <p className="text-gray-500">

            Invoice

          </p>

        </div>

        <div className="text-right">

          <p>

            #{order.id.slice(-8)}

          </p>

          <p>

            {new Date(order.createdAt).toLocaleDateString()}

          </p>

        </div>

      </div>

      <hr className="my-6" />

      <h3 className="font-semibold">

        Customer

      </h3>

      <p>{order.user.name}</p>

      <p>{order.user.email}</p>

      <table className="mt-8 w-full">

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

          {order.items.map((item)=>(

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

                ₹{item.price*item.quantity}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="mt-8 text-right">

        <h2 className="text-2xl font-bold">

          Total: ₹{order.total}

        </h2>

      </div>

    </div>

  );

}