"use client";

import { Eye, Pencil } from "lucide-react";

import { Order } from "@/types/order";

interface Props {
  order: Order;
}

function getStatusColor(status: string) {

  switch (status) {

    case "DELIVERED":
      return "bg-green-100 text-green-700";

    case "SHIPPED":
      return "bg-blue-100 text-blue-700";

    case "PACKED":
      return "bg-purple-100 text-purple-700";

    case "CONFIRMED":
      return "bg-indigo-100 text-indigo-700";

    case "PENDING":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-red-100 text-red-700";
  }

}

function getPaymentColor(status: string) {

  switch (status) {

    case "PAID":
      return "bg-green-100 text-green-700";

    case "PENDING":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-red-100 text-red-700";
  }

}

export default function OrderRow({
  order,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <div className="font-semibold">

          #{order.id.slice(-8).toUpperCase()}

        </div>

      </td>

      <td>

        <div>

          <div className="font-medium">

            {order.user.name}

          </div>

          <div className="text-xs text-gray-500">

            {order.user.email}

          </div>

        </div>

      </td>

      <td>

        {order.items.length}

      </td>

      <td>

        ₹{order.total}

      </td>

      <td>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getPaymentColor(order.paymentStatus)}`}
        >

          {order.paymentStatus}

        </span>

      </td>

      <td>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(order.status)}`}
        >

          {order.status}

        </span>

      </td>

      <td>

        {new Date(order.createdAt).toLocaleDateString()}

      </td>

      <td>

        <div className="flex gap-3">

          <button>

            <Eye
              size={18}
              className="text-blue-600"
            />

          </button>

          <button>

            <Pencil
              size={18}
              className="text-green-600"
            />

          </button>

        </div>

      </td>

    </tr>

  );

}