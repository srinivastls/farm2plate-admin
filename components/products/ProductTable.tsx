"use client";

import { Product } from "@/types/product";
import ProductRow from "./ProductRow";

interface Props {
  products: Product[];
  onView: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export default function ProductTable({
  products,
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-green-50">
          <tr className="text-left text-sm text-gray-600">
            <th className="p-4">Product</th>

            <th>Stage</th>

            <th>Farm</th>

            <th>Category</th>

            <th>FarmPlate</th>

            <th>Market</th>

            <th>Saving</th>

            <th>Stock</th>

            <th>Organic</th>

            <th>Grade</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}