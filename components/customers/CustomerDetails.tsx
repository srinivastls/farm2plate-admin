"use client";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer | null;
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

export default function CustomerDetails({
  customer,
}: Props) {
  if (!customer) return null;

  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          {customer.name}
        </h2>

        <p className="text-gray-500">
          {customer.email}
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <Info
          title="Phone"
          value={customer.phone ?? "-"}
        />

        <Info
          title="Total Orders"
          value={customer.totalOrders}
        />

        <Info
          title="Total Spent"
          value={`₹${customer.totalSpent.toLocaleString()}`}
        />

        <Info
          title="Money Saved"
          value={
            <span className="font-bold text-green-600">
              ₹{customer.totalSaved.toLocaleString()}
            </span>
          }
        />

        <Info
          title="Favorite Farm"
          value={customer.favoriteFarm ?? "-"}
        />

        <Info
          title="Favorite Category"
          value={customer.favoriteCategory ?? "-"}
        />

        <Info
          title="Joined"
          value={new Date(customer.createdAt).toLocaleDateString()}
        />

      </div>

    </div>
  );
}