"use client";

import Image from "next/image";
import { Farm } from "@/types/farm";

interface Props {
  farm: Farm | null;
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

export default function FarmDetails({
  farm,
}: Props) {
  if (!farm) return null;

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <div className="flex items-center gap-6">

        <Image
          src={farm.image || "/placeholder-farm.jpg"}
          alt={farm.name}
          width={120}
          height={120}
          className="rounded-xl object-cover border"
        />

        <div>

          <h2 className="text-3xl font-bold">
            {farm.name}
          </h2>

          <p className="text-gray-500">
            {farm.description}
          </p>

          <div className="mt-2">

            {farm.farmer.verified ? (
              <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">
                Verified Farm
              </span>
            ) : (
              <span className="rounded-full bg-red-100 px-3 py-1 text-red-700 text-sm">
                Verification Pending
              </span>
            )}

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">

        <Info
          title="Farmer"
          value={farm.farmer.user.name}
        />

        <Info
          title="Email"
          value={farm.farmer.user.email}
        />

        <Info
          title="Farm Rating"
          value={`⭐ ${farm.farmer.rating}`}
        />

        <Info
          title="Products"
          value={farm.products.length}
        />

        <Info
          title="Address"
          value={farm.address}
        />

        <Info
          title="Created"
          value={new Date(farm.createdAt).toLocaleDateString()}
        />

      </div>

    </div>
  );
}