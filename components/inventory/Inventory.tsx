"use client";

import { useQuery } from "@tanstack/react-query";

import { getInventory } from "@/services/inventory.service";

import InventoryStats from "./InventoryStats";
import InventoryFilters from "./InventoryFilters";
import InventoryTable from "./InventoryTable";

export default function Inventory(){

    const{

        data=[],

        isLoading,

    }=useQuery({

        queryKey:["inventory"],

        queryFn:getInventory,

    });

    if(isLoading){

        return<>Loading...</>;

    }

    return(

        <div className="space-y-8">

            <InventoryStats
                products={data}
            />

            <InventoryFilters/>

            <InventoryTable
                products={data}
            />

        </div>

    );

}