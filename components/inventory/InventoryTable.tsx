"use client";

import InventoryRow from "./InventoryRow";

export default function InventoryTable({
  products,
}: any) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Product
            </th>

            <th>Farm</th>

            <th>Stock</th>

            <th>Value</th>

            <th>Status</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {products.map((p: any) => (
            <InventoryRow
              key={p.id}
              product={p}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}