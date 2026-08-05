"use client";

import {
    Boxes,
    Leaf,
    Factory,
    IndianRupee,
    AlertTriangle,
    Wheat,
} from "lucide-react";

import StatCard from "../dashboard/StatCard";

interface Props{
    products:any[];
}

export default function ProductStats({
    products,
}:Props){

    const total=products.length;

    const processed=
        products.filter(
            (p:any)=>
            p.processingStage==="PROCESSED",
        ).length;

    const raw=
        products.filter(
            (p:any)=>
            p.processingStage==="RAW",
        ).length;

    const organic=
        products.filter(
            (p:any)=>p.organic,
        ).length;

    const lowStock=
        products.filter(
            (p:any)=>p.quantity<20,
        ).length;

    const avgSaving=

        total===0
            ?0
            :

            Math.round(

                products.reduce(

                    (sum:any,p:any)=>

                        sum+
                        (
                            p.marketPrice-
                            p.price
                        ),

                    0,

                )/total,

            );

    return(

        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-6">

            <StatCard
                title="Products"
                value={total}
                icon={<Boxes/>}
            />

            <StatCard
                title="Raw"
                value={raw}
                color="bg-orange-500"
                icon={<Wheat/>}
            />

            <StatCard
                title="Processed"
                value={processed}
                color="bg-blue-500"
                icon={<Factory/>}
            />

            <StatCard
                title="Organic"
                value={organic}
                color="bg-green-600"
                icon={<Leaf/>}
            />

            <StatCard
                title="Avg Saving"
                value={`₹${avgSaving}`}
                color="bg-purple-600"
                icon={<IndianRupee/>}
            />

            <StatCard
                title="Low Stock"
                value={lowStock}
                color="bg-red-600"
                icon={<AlertTriangle/>}
            />

        </div>

    );

}