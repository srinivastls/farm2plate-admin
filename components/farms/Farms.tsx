"use client";

import { useQuery } from "@tanstack/react-query";

import { getFarms } from "@/services/farm.service";

import FarmStats from "./FarmStats";
import FarmFilters from "./FarmFilters";
import FarmTable from "./FarmTable";

export default function Farms() {

  const {

    data = [],

    isLoading,

    error,

  } = useQuery({

    queryKey: ["farms"],

    queryFn: getFarms,

  });

  if (isLoading) {

    return <>Loading...</>;

  }

  if (error) {

    return <>Unable to load farms.</>;

  }

  return (

    <div className="space-y-8">

      <FarmStats farms={data} />

      <FarmFilters />

      <FarmTable farms={data} />

    </div>

  );

}