"use client";

import {

IndianRupee,

ShoppingCart,

Users,

Leaf,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function AnalyticsCards({

summary,

}:any){

return(

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Revenue"

value={`₹${summary.revenue.toLocaleString()}`}

icon={<IndianRupee/>}

/>

<StatCard

title="Orders"

value={summary.orders}

icon={<ShoppingCart/>}

color="bg-blue-600"

/>

<StatCard

title="Customers"

value={summary.customers}

icon={<Users/>}

color="bg-purple-600"

/>

<StatCard

title="CO₂ Saved"

value={`${summary.co2Saved} kg`}

icon={<Leaf/>}

color="bg-green-600"

/>

</div>

);

}