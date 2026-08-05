"use client";

import { useQuery } from "@tanstack/react-query";

import { getAnalytics } from "@/services/analytics.service";

import AnalyticsCards from "./AnalyticsCards";
import RevenueChart from "./RevenueChart";
import OrdersChart from "./OrdersChart";
import TopProducts from "./TopProducts";
import SustainabilityCard from "./SustainabilityCard";
import FarmPerformance from "./FarmPerformance";
import CategoryPerformance from "./CategoryPerformance";
import RecentActivities from "./RecentActivities";

export default function Analytics(){

    const{

        data,

        isLoading,

    }=useQuery({

        queryKey:["analytics"],

        queryFn:getAnalytics,

    });

    if(isLoading){

        return<>Loading...</>;

    }

    if(!data){

        return<>No analytics available.</>;

    }

    return (

<div className="space-y-8">

    <AnalyticsCards
        summary={data.summary}
    />

    <div className="grid gap-8 lg:grid-cols-2">

        <RevenueChart
            data={data.revenue}
        />

        <OrdersChart
            data={data.ordersTrend}
        />

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

        <FarmPerformance
            farms={data.farmPerformance}
        />

        <CategoryPerformance
            categories={data.categoryPerformance}
        />

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

        <TopProducts
            products={data.topProducts}
        />

        <SustainabilityCard
            summary={data.summary}
        />

    </div>

    <RecentActivities
        activities={data.activities ?? []}
    />

</div>

);

}