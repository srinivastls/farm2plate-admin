"use client";

import {

Boxes,

Package,

IndianRupee,

AlertTriangle,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function InventoryStats({

products,

}:any){

const totalProducts=
products.length;

const totalStock=
products.reduce(

(sum:any,p:any)=>

sum+p.quantity,

0,

);

const totalValue=
products.reduce(

(sum:any,p:any)=>

sum+
(
p.quantity*
p.price
),

0,

);

const lowStock=
products.filter(

(p:any)=>

p.quantity<20,

).length;

return(

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Products"

value={totalProducts}

icon={<Boxes/>}

/>

<StatCard

title="Total Stock"

value={totalStock}

icon={<Package/>}

color="bg-blue-600"

/>

<StatCard

title="Inventory Value"

value={`₹${totalValue}`}

icon={<IndianRupee/>}

color="bg-green-600"

/>

<StatCard

title="Low Stock"

value={lowStock}

icon={<AlertTriangle/>}

color="bg-red-600"

/>

</div>

);

}