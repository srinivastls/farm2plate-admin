"use client";

export default function Topbar() {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-8">

      <div>

        <h2 className="text-xl font-bold">
          FarmPlate Admin
        </h2>

      </div>

      <div className="flex items-center gap-4">

        <span className="text-gray-500">
          Welcome Admin
        </span>

        <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center">
          A
        </div>

      </div>

    </header>
  );
}