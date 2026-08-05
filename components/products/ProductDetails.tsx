"use client";

import { Product } from "@/types/product";

interface Props {
  product: Product | null;
}

export default function ProductDetails({
  product,
}: Props) {
  if (!product) return null;

  return (
    <div className="space-y-6 rounded-xl border bg-white p-6 shadow">

      <div>

        <h2 className="text-2xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.description}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <Info
          title="Farm"
          value={product.farm.name}
        />

        <Info
          title="Category"
          value={product.category.name}
        />

        <Info
          title="Stage"
          value={product.processingStage}
        />

        <Info
          title="Organic"
          value={
            product.organic
              ? "Yes"
              : "No"
          }
        />

        <Info
          title="Price"
          value={`₹${product.price}`}
        />

        <Info
          title="Market"
          value={`₹${product.marketPrice}`}
        />

        <Info
          title="Stock"
          value={`${product.quantity} ${product.unit}`}
        />

        <Info
          title="Lot"
          value={product.lotId}
        />

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div>

      <p className="text-xs text-gray-500">
        {title}
      </p>

      <p className="font-semibold">
        {value}
      </p>

    </div>
  );
}