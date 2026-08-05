"use client";

import Image from "next/image";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import { Product } from "@/types/product";

interface Props {
  product: Product;
  onView: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export default function ProductRow({
  product,
  onView,
  onEdit,
  onDelete,
}: Props) {
  const saving =
    product.marketPrice - product.price;

  return (
    <tr className="border-b hover:bg-green-50 transition">
      {/* Product */}

      <td className="p-4">
        <div className="flex items-center gap-4">
          <Image
            src={product.image || "/placeholder.png"}
            alt={product.name}
            width={55}
            height={55}
            className="rounded-lg object-cover"
          />

          <div>
            <h3 className="font-semibold">
              {product.name}
            </h3>

            <p className="text-xs text-gray-500">
              {product.lotId}
            </p>
          </div>
        </div>
      </td>

      {/* Stage */}

      <td>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            product.processingStage === "RAW"
              ? "bg-orange-100 text-orange-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {product.processingStage}
        </span>
      </td>

      {/* Farm */}

      <td>{product.farm?.name}</td>

      {/* Category */}

      <td>{product.category?.name}</td>

      {/* FarmPlate */}

      <td>₹{product.price}</td>

      {/* Market */}

      <td>₹{product.marketPrice}</td>

      {/* Saving */}

      <td>
        <span className="font-bold text-green-600">
          ₹{saving}
        </span>
      </td>

      {/* Stock */}

      <td>
        <span
          className={`font-semibold ${
            product.quantity < 20
              ? "text-red-600"
              : "text-green-700"
          }`}
        >
          {product.quantity} {product.unit}
        </span>
      </td>

      {/* Organic */}

      <td>{product.organic ? "🌿" : "-"}</td>

      {/* Grade */}

      <td>{product.qualityGrade ?? "-"}</td>

      {/* Actions */}

      <td>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onView(product)}
          >
            <Eye
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            type="button"
            onClick={() => onEdit(product)}
          >
            <Pencil
              size={18}
              className="text-green-600"
            />
          </button>

          <button
            type="button"
            onClick={() => onDelete(product)}
          >
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