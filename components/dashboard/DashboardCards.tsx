"use client";

import {
  IndianRupee,
  Package,
  ShoppingCart,
  Users,
  Clock,
  AlertTriangle,
} from "lucide-react";

import StatCard from "./StatCard";

interface Props {
  data: any;
}

export default function DashboardCards({
  data,
}: Props) {
  console.log(data);
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Revenue"
        value={`₹${data.revenue}`}
        icon={<IndianRupee />}
      />

      <StatCard
        title="Orders"
        value={data.orders}
        icon={<ShoppingCart />}
        color="bg-blue-600"
      />

      <StatCard
        title="Products"
        value={data.products}
        icon={<Package />}
        color="bg-purple-600"
      />

      <StatCard
        title="Customers"
        value={data.customers}
        icon={<Users />}
        color="bg-orange-600"
      />

      <StatCard
        title="Pending Orders"
        value={data.pendingOrders}
        icon={<Clock />}
        color="bg-yellow-500"
      />

      <StatCard
        title="Low Stock"
        value={data.lowStock}
        icon={<AlertTriangle />}
        color="bg-red-600"
      />

    </div>
  );
}