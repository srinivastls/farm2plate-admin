"use client";

import {

MapPinned,

Leaf,

Package,

Star,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function FarmStats({

farms,

}: any) {

const totalFarms =
farms.length;

const verified =
farms.filter(

(f: any) =>
f.farmer?.verified,

).length;

const products =
farms.reduce(

(sum: number, f: any) =>
sum + (f.products?.length ?? 0),

0,

);

const avgRating =
totalFarms === 0
? 0
: (
farms.reduce(

(sum: number, f: any) =>
sum + (f.farmer?.rating ?? 0),

0,

) / totalFarms
).toFixed(1);

return (

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Farms"

value={totalFarms}

icon={<MapPinned />}

/>

<StatCard

title="Verified"

value={verified}

icon={<Leaf />}

color="bg-green-600"

/>

<StatCard

title="Products"

value={products}

icon={<Package />}

color="bg-blue-600"

/>

<StatCard

title="Avg Rating"

value={avgRating}

icon={<Star />}

color="bg-yellow-500"

/>

</div>

);

}