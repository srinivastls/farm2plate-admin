"use client";

import Image from "next/image";
import { Inventory } from "@/types/inventory";

interface Props {
  product: Inventory | null;
}

function Info({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

export default function InventoryDetails({
  product,
}: Props) {
  if (!product) return null;

  const inventoryValue =
    product.quantity * product.price;

  const customerSaving =
    product.marketPrice - product.price;

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <div className="flex items-center gap-5">

        <Image
          src={
            product.image || "/placeholder.png"
          }
          alt={product.name}
          width={100}
          height={100}
          className="rounded-xl border object-cover"
        />

        <div>

          <h2 className="text-2xl font-bold">
            {product.name}
          </h2>

          <p className="text-gray-500">
            {product.category.name}
          </p>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <Info
          title="Farm"
          value={product.farm.name}
        />

        <Info
          title="Processing"
          value={product.processingStage}
        />

        <Info
          title="Stock"
          value={`${product.quantity} ${product.unit}`}
        />

        <Info
          title="Inventory Value"
          value={`₹${inventoryValue}`}
        />

        <Info
          title="FarmPlate Price"
          value={`₹${product.price}`}
        />

        <Info
          title="Market Price"
          value={`₹${product.marketPrice}`}
        />

        <Info
          title="Customer Saving"
          value={
            <span className="font-bold text-green-600">
              ₹{customerSaving}
            </span>
          }
        />

        <Info
          title="Organic"
          value={
            product.organic
              ? "🌿 Yes"
              : "No"
          }
        />

        <Info
          title="Quality Grade"
          value={
            product.qualityGrade ?? "-"
          }
        />

      </div>

    </div>
  );
}