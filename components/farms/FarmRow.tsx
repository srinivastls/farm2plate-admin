"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

import { Farm } from "@/types/farm";

interface Props {
  farm: Farm;
}

export default function FarmRow({
  farm,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">

        <div>

          <div className="font-semibold">

            {farm.name}

          </div>

          <div className="text-xs text-gray-500">

            {farm.address}

          </div>

        </div>

      </td>

      <td>

        {farm.farmer.user.name}

      </td>

      <td>

        {farm.products.length}

      </td>

      <td>

        ⭐ {farm.farmer.rating}

      </td>

      <td>

        {farm.farmer.verified ? (

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

            Verified

          </span>

        ) : (

          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">

            Pending

          </span>

        )}

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

          <button>

            <Trash2
              size={18}
              className="text-red-600"
            />

          </button>

        </div>

      </td>

    </tr>
  );
}