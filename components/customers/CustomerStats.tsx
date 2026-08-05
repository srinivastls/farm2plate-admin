"use client";

import {

Users,

ShoppingBag,

IndianRupee,

Leaf,

} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function CustomerStats({

customers,

}: any) {

const totalCustomers =
customers.length;

const totalRevenue =
customers.reduce(

(sum: number, c: any) =>
sum + c.totalSpent,

0,

);

const totalOrders =
customers.reduce(

(sum: number, c: any) =>
sum + c.totalOrders,

0,

);

const totalSaved =
customers.reduce(

(sum: number, c: any) =>
sum + c.totalSaved,

0,

);

return (

<div className="grid gap-6 lg:grid-cols-4">

<StatCard

title="Customers"

value={totalCustomers}

icon={<Users />}

/>

<StatCard

title="Orders"

value={totalOrders}

icon={<ShoppingBag />}

color="bg-blue-600"

/>

<StatCard

title="Revenue"

value={`₹${totalRevenue.toLocaleString()}`}

icon={<IndianRupee />}

color="bg-green-600"

/>

<StatCard

title="Customer Savings"

value={`₹${totalSaved.toLocaleString()}`}

icon={<Leaf />}

color="bg-emerald-600"

/>

</div>

);

}