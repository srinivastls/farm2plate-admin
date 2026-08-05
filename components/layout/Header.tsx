"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          placeholder="Search..."
          className="w-96 rounded-lg border py-2 pl-10 pr-4 outline-none focus:border-green-600"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell />

        <UserCircle2 size={34} />

      </div>

    </header>
  );
}