"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

import { Category } from "@/types/category";

interface Props {
  category: Category;
}

export default function CategoryRow({
  category,
}: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4 text-2xl">

        {category.icon}

      </td>

      <td>

        <div className="font-semibold">

          {category.name}

        </div>

      </td>

      <td>

        {category.description ?? "-"}

      </td>

      <td>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

          {category.productsCount}

        </span>

      </td>

      <td>

        {category.createdAt
          ? new Date(category.createdAt).toLocaleDateString()
          : "-"}

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