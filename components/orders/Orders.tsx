"use client";

import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/services/order.service";

import OrderStats from "./OrderStats";
import OrderFilters from "./OrderFilters";
import OrderTable from "./OrderTable";

export default function Orders() {

  const {

    data = [],

    isLoading,

    error,

  } = useQuery({

    queryKey: ["orders"],

    queryFn: getOrders,

  });

  if (isLoading) {

    return <p>Loading...</p>;

  }

  if (error) {

    return <p>Unable to load orders.</p>;

  }

  return (

    <div className="space-y-8">

      <OrderStats
        orders={data}
      />

      <OrderFilters />

      <OrderTable
        orders={data}
      />

    </div>

  );

}