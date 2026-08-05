"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  categories: {
    name: string;
    value: number;
  }[];
}

const COLORS = [
  "#16a34a",
  "#2563eb",
  "#f59e0b",
  "#ef4444",
  "#7c3aed",
  "#06b6d4",
  "#84cc16",
];

export default function CategoryPerformance({
  categories,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Category Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height={340}
      >

        <PieChart>

          <Pie
            data={categories}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >

            {categories.map((_, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}