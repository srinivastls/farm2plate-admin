"use client";

import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services/category.service";

import CategoryStats from "./CategoryStats";
import CategoryFilters from "./CategoryFilters";
import CategoryTable from "./CategoryTable";

export default function Categories() {

  const {

    data = [],

    isLoading,

    error,

  } = useQuery({

    queryKey: ["categories"],

    queryFn: getCategories,

  });

  if (isLoading) {

    return <>Loading...</>;

  }

  if (error) {

    return <>Unable to load categories.</>;

  }

  return (

    <div className="space-y-8">

      <CategoryStats
        categories={data}
      />

      <CategoryFilters />

      <CategoryTable
        categories={data}
      />

    </div>

  );

}