"use client";

import { Search, Plus } from "lucide-react";

export default function CategoryFilters() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search categories..."
            className="w-80 rounded-lg border py-2 pl-10 pr-4"
          />

        </div>

      </div>

      <button className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700">

        <Plus size={18} />

        Add Category

      </button>

    </div>
  );
}