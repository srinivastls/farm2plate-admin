"use client";

import { useQuery } from "@tanstack/react-query";

import api from "@/services/api";

import DashboardCards from "./DashboardCards";
import RecentOrders from "./RecentOrders";
import LowStockProducts from "./LowStockProducts";

export default function Dashboard() {

  const {
  data,
  isLoading,
  error,
} = useQuery({
  queryKey: ["dashboard"],
  queryFn: async () => {
    const res = await api.get("/admin/dashboard");
    return res.data;
  },
});

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error loading dashboard</p>;
}

if (!data) {
  return <p>No dashboard data</p>;
}

const dashboard = data.data ?? data;

return (
  <div className="space-y-8">

    <DashboardCards
      data={dashboard.summary ?? dashboard}
    />

    <div className="grid gap-8 lg:grid-cols-2">

      <RecentOrders
        orders={dashboard.recentOrders ?? []}
      />

      <LowStockProducts
        products={dashboard.lowStockProducts ?? []}
      />

    </div>

  </div>
);

}