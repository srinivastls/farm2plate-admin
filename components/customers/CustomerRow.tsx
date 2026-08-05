"use client";

import { Eye } from "lucide-react";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerRow({
  customer,
}: Props) {

  return (

    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <div>

          <div className="font-semibold">

            {customer.name}

          </div>

          <div className="text-xs text-gray-500">

            {customer.phone ?? "-"}

          </div>

        </div>

      </td>

      <td>

        {customer.email}

      </td>

      <td>

        {customer.totalOrders}

      </td>

      <td className="font-semibold">

        ₹{customer.totalSpent.toLocaleString()}

      </td>

      <td className="text-green-600 font-semibold">

        ₹{customer.totalSaved.toLocaleString()}

      </td>

      <td>

        {customer.favoriteFarm ?? "-"}

      </td>

      <td>

        <button>

          <Eye
            size={18}
            className="text-blue-600"
          />

        </button>

      </td>

    </tr>

  );

}