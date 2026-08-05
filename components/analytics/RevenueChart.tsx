"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: {
    month: string;
    revenue: number;
  }[];
}

export default function RevenueChart({
  data,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">

        Revenue Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <AreaChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#16a34a"
            fill="#bbf7d0"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}