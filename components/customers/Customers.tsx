"use client";

import { useQuery } from "@tanstack/react-query";

import { getCustomers } from "@/services/customer.service";

import CustomerStats from "./CustomerStats";
import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";

export default function Customers() {

  const {

    data = [],

    isLoading,

    error,

  } = useQuery({

    queryKey: ["customers"],

    queryFn: getCustomers,

  });

  if (isLoading) {

    return <>Loading...</>;

  }

  if (error) {

    return <>Unable to load customers.</>;

  }

  return (

    <div className="space-y-8">

      <CustomerStats customers={data} />

      <CustomerFilters />

      <CustomerTable customers={data} />

    </div>

  );

}