"use client";

import { Plus, Search } from "lucide-react";

export default function ProductToolbar() {
  return (
    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        Products
      </h1>

      <div className="flex gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search products..."
            className="rounded-lg border py-2 pl-10 pr-4"
          />

        </div>

        <button className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white">

          <Plus size={18} />

          Add Product

        </button>

      </div>

    </div>
  );
}