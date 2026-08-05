"use client";

import { Customer } from "@/types/customer";
import CustomerRow from "./CustomerRow";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({
  customers,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              Customer
            </th>

            <th>Email</th>

            <th>Orders</th>

            <th>Spent</th>

            <th>Saved</th>

            <th>Favorite Farm</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (

            <CustomerRow
              key={customer.id}
              customer={customer}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}