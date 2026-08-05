"use client";

import {

ShoppingCart,

Clock,

CheckCircle,

IndianRupee,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function OrderStats({

orders,

}: any) {

const totalOrders =
orders.length;

const pending =
orders.filter(

(o: any) =>
o.status === "PENDING",

).length;

const delivered =
orders.filter(

(o: any) =>
o.status === "DELIVERED",

).length;

const revenue =
orders.reduce(

(sum: number, o: any) =>
sum + o.total,

0,

);

return (

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Orders"

value={totalOrders}

icon={<ShoppingCart />}

/>

<StatCard

title="Pending"

value={pending}

icon={<Clock />}

color="bg-yellow-500"

/>

<StatCard

title="Delivered"

value={delivered}

icon={<CheckCircle />}

color="bg-green-600"

/>

<StatCard

title="Revenue"

value={`₹${revenue.toLocaleString()}`}

icon={<IndianRupee />}

color="bg-blue-600"

/>

</div>

);

}