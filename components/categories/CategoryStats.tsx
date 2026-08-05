"use client";

import {

LayoutGrid,

Package,

Leaf,

IndianRupee,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function CategoryStats({

categories,

}: any) {

const totalCategories =
categories.length;

const totalProducts =
categories.reduce(

(sum:number,c:any)=>

sum+(c.productsCount||0),

0,

);

const organicCategories =
categories.filter(

(c:any)=>

c.name.toLowerCase().includes("organic"),

).length;

return(

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Categories"

value={totalCategories}

icon={<LayoutGrid/>}

/>

<StatCard

title="Products"

value={totalProducts}

icon={<Package/>}

color="bg-blue-600"

/>

<StatCard

title="Organic"

value={organicCategories}

icon={<Leaf/>}

color="bg-green-600"

/>

<StatCard

title="Active"

value={totalCategories}

icon={<IndianRupee/>}

color="bg-purple-600"

/>

</div>

);

}