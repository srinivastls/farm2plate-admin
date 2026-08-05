"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {
  farms: {
    name: string;
    revenue: number;
  }[];
}

export default function FarmPerformance({
  farms,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">

        Top Performing Farms

      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <BarChart data={farms}>

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#16a34a"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}