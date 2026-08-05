"use client";

import { Search } from "lucide-react";

export default function OrderFilters() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-4">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search order..."
            className="w-80 rounded-lg border py-2 pl-10 pr-4"
          />

        </div>

        <select className="rounded-lg border px-4">

          <option>All Status</option>

          <option>PENDING</option>

          <option>CONFIRMED</option>

          <option>PACKED</option>

          <option>SHIPPED</option>

          <option>DELIVERED</option>

          <option>CANCELLED</option>

        </select>

        <select className="rounded-lg border px-4">

          <option>Payment</option>

          <option>PAID</option>

          <option>PENDING</option>

          <option>FAILED</option>

        </select>

      </div>

    </div>
  );
}