"use client";

import { Search } from "lucide-react";

export default function InventoryFilters() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-4">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search inventory..."
            className="w-80 rounded-lg border py-2 pl-10 pr-4"
          />

        </div>

        <select className="rounded-lg border px-4">
          <option>All Farms</option>
        </select>

        <select className="rounded-lg border px-4">
          <option>All Categories</option>
        </select>

      </div>

    </div>
  );
}