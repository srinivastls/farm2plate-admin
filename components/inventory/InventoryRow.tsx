"use client";

import { Eye } from "lucide-react";

export default function InventoryRow({
  product,
}: any) {

  const value =
    product.price * product.quantity;

  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <div>

          <div className="font-semibold">

            {product.name}

          </div>

          <div className="text-xs text-gray-500">

            {product.processingStage}

          </div>

        </div>

      </td>

      <td>{product.farm.name}</td>

      <td>

        {product.quantity}

        {" "}

        {product.unit}

      </td>

      <td>

        ₹{value}

      </td>

      <td>

        {product.quantity < 20 ? (

          <span className="rounded bg-red-100 px-2 py-1 text-red-700">

            Low

          </span>

        ) : (

          <span className="rounded bg-green-100 px-2 py-1 text-green-700">

            Healthy

          </span>

        )}

      </td>

      <td>

        <Eye
          className="cursor-pointer"
          size={18}
        />

      </td>

    </tr>
  );
}