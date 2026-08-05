"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  data: {
    month: string;
    orders: number;
  }[];
}

export default function OrdersChart({
  data,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">

        Orders Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="orders"
            radius={[6, 6, 0, 0]}
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}