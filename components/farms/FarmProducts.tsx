"use client";

import { FarmProduct } from "@/types/farm";

interface Props {
  products: FarmProduct[];
}

export default function FarmProducts({
  products,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="text-xl font-bold mb-5">

        Farm Products

      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">

              Product

            </th>

            <th>

              Stage

            </th>

            <th>

              Quantity

            </th>

            <th>

              Price

            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-b"
            >

              <td className="py-3">

                {product.name}

              </td>

              <td>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    product.processingStage === "RAW"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {product.processingStage}
                </span>

              </td>

              <td>

                {product.quantity} {product.unit}

              </td>

              <td>

                ₹{product.price}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}