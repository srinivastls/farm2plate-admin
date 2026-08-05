"use client";

import { Search, Plus } from "lucide-react";

export default function FarmFilters() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search farms..."
            className="w-80 rounded-lg border py-2 pl-10 pr-4"
          />

        </div>

        <select className="rounded-lg border px-4">

          <option>All Farmers</option>

        </select>

        <select className="rounded-lg border px-4">

          <option>Verified</option>

          <option>Yes</option>

          <option>No</option>

        </select>

      </div>

      <button className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white">

        <Plus size={18} />

        Add Farm

      </button>

    </div>
  );
}