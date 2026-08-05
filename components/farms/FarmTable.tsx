"use client";

import { Farm } from "@/types/farm";
import FarmRow from "./FarmRow";

interface Props {
  farms: Farm[];
}

export default function FarmTable({
  farms,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Farm
            </th>

            <th>Farmer</th>

            <th>Products</th>

            <th>Rating</th>

            <th>Verified</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {farms.map((farm) => (

            <FarmRow
              key={farm.id}
              farm={farm}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}