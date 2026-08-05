"use client";

import { Category } from "@/types/category";
import CategoryRow from "./CategoryRow";

interface Props {
  categories: Category[];
}

export default function CategoryTable({
  categories,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Icon
            </th>

            <th>Name</th>

            <th>Description</th>

            <th>Products</th>

            <th>Created</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {categories.map((category) => (

            <CategoryRow
              key={category.id}
              category={category}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}